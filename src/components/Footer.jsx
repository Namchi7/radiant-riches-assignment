import styles from "./css/footer.module.css";

import countryArrow from "../assets/svg/countryArrow.svg";

function Footer() {
  const handleCountryOption = (value) => {
    const countryOptions = document.querySelector("[data-country-options]");
    const countryOption = document.querySelector("[data-country-option]");

    countryOption.innerHTML = value;

    if (countryOptions.style.display === "flex") {
      countryOptions.style.display = "none";
    }
  };

  const handleCountryOptions = () => {
    const countryOptions = document.querySelector("[data-country-options]");

    if (countryOptions.style.display === "flex") {
      countryOptions.style.display = "none";
    } else if (countryOptions.style.display === "none") {
      countryOptions.style.display = "flex";
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <div className={styles.navRow}>
          <div className={styles.navHeading}>Categories</div>

          <nav className={styles.navLinks}>
            <div className={styles.navLink}>Web Builder</div>
            <div className={styles.navLink}>Hosting</div>
            <div className={styles.navLink}>Data Center</div>
            <div className={styles.navLink}>Robotic-Automation</div>
          </nav>
        </div>

        <div className={styles.navRow}>
          <div className={styles.navHeading}>Contact</div>

          <nav className={styles.navLinks}>
            <div className={styles.navLink}>Contact</div>
            <div className={styles.navLink}>Privacy Policy</div>
            <div className={styles.navLink}>Terms Of Service</div>
            <div className={styles.navLink}>Categories</div>
            <div className={styles.navLink}>About</div>
          </nav>
        </div>

        <div className={styles.selectCountryDiv}>
          <p
            className={styles.countryName}
            onClick={(e) => {
              e.preventDefault();
              handleCountryOptions();
            }}
            data-country-option
          >
            United States
          </p>
          <img
            src={countryArrow}
            alt="Show Countries"
            className={styles.countryArrow}
            onClick={(e) => {
              e.preventDefault();
              handleCountryOptions();
            }}
          />

          <div
            className={styles.countryOptions}
            style={{ display: "none" }}
            data-country-options
          >
            <div
              className={styles.countryName}
              onClick={(e) => {
                e.preventDefault();
                handleCountryOption("India");
              }}
            >
              India
            </div>
            <div
              className={styles.countryName}
              onClick={(e) => {
                e.preventDefault();
                handleCountryOption("Japan");
              }}
            >
              Japan
            </div>
            <div
              className={styles.countryName}
              onClick={(e) => {
                e.preventDefault();
                handleCountryOption("Canada");
              }}
            >
              Canada
            </div>
            <div
              className={styles.countryName}
              onClick={(e) => {
                e.preventDefault();
                handleCountryOption("United States");
              }}
            >
              United States
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
