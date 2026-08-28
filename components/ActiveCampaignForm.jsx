"use client";

import Script from "next/script";
import { useCallback, useEffect, useRef, useState } from "react";
import { createActiveCampaignCallback } from "@/lib/active-campaign-callback";
import {
  ACTIVE_CAMPAIGN_FORM,
  FREE_CLASS_EVENT,
  getActiveCampaignFields,
} from "@/lib/clase-gratis-config";
import { track } from "@/lib/meta-pixel";

const REDIRECT_DELAY_MS = 900;

export default function ActiveCampaignForm({ country }) {
  const wrapperRef = useRef(null);
  const callbackIdRef = useRef(String(ACTIVE_CAMPAIGN_FORM.id));
  const redirectTimerRef = useRef(null);
  const [scriptError, setScriptError] = useState(false);

  const configureForm = useCallback(() => {
    const form = wrapperRef.current?.querySelector(
      `form._form_${ACTIVE_CAMPAIGN_FORM.id}`,
    );

    if (!form) return false;

    form.action = ACTIVE_CAMPAIGN_FORM.endpoint;
    form.dataset.campaignCountry = country.countryCode;
    form.setAttribute(
      "aria-label",
      `Registro a la clase gratuita para ${country.label}`,
    );

    const internalId = form.elements.namedItem("u");
    if (internalId?.value) callbackIdRef.current = internalId.value;

    const fields = getActiveCampaignFields(
      window.location.search,
      country.countryCode,
    );

    for (const [name, value] of Object.entries(fields)) {
      const field = form.elements.namedItem(name);
      if (field && "value" in field) field.value = value;
    }

    const phone = form.elements.namedItem("phone");
    if (phone && "value" in phone) {
      phone.setAttribute("inputmode", "tel");
      phone.setAttribute("autocomplete", "tel");
      phone.setAttribute("data-phone-country", country.phoneCountry);
      phone.placeholder = `Ej. ${country.phoneCountry} 555 123 4567`;
    }

    return true;
  }, [country]);

  useEffect(() => {
    configureForm();

    const observer = new MutationObserver(() => configureForm());
    if (wrapperRef.current) {
      observer.observe(wrapperRef.current, { childList: true, subtree: true });
    }

    return () => observer.disconnect();
  }, [configureForm]);

  useEffect(() => {
    const previousCallback =
      typeof window._form_callback === "function"
        ? window._form_callback
        : undefined;

    const callback = createActiveCampaignCallback({
      previousCallback,
      matchesForm: (id) => {
        const normalizedId = String(id);
        return (
          normalizedId === String(ACTIVE_CAMPAIGN_FORM.id) ||
          normalizedId === callbackIdRef.current
        );
      },
      onSuccess: () => {
        track("CompleteRegistration", {
          content_name: "Clase Gratis - Monetiza tu Conocimiento",
          content_category: "Clase gratuita",
          content_type: "event",
          status: "completed",
          value: 0,
          currency: "MXN",
          country: country.countryCode,
          campaign: FREE_CLASS_EVENT.campaign,
        });

        redirectTimerRef.current = window.setTimeout(() => {
          window.location.assign(country.whatsappUrl);
        }, REDIRECT_DELAY_MS);
      },
    });

    window._form_callback = callback;

    return () => {
      if (redirectTimerRef.current !== null) {
        window.clearTimeout(redirectTimerRef.current);
        redirectTimerRef.current = null;
      }

      if (window._form_callback === callback) {
        if (previousCallback) {
          window._form_callback = previousCallback;
        } else {
          delete window._form_callback;
        }
      }
    };
  }, [country]);

  return (
    <div
      ref={wrapperRef}
      className="ac-form-wrapper"
      onSubmitCapture={configureForm}
    >
      <div className={`_form_${ACTIVE_CAMPAIGN_FORM.id}`} />

      <Script
        id={`active-campaign-form-${ACTIVE_CAMPAIGN_FORM.id}`}
        src={ACTIVE_CAMPAIGN_FORM.embedUrl}
        strategy="afterInteractive"
        onLoad={configureForm}
        onReady={configureForm}
        onError={() => setScriptError(true)}
      />

      {scriptError ? (
        <p role="alert" className="rounded-lg bg-red-50 p-4 text-sm text-red-700">
          No fue posible cargar el formulario. Actualiza la página para volver a
          intentarlo.
        </p>
      ) : null}
    </div>
  );
}
