'use client';

import Script from 'next/script';
import { useEffect } from 'react';

export default function ActiveCampaignForm() {
  useEffect(() => {
    const previousCallback = window._form_callback;

    window._form_callback = (...args) => {
      if (typeof previousCallback === 'function') previousCallback(...args);
      window.location.assign('/gracias?registro=clase-gratis');
    };

    return () => {
      if (previousCallback) {
        window._form_callback = previousCallback;
      } else {
        delete window._form_callback;
      }
    };
  }, []);

  return (
    <div className="ac-form-wrapper">
      <div className="_form_285"></div>

      <Script
        src="https://cefincapacitacion.activehosted.com/f/embed.php?id=285"
        strategy="afterInteractive"
      />
    </div>
  );
}
