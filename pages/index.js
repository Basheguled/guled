import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <div className={styles.content}>
      <Head>
        <title>Guled Bashe</title>
        <meta name="description" content="Personal Site" />
        <link rel="icon" href="/guled-logo.png" />
      </Head>

      <div className={styles.main}>
        <Navbar />
      </div>

      <Footer />
    </div>
  );
};
