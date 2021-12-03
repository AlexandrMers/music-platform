import { FC } from "react";
import { Container } from "@material-ui/core";

import HandlePlayerContainer from "containers/HandlePlayerContainer";

import Navbar, { NavbarItemInterface } from "components/Navbar";

import styles from "./styles.module.scss";

const WithNavbarContainer: FC<{
  items: NavbarItemInterface[];
  title: string;
}> = ({ children, items, title }) => {
  return (
    <>
      <Navbar items={items} headerTitle={title} />
      <Container className={styles.Container}>{children}</Container>
      <HandlePlayerContainer />
    </>
  );
};

export default WithNavbarContainer;
