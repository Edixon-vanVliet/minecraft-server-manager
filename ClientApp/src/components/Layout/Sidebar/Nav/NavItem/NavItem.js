import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import styles from "./NavItem.scss";

const NavItem = ({ children, icon, to }) => {
  const { pathname } = useLocation();

  return (
    <li className={`${styles.navItem} ${pathname === to ? "active" : ""}`}>
      {icon && <FontAwesomeIcon className={styles.navIcon} icon={icon} />}
      <Link className={styles.navLink} to={to}>
        {children}
      </Link>
    </li>
  );
};

NavItem.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  to: PropTypes.string.isRequired,
  icon: PropTypes.shape({
    icon: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.array, PropTypes.string])),
    iconName: PropTypes.string,
    prefix: PropTypes.string,
  }),
};

NavItem.defaultProps = {
  icon: undefined,
};

export default NavItem;
