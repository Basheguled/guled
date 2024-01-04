import Head from "next/head";
import { AiOutlineDownload } from "react-icons/ai";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import CONFIG from "../public/config";
import React from "react";
import { Pill } from "../components/Pill";
import Image from "next/image";

const Education = () => (
  <div className="w-3/4">
    <h1 className="pb-2">{CONFIG.about.education.title}</h1>
    <div className="flex flex-row justify-between gap-2">
      <div>
        <h3>{CONFIG.about.education.major}</h3>
        <h3>{CONFIG.about.education.school}</h3>
      </div>
      <h3>{CONFIG.about.education.graduation}</h3>
    </div>
  </div>
);

const Resume = () => (
  <div className="w-3/4 flex sm:flex-row flex-col justify-between gap-2">
    <h1 className="pb-4">{CONFIG.about.resume.title}</h1>
    <div className="w-min">
      <a href={CONFIG.about.resume.href} download>
        <div className="flex flex-row items-center justify-space py-2 px-4 border-2 border-solid border-[var(--primary)] rounded">
          <p className="pr-2">{CONFIG.about.resume.text}</p>
          {CONFIG.about.resume.icon}
        </div>
      </a>
    </div>
  </div>
);

const Experience = () => (
  <div className="w-3/4">
    <h1 className="pb-4">{CONFIG.about.experience.title}</h1>
    <table>
      <tbody>
        {CONFIG.about.experience.content.map((job, i) => {
          return (
            <React.Fragment key={job.title}>
              <tr>
                <td className="flex flex-col gap-2">
                  <div className="flex sm:flex-row flex-col sm:items-center items-start justify-between gap-2">
                    <div className="flex flex-row gap-2 sm:items-center">
                      <h2>
                        <a
                          href={job.link}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          {job.title}
                        </a>
                      </h2>
                      <Image
                        priority={true}
                        src={job.logo}
                        width={24}
                        height={24}
                        alt="logo"
                      />
                    </div>
                    <h3>{job.date}</h3>
                  </div>
                  <div className="w-fit">
                    <Pill bg="bg-[var(--location-background)]">
                      {job.location}
                    </Pill>
                  </div>

                  <h3>
                    {job.roles.map((role, i) => {
                      return `${i !== 0 ? " " : ""}${role}${
                        i !== job.roles.length - 1 ? " → " : ""
                      }`;
                    })}
                  </h3>
                  <p>{job.description}</p>
                </td>
              </tr>
              {i !== CONFIG.about.experience.content.length - 1 && (
                <tr className="h-8" />
              )}
            </React.Fragment>
          );
        })}
      </tbody>
    </table>
  </div>
);
const Skills = () => (
  <div className="w-3/4">
    <div className="w-full">
      <h1 className="pb-2">{CONFIG.about.skills.title}</h1>
      <div className="flex flex-row flex-wrap gap-2 pb-4">
        {CONFIG.about.skills.content.map((skill, i) => {
          return <Pill key={i}>{skill}</Pill>;
        })}
      </div>
    </div>
  </div>
);

const Content = () => (
  <div className="w-full flex justify-center">
    <div className="flex flex-col justify-center items-center gap-12 pb-16 max-w-5xl">
      <h1>{CONFIG.about.title}</h1>
      <Resume />
      <Experience />
      <Skills />
      <Education />
    </div>
  </div>
);

export default function About({ theme, toggleTheme }) {
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
