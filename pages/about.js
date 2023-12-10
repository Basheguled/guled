import Head from "next/head";
import { PiDownloadSimple } from "react-icons/pi";
import { content, main } from "../styles/About.module.css";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const Education = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      alignItems: "start",
      justifyContent: "space-between",
      width: "70%",
    }}
  >
    <div style={{ maxWidth: "450px" }}>
      <h2>what i studied&#58;</h2>
      <p>
        Computer Engineering at the University of Minnesota &mdash; Twin Cities,
        College of Science &amp; Engineering
      </p>
    </div>
    <a href="/guled_bashe_resume.pdf" download>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",

          marginTop: "30px",
          padding: "0px 16px",
          border: "2px solid #191414",
        }}
      >
        <p style={{ paddingRight: "8px" }}>Download Resume</p>
        <PiDownloadSimple size={24} />
      </div>
    </a>
  </div>
);

const Experience = () => (
  <div style={{ maxWidth: "70%" }}>
    <h1>where i&apos;ve worked&#58;</h1>
    <table>
      <tr style={{ paddingBottom: "16px" }}>
        <td />
        <td style={{ paddingLeft: "16px" }}>
          <a
            href="https://www.confluent.io/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Confluent, Remote
          </a>
          <p>Senior Software Engineer Feb. 2022 - Present</p>
          <p>Software Engineer | Feb 2021 - Feb. 2022</p>
          <p>Software Engineering Intern | May 2020 - Dec. 2020</p>
          <p>
            Working at Confluent, I got to solve a wide array of problems. I
            created new features in our onboarding flow to improve our attach
            rate for new users. I also had the chance to independently improve
            on critical areas like our app&apos;s authentication and payment
            flows. Later on, my team specifically focused on increasing customer
            conversion and user retention by shipping UI features and then
            tracking user behaviors to decide what to ship next!
          </p>
        </td>
      </tr>
      <tr>
        <td />
        <td style={{ paddingLeft: "16px" }}>
          <a
            href="https://www.pagerduty.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            PagerDuty, San Francisco, CA
          </a>
          <p>Software Engineering Intern, May 2019 - Aug. 2019</p>
          <p>
            The first half of my internship was mainly focused on analyzing and
            transforming datasets using Python in Jupyter Notebook. The second
            half (my favorite part 🤪) had me focused on frontend development as
            the team was building new global search functionality. That is when
            my love for frontend really started to grow ❤️
          </p>
        </td>
      </tr>
    </table>
  </div>
);

const Content = () => (
  <div
    style={{
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <h1>about me 👨🏾‍💻</h1>
    <Education />
    <Experience />
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
        <Footer />
      </div>
    </div>
  );
}
