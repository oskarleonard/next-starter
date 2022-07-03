import classNames from 'classnames/bind';
import { useCookies } from 'react-cookie';
import React from 'react';
import useHasMounted from 'components/hooks/useHasMounted';
import { ScriptGoogleAnalytics } from 'components/scripts/ScriptGoogleAnalytics';
import styles from './cookieNotification.module.css';

function CookieNotification({ className }: { className?: string }) {
  const hasMounted = useHasMounted();
  const [cookies, setCookie] = useCookies(['acceptedCookies']);
  const showCookieBanner = hasMounted && cookies.acceptedCookies !== 'true';
  const shouldLoadGoogleAnalytics =
    hasMounted && cookies.acceptedCookies === 'true';

  if (shouldLoadGoogleAnalytics) {
    return <ScriptGoogleAnalytics />;
  } else if (!showCookieBanner) {
    return null;
  }

  const onAcceptAllCookies = () => {
    const options = {
      path: '/',
      expires: new Date('2030-01-01'),
    };
    setCookie('acceptedCookies', true, options);
  };

  return (
    <div
      className={classNames(
        styles.cookieNotification,
        className,
        hasMounted && !cookies.acceptedCookies && styles.slideUp
      )}
    >
      <div className={'container flex items-center justify-center px-8 py-16'}>
        <div className={classNames('text-18')}>
          Denna hemsida använder kakor för att förbättra din upplevelse
        </div>
        <button
          className={classNames(
            styles.btn,
            'ml-8 border border-heavyMetal py-4 px-8'
          )}
          onClick={onAcceptAllCookies}
        >
          Acceptera
        </button>
      </div>
      {hasMounted && cookies.acceptedCookies && <ScriptGoogleAnalytics />}
    </div>
  );
}

export default CookieNotification;
