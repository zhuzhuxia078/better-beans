<<<<<<< HEAD
import './scss/App.scss';
import Head from 'next/head';
import { AuthUserProvider } from '../firebase/auth_context';

function MyApp({ Component, pageProps }) {
  return (
    <AuthUserProvider >
      <Head>
        <title>Blue Ocean</title>
        <meta name="description" content="Blue Ocean" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </AuthUserProvider>
=======
// import Head from 'next/head';
import Layout from '../components/Layout';
import '../styles/globals.css';
import '../styles/review.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
>>>>>>> main
  );
}

export default MyApp;
