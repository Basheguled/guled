import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

export const Footer = () => (
  <footer>
    <a href="mailto:guledabashe@gmail.com">
      <MdEmail size={48} />
    </a>
    <a href="https://www.linkedin.com/in/basheguled/">
      <AiOutlineLinkedin size={48} />
    </a>
    <a href="https://www.github.com/Basheguled">
      <AiOutlineGithub size={48} />
    </a>
  </footer>
);
