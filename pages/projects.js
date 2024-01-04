import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import avi from "../public/avi.svg";
import CONFIG from "../public/config";
import { Pill } from "../components/Pill";
import { AiOutlineGithub } from "react-icons/ai";

const Card = ({ title, link, description, github, skills }) => (
  <div className="border-slate-300 border p-6 rounded flex flex-col gap-2">
    <div className="flex justify-between items-center gap-2">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <h3>{title}</h3>
      </a>
      <a
        className="hover:bg-[var(--pill-background)] rounded-full p-2"
        href={github}
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiOutlineGithub size={24} />
      </a>
    </div>
    <p>{description}</p>
    <div className="flex flex-row flex-wrap gap-1 pb-4">
      {skills.map((skill, i) => {
        return <Pill key={i}>{skill}</Pill>;
      })}
    </div>
  </div>
);

const Content = () => (
  <div className="w-full flex justify-center">
    <div className="flex flex-col justify-center items-center gap-12 pb-16 max-w-5xl">
      <h1>{CONFIG.projects.title}</h1>
      <div className="mx-3 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {CONFIG.projects.content.map((project, i) => {
          return <Card key={i} {...project} />;
        })}
      </div>
    </div>
  </div>
);

export default function Projects({ theme, toggleTheme }) {
  return (
    <div className="w-full m-auto text-[var(--primary)] bg-[var(--secondary)]">
      <Head>
        <title>Guled Bashe</title>
        <meta name="description" content="Personal Site" />
        <link rel="icon" href="/guled-logo.png" />
      </Head>

      <div className="grid grid-rows-page gap-12">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Content />
        <Footer />
      </div>
    </div>
  );
}
