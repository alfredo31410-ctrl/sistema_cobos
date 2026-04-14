export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;

function canTrack() {
  return typeof window !== "undefined" && typeof window.fbq === "function";
}

export const pageview = () => {
  if (!canTrack()) return;
  window.fbq("track", "PageView");
};

export const track = (eventName, params = {}, options = {}) => {
  if (!canTrack()) return;
  window.fbq("track", eventName, params, options);
};

export const trackCustom = (eventName, params = {}) => {
  if (!canTrack()) return;
  window.fbq("trackCustom", eventName, params);
};