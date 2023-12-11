import Head from "next/head";
import { AiOutlineDownload } from "react-icons/ai";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const Education = () => (
  <div className="flex flex-row items-start justify-between w-3/4">
    <div className="max-w-xs">
      <h1 className="pb-4">what i studied&#58;</h1>
      <p>
        Computer Engineering at the University of Minnesota &mdash; Twin Cities,
        College of Science &amp; Engineering
      </p>
    </div>
    <a href="/guled_bashe_resume.pdf" download>
      <div className="flex flex-row items-center justify-space py-2 px-4 border-2 border-solid border-black">
        <p className="pr-2">Download Resume</p>
        <AiOutlineDownload size={24} />
      </div>
    </a>
  </div>
);

const Experience = () => (
  <div className="w-3/4">
    <h1 className="pb-4">where i&apos;ve worked&#58;</h1>
    <table>
      <tbody>
        <tr>
          <td />
          <td className="pl-4">
            <a
              href="https://www.confluent.io/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Confluent, Remote
            </a>
            <ul className="list-[circle] pl-4">
              <li>Senior Software Engineer | 02.2022 - Present</li>
              <li>Software Engineer | 02.2021 - 02.2022</li>
              <li>Software Engineering Intern | 05.2020 - 12.2020</li>
            </ul>
            <p>
              Working at Confluent, I got to solve a wide array of problems. I
              created new features in our onboarding flow to improve our attach
              rate for new users. I also had the chance to independently improve
              on critical areas like our app&apos;s authentication and payment
              flows. Later on, my team specifically focused on increasing
              customer conversion and user retention by shipping UI features and
              then tracking user behaviors to decide what to ship next!
            </p>
          </td>
        </tr>
        <tr className="h-4" />
        <tr>
          <td />
          <td className="pl-4">
            <a
              href="https://www.pagerduty.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              PagerDuty, San Francisco, CA
            </a>
            <ul className="list-[circle] pl-4">
              <li>Software Engineering Intern | 05.2019 - 08.2019</li>
            </ul>
            <p>
              The first half of my internship was mainly focused on analyzing
              and transforming datasets using Python in Jupyter Notebook. The
              second half (my favorite part 🤪) had me focused on frontend
              development as the team was building new global search
              functionality. That is when my love for frontend really started to
              grow ❤️
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

const Content = () => (
  <div className="flex flex-col justify-center items-center gap-8">
    <h1>about me 👨🏾‍💻</h1>
    <Education />
    <Experience />
  </div>
);

export default function About() {
  return (
    <div className="w-full m-auto">
      <Head>
        <title>Guled Bashe</title>
        <meta name="description" content="Personal Site" />
        <link rel="icon" href="/guled-logo.png" />
      </Head>

      <div className="grid grid-rows-page gap-12">
        <Navbar />
        <Content />
        <Footer />
      </div>
    </div>
  );
}
