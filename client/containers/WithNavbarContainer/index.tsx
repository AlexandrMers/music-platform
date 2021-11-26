import { FC } from "react";
import WithNavbar from "../../layouts/WithNavbar";
import { NavbarItemInterface } from "../../components/Navbar";

const ITEMS_NAVIGATION: NavbarItemInterface[] = [
  {
    name: "Главная",
    href: "/",
  },
  {
    name: "Треки",
    href: "/tracks",
  },
  {
    name: "Альбомы",
    href: "/albums",
  },
];
const HEADER_TITLE = "Music Platform";

const WithNavbarContainer: FC = ({ children }) => {
  return (
    <WithNavbar items={ITEMS_NAVIGATION} title={HEADER_TITLE}>
      {children}
    </WithNavbar>
  );
};

export default WithNavbarContainer;
