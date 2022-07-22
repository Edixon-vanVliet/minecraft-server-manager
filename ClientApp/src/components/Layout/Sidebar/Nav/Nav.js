import { faServer } from "@fortawesome/free-solid-svg-icons";
import { NavItem } from "./NavItem";

import styles from "./Nav.scss";

const Nav = () => (
  <ul className={styles.nav}>
    <NavItem icon={faServer} to="/">
      Servers
    </NavItem>
  </ul>
);

export default Nav;
