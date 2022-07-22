import Container from "react-bootstrap/Container";
import { Nav } from "./Nav";

import styles from "./Sidebar.scss";

const Sidebar = () => (
  <div className={styles.sidebar}>
    <Container className={styles.sidebarHeader}>
      <span className={styles.sidebarTitle}>Minecraft Servers Manager</span>
    </Container>
    <div className={styles.sidebarBody}>
      <Nav />
    </div>
    <Container className={styles.sidebarFooter}>&copy; Edixon van Vliet - 2022</Container>
  </div>
);

export default Sidebar;
