import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import MainNavbarStyles from "./MainNavbar.styles";

const MainNavbar = () => {
  const styles = MainNavbarStyles;
  return (
    <>
      <div style={styles.navbar}>
        <div>
          <a href="#" style={styles.navItem}>
            about
          </a>
          <a href="#" style={styles.navItem}>
            News
          </a>
          <a href="#" style={styles.navItem}>
            Services
          </a>
          <a href="#" style={styles.navItem}>
            Our team
          </a>
          <a href="#" style={styles.navItem}>
            Make enquiry
          </a>
        </div>
        <div>
          <button style={styles.navBtn}>
            contact us
            <span style={{ marginLeft: "8px" }}>
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default MainNavbar;
