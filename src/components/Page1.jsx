import PropTypes from "prop-types";
import styles from "./Page1.module.css";

const Page1 = ({ className = "" }) => {
  return (
    <section
      className={[styles.page3, className].join(" ")}
      data-scroll-to="page3"
    >
      <div className={styles.pricingWrapper}>
        <h1 className={styles.pricing}>Pricing</h1>
      </div>
      <div className={styles.simpleAndTransparentWrapper}>
        <div className={styles.simpleAndTransparent}>
          Simple and transparent.
        </div>
      </div>
      <h1 className={styles.freeForBeta}>Free for beta testers !!!</h1>
      <div className={styles.page3Inner}>
        <button className={styles.contactUsWrapper}>
          <div className={styles.contactUs}>Contact us</div>
        </button>
      </div>
    </section>
  );
};

Page1.propTypes = {
  className: PropTypes.string,
};

export default Page1;
