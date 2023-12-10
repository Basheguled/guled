import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { content, main } from "../styles/Home.module.css";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import avi from "../public/avi.svg";

const IntroContent = () => (
  <div style={{ width: "500px" }}>
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
  <Image priority={true} src={avi} alt="logo" height={500} width={500} />
);

const Intro = () => (
  <div
    style={{
      width: "100%",
      height: "100%",
      padding: "0 5rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    }}
  >
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "5rem",
      }}
    >
      <IntroContent />
      <Avi />
    </div>
  </div>
);

export default function Home() {
  return (
    <div className={content}>
      <Head>
        <title>Guled Bashe</title>
        <meta name="description" content="Personal Site" />
        <link rel="icon" href="/guled-logo.png" />
      </Head>

      <div className={main}>
        <Navbar />
        <Intro />
      </div>

      <Footer />
    </div>
  );
}
