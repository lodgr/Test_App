import PropTypes from "prop-types";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <div className={[styles.page1Inner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.automateEverythingOnYourHoParent}>
            <h1 className={styles.automateEverythingOnContainer}>
              <p className={styles.automateEverythingOn}>
                <p>Automate guest communication
                  on your hotel or rental property</p>
              </p>
            </h1>
            <div className={styles.deliverExceptionalCustomerCWrapper}>
              <b className={styles.deliverExceptionalCustomer}>
                Deliver exceptional customer care and streamline operations with
                our intelligent AI platform.
              </b>
            </div>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.frameGroup}>
            <div className={styles.frameDiv}>
              <div className={styles.enterYourEmailAdressWrapper}>
                <div className={styles.enterYourEmail}>
                  enter your email adress...
                </div>
              </div>
              <button className={styles.getInTouchWrapper}>
                <div className={styles.getInTouch}>Get in touch</div>
              </button>
            </div>
            <div className={styles.comingSoonWrapper}>
              <div className={styles.comingSoon}>*coming soon</div>
            </div>
          </div>
        </div>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src="/frame-1171276001@2x.png"
        />
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
