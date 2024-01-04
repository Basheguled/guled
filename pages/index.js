import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import avi from "../public/avi.svg";
import CONFIG from "../public/config";

const IntroContent = () => {
  const { home } = CONFIG;

  return (
    <div className="lg:w-1/2 flex flex-col gap-4">
      <h1>{home.title}</h1>
      <p>{home.description}</p>
      <Link href={home.link.href}>{home.link.text}</Link>
    </div>
  );
};

const Avi = () => (
  <div className="lg:order-last">
    <Image priority={true} src={CONFIG.home.image} alt="logo" />
  </div>
);

const Intro = () => (
  <div className="w-full h-full pt-0 pb-20 lg:px-20 px-8 flex flex-col justify-center items-center">
    <div className="flex lg:flex-row flex-col justify-center items-center lg:gap-20 gap-8 w-full max-w-5xl">
      <Avi />
      <IntroContent />
    </div>
  </div>
);

export default function Home({ theme, toggleTheme }) {
  return (
    <div className="h-screen w-full m-auto text-[var(--primary)] bg-[var(--secondary)]">
      <Head>
        <title>Guled Bashe</title>
        <meta name="description" content="Personal Site" />
        <link rel="icon" href="/guled-logo.png" />
      </Head>

      <div className="h-full grid grid-rows-page gap-12">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Intro />
        <Footer />
      </div>
    </div>
  );
}
