import { FunctionComponent, useCallback } from "react";
import FrameComponent2 from "./FrameComponent";
import { useNavigate } from "react-router-dom";
import styles from "./Page3.module.css";

export type Page3Type = {
  className?: string;
};

const Page3: FunctionComponent<Page3Type> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/contact-confirm");
  }, [navigate]);

  return (
    <section className={[styles.page1, className].join(" ")}>
      <FrameComponent2 outputOnlinepngtools1="/outputonlinepngtools-1@2x.png" />
      <div className={styles.page1Inner}>
        <div className={styles.descriptionContainerParent}>
          <div className={styles.descriptionContainer}>
            <div className={styles.automateEverythingOnYourHoParent}>
              <h1 className={styles.automateEverythingOnContainer}>
                <p className={styles.automateEverythingOn}>
                  Automate everything on your
                </p>
                <p
                  className={styles.automateEverythingOn}
                >{`hotel or rental property `}</p>
              </h1>
              <div className={styles.customerCareDescriptionCont}>
                <b className={styles.deliverExceptionalCustomer}>
                  Deliver exceptional customer care and streamline operations
                  with our intelligent AI platform.
                </b>
              </div>
            </div>
          </div>
          <div className={styles.formContainerWrapper}>
            <div className={styles.formContainer}>
              <div className={styles.emailFieldContainerParent}>
                <div className={styles.emailFieldContainer}>
                  <div className={styles.enterYourEmail}>
                    enter your email adress...
                  </div>
                </div>
                <button
                  className={styles.getInTouchWrapper}
                  onClick={onFrameButtonClick}
                >
                  <div className={styles.getInTouch}>Get in touch</div>
                </button>
              </div>
              <div className={styles.comingSoonContainer}>
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
    </section>
  );
};

export default Page3;
