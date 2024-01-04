import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

export const Footer = () => (
  <footer className="text-[var(--primary)] bg-[var(--secondary)] fixed bottom-0 w-full lg:px-20 px-8 pb-4 flex flex-col items-center gap-4">
    <hr className="w-full" />
    <div className="flex flex-row justify-center items-center gap-9">
      <a href="mailto:guledabashe@gmail.com">
        <MdEmail size={48} />
      </a>
      <a
        href="https://www.linkedin.com/in/basheguled/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiOutlineLinkedin size={48} />
      </a>
      <a
        href="https://www.github.com/Basheguled"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiOutlineGithub size={48} />
      </a>
    </div>
  </footer>
);
