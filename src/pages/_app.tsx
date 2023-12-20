import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { persistor, store } from '@/store';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-loading-skeleton/dist/skeleton.css';
import { PersistGate } from 'redux-persist/integration/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
        <ToastContainer position="top-center" />
      </PersistGate>
    </Provider>
  );
}
