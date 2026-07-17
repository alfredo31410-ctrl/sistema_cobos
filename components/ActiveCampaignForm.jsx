'use client';

import Script from 'next/script';

export default function ActiveCampaignForm() {
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
