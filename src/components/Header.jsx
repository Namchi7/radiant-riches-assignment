import styles from "./css/header.module.css";

import searchIcon from "../assets/svg/searchIcon.svg";
import menu from "../assets/images/menu.png";

function Header() {
  const handleNavClick = () => {
    const mobileNav = document.querySelector("[data-mobile-nav]");
    if (mobileNav.style.display === "flex") {
      mobileNav.style.display = "none";
    }
  };

  const handleMobileNav = () => {
    const mobileNav = document.querySelector("[data-mobile-nav]");

    if (mobileNav.style.display === "flex") {
      mobileNav.style.display = "none";
    } else if (mobileNav.style.display === "none") {
      mobileNav.style.display = "flex";
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <div className={styles.searchDiv}>
          <img src={searchIcon} alt="Search" className={styles.searchIcon} />
          <input type="text" className={styles.searchInput} />
        </div>
        <nav className={styles.nav}>
          <p className={styles.navItem}>Categories</p>
          <p className={styles.navItem}>Website Builders</p>
          <p className={styles.navItem}>{`Today's Deals`}</p>
        </nav>

        <div
          className={styles.menuIconDiv}
          onClick={(e) => {
            e.preventDefault();
            handleMobileNav();
          }}
        >
          <img src={menu} alt="Menu" className={styles.menuIcon} />
        </div>

        <nav
          style={{ display: "none" }}
          className={styles.mobileNav}
          data-mobile-nav
        >
          <p
            className={styles.navItem}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick();
            }}
          >
            Categories
          </p>
          <p
            className={styles.navItem}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick();
            }}
          >
            Website Builders
          </p>
          <p
            className={styles.navItem}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick();
            }}
          >{`Today's Deals`}</p>
        </nav>
      </div>
    </div>
  );
}

export default Header;
