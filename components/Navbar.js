import Image from 'next/image';
import logo from '../public/guled-logo.png'
import { wrapper, container } from '../styles/Navbar.module.css';

export const Navbar = () => (
  <div className={wrapper}>
    <div className={container}>
      <Image src={logo} alt="logo" height={50} width={50} />
      <div style={{ width: '12px' }} />
      <h2>Guled Bashe</h2>
    </div>
  </div>
);
