import Image from 'next/image';
import logo from '../public/guled-logo.png'
import { wrapper, container } from '../styles/Navbar.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NAV_ITEMS = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About',
    href: '/about',
  },
];

const NavItem = ({ href, name }) => {
  const { pathname } = useRouter();
  const isActive = pathname === href;
  return (
    <li style={isActive ? { borderBottom: '2px solid black' } : {}}>
      <Link href={href}>{name}</Link>
    </li>
  );
};

const Logo = () => <Image src={logo} alt="logo" height={48} width={48} />;

export const Navbar = () => (
  <nav className={wrapper}>
    <div className={container}>
      <ul style={{
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '48px',
      }}>
        {NAV_ITEMS.map((item) => (
          <NavItem key={item.name} {...item} />
        ))}
      </ul>
      <Logo />
    </div>
  </nav>
);
