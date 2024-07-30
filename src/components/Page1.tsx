import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Page1.module.css";

export type Page11Type = {
  className?: string;
};

const Page11: FunctionComponent<Page11Type> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <section
      className={[styles.page3, className].join(" ")}
      data-scroll-to="page3"
    >
      <div className={styles.pricingHeadingContainer}>
        <h1 className={styles.pricing}>Pricing</h1>
      </div>
      <div className={styles.pricingDescriptionContainer}>
        <div className={styles.simpleAndTransparent}>
          Simple and transparent.
        </div>
      </div>
      <h1 className={styles.freeForBeta}>Free for beta testers !!!</h1>
      <div className={styles.contactContainer}>
        <button
          className={styles.contactUsWrapper}
          onClick={onFrameButtonClick}
        >
          <div className={styles.contactUs}>Contact us</div>
        </button>
      </div>
    </section>
  );
};

export default Page11;
