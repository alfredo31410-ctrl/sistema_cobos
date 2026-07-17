'use client';

import Script from 'next/script';
import { useEffect } from 'react';

export default function ActiveCampaignForm() {
  useEffect(() => {
    const previousCallback = window._form_callback;
    const createRegistrationId = () =>
      typeof crypto.randomUUID === 'function'
        ? crypto.randomUUID()
        : `registration-${Date.now()}`;

    const handleSubmit = (event) => {
      if (!event.target.closest('._form_285')) return;
      sessionStorage.setItem(
        'pending_class_registration_id',
        createRegistrationId()
      );
    };

    document.addEventListener('submit', handleSubmit, true);

    window._form_callback = (...args) => {
      if (typeof previousCallback === 'function') previousCallback(...args);

      if (!sessionStorage.getItem('pending_class_registration_id')) {
        sessionStorage.setItem(
          'pending_class_registration_id',
          createRegistrationId()
        );
      }

      window.location.assign('/gracias?registro=clase-gratis');
    };

    return () => {
      document.removeEventListener('submit', handleSubmit, true);

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
