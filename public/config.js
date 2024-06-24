import { AiOutlineDownload } from "react-icons/ai";
import avi from "./avi.svg";
import confluentLogo from "./confluent.png";
import pagerdutyLogo from "./pagerduty.png";

const CONFIG = {
  home: {
    title: "Hi, I'm Guled Bashe 👋🏾",
    description:
      "I am a Frontend Software Engineer with 4+ years of professional experience building scalable UI features in React and Typescript. My passion is crafting high-quality user experiences.",
    image: avi,
    link: {
      text: "Read more about me here!",
      href: "/about",
    },
  },
  projects: {
    title: "Projects 🚀",
    content: [
      {
        title: "Great Reads",
        link: "https://books-azure-one.vercel.app",
        description: `This is a fun app I put together using Next.js and the
        Google Books API, hosted on Vercel. It's primary application is finding
         books for purchase on Google Books with a fun new UX ✨`,
        github: "https://github.com/Basheguled/books",
        skills: ["TypeScript", "Next.js", "TailwindCSS", "Vercel"],
      },
    ],
  },
  about: {
    title: "About me",
    education: {
      title: "Education 🎓",
      major: "Computer Engineering B.S.,",
      school: "University of Minnesota — Twin Cities",
      graduation: "December 2020",
    },
    experience: {
      title: "Experience 💼",
      content: [
        {
          title: "Confluent",
          logo: confluentLogo,
          location: "Remote",
          date: "May 2020 — Present",
          description: `Working at Confluent as a Frontend SWE, I got to solve a wide array of problems using
            React and Typescript. I created new features in our onboarding flow to improve our 
            attach rate for new users. I enhanced critical areas like our app's authentication flow to 
            increase user session times and introduced new payment flows to increase our billing
            conversion rate. I also lead the creation of our app's home page, which allowed for dynamic
            content to be displayed to users based on their persona.`,
          link: "https://www.confluent.io/",
          roles: [
            "Software Engineering Intern",
            "Software Engineer",
            "Senior Software Engineer",
          ],
        },
        {
          title: "PagerDuty",
          logo: pagerdutyLogo,
          location: "San Francisco, CA",
          date: "May 2019 — August 2019",
          description:
            "Implemented global search functionality for internal services using React, Redux and Typescript.",
          link: "https://www.pagerduty.com/",
          roles: ["Software Engineering Intern"],
        },
      ],
    },
    skills: {
      title: "Skills 💡",
      content: [
        "TypeScript",
        "HTML",
        "CSS",
        "Python",
        "Java",
        "C/C++",
        "React.js",
        "Next.js",
        "Node.js",
        "Git / GitHub",
        "Amazon Web Services",
        "REST API",
        "Jest",
        "StoryBook",
        "Segment",
      ],
    },
    resume: {
      title: "Resume 📄",
      text: "Download",
      icon: <AiOutlineDownload size={24} />,
      href: "./guled_bashe_resume.pdf",
    },
  },
};

export default CONFIG;
