import Link from "next/link";
import { useRouter } from "next/router";

const NAV_ITEMS = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
];

const NavItem = ({ href, name }) => {
  const { pathname } = useRouter();
  const isActive = pathname === href;
  return (
    <li
      style={
        isActive
          ? { borderBottom: "2px solid black" }
          : { paddingBottom: "2px" }
      }
    >
      <Link href={href}>{name}</Link>
    </li>
  );
};

export const Navbar = () => (
  <nav className="w-full h-12 px-20 border border-solid border-black border-opacity-10 bg-white text-xs">
    <div className=" w-full h-full m-auto flex flex-row justify-between items-center">
      <ul className="list-none flex justify-center items-center gap-8">
        {NAV_ITEMS.map((item) => (
          <NavItem key={item.name} {...item} />
        ))}
      </ul>
    </div>
  </nav>
);
