'use client';

import Script from 'next/script';

export default function ActiveCampaignForm() {
  return (
    <div className="ac-form-wrapper">
      <div className="_form_179"></div>

      <Script
        src="https://cefincapacitacion.activehosted.com/f/embed.php?id=179"
        strategy="afterInteractive"
      />
    </div>
  );
}