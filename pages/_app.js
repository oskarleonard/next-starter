import '../styles/globals.css';
import React from 'react';
import { CookiesProvider } from 'react-cookie';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import ErrorBoundary from 'components/atoms/errorBoundary/ErrorBoundary';
import CookieNotification from 'components/molecules/cookieNotification/CookieNotification';
import Navbar from 'components/molecules/navbars/navbar/Navbar';
import Footer from 'components/molecules/footer/Footer';
import MobileNavbarMenu from 'components/molecules/navbars/mobileNavbarMenu/MobileNavbarMenu';
import MetaTags from 'components/molecules/metaTags/MetaTags';
import styles from '../styles/app.module.css';

function MyApp({ Component, pageProps }) {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <CookiesProvider>
          <AppFrame Component={Component} pageProps={pageProps} />
        </CookiesProvider>
      </Provider>
    </ErrorBoundary>
  );
}

export default MyApp;

const AppFrame = ({ Component, pageProps }) => {
  return (
    <>
      <MetaTags
        title={'Mera friluftsliv med NOA!'}
        description={
          'En app för friluftsentusiaster att bli inspirerade och få nya insikter. Erfaren eller inte, upptäck vad Sveriges fantastiska friluftsliv har att erbjuda med oss!'
        }
        imageUrl={
          'https://storage.googleapis.com/strapi-uploads-prod/noa_og_share_40a60d388b/noa_og_share_40a60d388b.png'
        }
      />
      <div className={styles.main}>
        <Navbar />
        <main>
          <Component {...pageProps} />
          <ConditionalAppFrameRenders />
        </main>
      </div>
      <Footer />
    </>
  );
};

const ConditionalAppFrameRenders = () => {
  return (
    <>
      <CookieNotification />
      <MobileNavbarMenu />
    </>
  );
};
