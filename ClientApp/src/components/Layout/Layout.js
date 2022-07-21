import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import { Sidebar } from "./Sidebar";

import styles from "./Layout.scss";

const Layout = ({ children }) => (
  <div className={styles.layout}>
    <Sidebar />
    <Container className={styles.layoutBody}>{children}</Container>
  </div>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Layout;
