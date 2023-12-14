import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import avi from "../public/avi.svg";

const IntroContent = () => (
  <div className="lg:w-1/2 flex flex-col gap-4">
    <h1>Hi, I&apos;m Guled Bashe 👋🏾</h1>
    <p>
      I am a Frontend Software Engineer with 3+ years of professional experience
      building scalable UI features in React and JavaScript.
    </p>
    <p>My passion is crafting high-quality user experiences.</p>
    <Link href="/about">Read more about me here!</Link>
  </div>
);

const Avi = () => (
  <div className="lg:order-last">
    <Image priority={true} src={avi} alt="logo" />
  </div>
);

const Intro = () => (
  <div className="w-full h-full pt-0 pb-20 lg:px-20 px-8 flex flex-col justify-center">
    <div className="flex lg:flex-row flex-col justify-center items-center lg:gap-20 gap-8">
      <Avi />
      <IntroContent />
    </div>
  </div>
);

export default function Home({ theme, toggleTheme }) {
  return (
    <div className="w-full m-auto text-[var(--primary)] bg-[var(--secondary)]">
      <Head>
        <title>Guled Bashe</title>
        <meta name="description" content="Personal Site" />
        <link rel="icon" href="/guled-logo.png" />
      </Head>

      <div className="grid grid-rows-page gap-12">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Intro />
        <Footer />
      </div>
    </div>
  );
}
