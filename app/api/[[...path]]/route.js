import { MongoClient } from 'mongodb';
import { v4 as uuidv4 } from 'uuid';
import { NextResponse } from 'next/server';

let client;
let db;

async function connectToMongo() {
  if (!client) {
    client = new MongoClient(process.env.MONGO_URL);
    await client.connect();
    db = client.db(process.env.DB_NAME);
  }

  return db;
}

function handleCORS(response) {
  response.headers.set(
    'Access-Control-Allow-Origin',
    process.env.CORS_ORIGINS || '*'
  );
  response.headers.set(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  );
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  response.headers.set('Access-Control-Allow-Credentials', 'true');
  return response;
}

export async function OPTIONS() {
  return handleCORS(new NextResponse(null, { status: 200 }));
}

async function handleRoute(request, { params }) {
  const { path = [] } = params;
  const route = `/${path.join('/')}`;
  const method = request.method;

  try {
    if (route === '/root' && method === 'GET') {
      return handleCORS(NextResponse.json({ message: 'Hello World' }));
    }

    if (route === '/' && method === 'GET') {
      return handleCORS(NextResponse.json({ message: 'Hello World' }));
    }

    if (route === '/health' && method === 'GET') {
      return handleCORS(
        NextResponse.json({
          ok: true,
          service: 'sistema-cobos-api',
          timestamp: new Date().toISOString(),
        })
      );
    }

    if (route === '/status' && method === 'POST') {
      const database = await connectToMongo();
      const body = await request.json();

      if (!body.client_name) {
        return handleCORS(
          NextResponse.json({ error: 'client_name is required' }, { status: 400 })
        );
      }

      const statusObj = {
        id: uuidv4(),
        client_name: body.client_name,
        timestamp: new Date(),
      };

      await database.collection('status_checks').insertOne(statusObj);
      return handleCORS(NextResponse.json(statusObj));
    }

    if (route === '/status' && method === 'GET') {
      const database = await connectToMongo();

      const statusChecks = await database
        .collection('status_checks')
        .find({})
        .limit(1000)
        .toArray();

      const cleanedStatusChecks = statusChecks.map(({ _id, ...rest }) => rest);
      return handleCORS(NextResponse.json(cleanedStatusChecks));
    }

    if (route === '/diagnostico' && method === 'POST') {
      const body = await request.json();
      const scriptUrl = process.env.DIAGNOSTICO_SCRIPT_URL;

      if (!scriptUrl) {
        return handleCORS(
          NextResponse.json(
            {
              success: false,
              error: 'DIAGNOSTICO_SCRIPT_URL is not configured',
            },
            { status: 500 }
          )
        );
      }

      const response = await fetch(scriptUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(body),
        cache: 'no-store',
      });

      const text = await response.text();

      let data;
      try {
        data = JSON.parse(text);
      } catch {
        data = { success: response.ok, raw: text };
      }

      if (!response.ok) {
        return handleCORS(
          NextResponse.json(
            {
              success: false,
              error: 'Apps Script respondió con error',
              details: data,
            },
            { status: 500 }
          )
        );
      }

      return handleCORS(
        NextResponse.json({
          success: true,
          data,
        })
      );
    }

    return handleCORS(
      NextResponse.json({ error: `Route ${route} not found` }, { status: 404 })
    );
  } catch (error) {
    console.error('API Error:', error);

    return handleCORS(
      NextResponse.json(
        {
          success: false,
          error: 'Internal server error',
          details: error.message,
        },
        { status: 500 }
      )
    );
  }
}

export const GET = handleRoute;
export const POST = handleRoute;
export const PUT = handleRoute;
export const DELETE = handleRoute;
export const PATCH = handleRoute;
