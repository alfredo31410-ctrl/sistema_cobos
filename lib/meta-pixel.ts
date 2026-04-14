// lib/meta-pixel.ts

export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID || "";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: (...args: unknown[]) => void;
  }
}

export const pageview = () => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "PageView");
  }
};

export const event = (
  name: string,
  options?: Record<string, unknown>
) => {
  if (typeof window !== "undefined" && window.fbq) {
    if (options) {
      window.fbq("track", name, options);
    } else {
      window.fbq("track", name);
    }
  }
};