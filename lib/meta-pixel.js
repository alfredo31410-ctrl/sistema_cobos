export const FB_PIXEL_ID =
  process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID ||
  process.env.NEXT_PUBLIC_PIXEL_ID ||
  "1314488953876063";

function canTrack() {
  return typeof window !== "undefined" && typeof window.fbq === "function";
}

export const pageview = () => {
  if (!canTrack()) return false;
  window.fbq("track", "PageView");
  return true;
};

export const track = (eventName, params = {}, options = {}) => {
  if (!canTrack()) return false;
  window.fbq("track", eventName, params, options);
  return true;
};

export const trackCustom = (eventName, params = {}) => {
  if (!canTrack()) return false;
  window.fbq("trackCustom", eventName, params);
  return true;
};
