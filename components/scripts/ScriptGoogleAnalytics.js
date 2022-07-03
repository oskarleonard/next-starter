import React from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { gTagPageView } from 'shared/utils/globalProjectUtils/gtag/gtagUtils';

export function ScriptGoogleAnalytics() {
  const router = useRouter();

  React.useEffect(() => {
    const handleRouteChange = (url) => {
      gTagPageView(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}
