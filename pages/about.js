import Head from 'next/head'
import { content, main } from '../styles/About.module.css'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer';


const Content = () => (
  <div style={{
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }}>
    Under construction 🚧
  </div>
);

export default function About() {
  return (
    <div className={content}>
      <Head>
        <title>Guled Bashe</title>
        <meta name="description" content="Personal Site" />
        <link rel="icon" href="/guled-logo.png" />
      </Head>

      <div className={main}>
        <Navbar />
        <Content />
      </div>

      <Footer />
    </div>
  );
};
