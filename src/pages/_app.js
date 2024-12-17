import 'bootstrap/dist/css/bootstrap.min.css';
import "@/styles/globals.css";
import 'swiper/css';
import Layout from './components/layouts/Layout';
export default function App({ Component, pageProps }) {
  return <>
     <Layout>
      <Component {...pageProps} />
     </Layout>
  </>
}
