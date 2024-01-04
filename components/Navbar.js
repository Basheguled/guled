import Link from "next/link";
import { useRouter } from "next/router";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";

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

const NavItem = ({ href, name, theme }) => {
  const { pathname } = useRouter();
  const isActive = pathname === href;
  return (
    <li
      style={
        isActive
          ? {
              borderBottom: `2px solid ${
                theme === "dark" ? "#f9fafb" : "black"
              }`,
            }
          : { paddingBottom: "2px" }
      }
    >
      <Link href={href}>{name}</Link>
    </li>
  );
};

const ToggleButton = ({ theme }) => {
  if (theme === "dark") {
    return <HiOutlineMoon size={24} />;
  }

  return <HiOutlineSun size={24} />;
};

export const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav className="text-[var(--primary)] bg-[var(--tertiary)] w-full h-12 px-20 border border-solid border-black border-opacity-10 text-lg font-siz">
      <div className=" w-full h-full m-auto flex flex-row justify-between items-center">
        <ul className="list-none flex justify-center items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <NavItem theme={theme} key={item.name} {...item} />
          ))}
          <li key="theme">
            <button onClick={toggleTheme}>
              <ToggleButton theme={theme} />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
