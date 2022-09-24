import { footer } from '../styles/Home.module.css';
import { AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai';

export const Footer = () => (
  <footer className={footer}>
    <a href="https://www.linkedin.com/in/basheguled/">
      <AiOutlineLinkedin size={32} />
    </a>
    <div style={{ width: '16px' }} />
    <a href="https://www.github.com/Basheguled">
      <AiOutlineGithub size={32} />
    </a>
  </footer>
);