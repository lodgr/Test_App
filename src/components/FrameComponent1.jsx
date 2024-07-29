import { useCallback } from "react";
import PropTypes from "prop-types";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = ({ className = "" }) => {
  const onHeadingPricingTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='page3']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onHeadingResourcesTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='page4']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <header
      className={[styles.outputOnlinepngtools1Parent, className].join(" ")}
    >
      <img
        className={styles.outputOnlinepngtools1Icon}
        loading="lazy"
        alt=""
        src="/outputonlinepngtools-1@2x.png"
      />
      <div className={styles.frameWrapper}>
        <div className={styles.headingsParent}>
          <nav className={styles.headings}>
            <a className={styles.headingProduct}>Product</a>
            <a className={styles.headingFeatures}
              onClick={onHeadingTextClick}
            >
              Features
            </a>
            <a
              className={styles.headingPricing}
              onClick={onHeadingPricingTextClick}
            >
              Pricing
            </a>
            <a
              className={styles.headingResources}
              onClick={onHeadingResourcesTextClick}
            >
              Resources
            </a>
          </nav>
          <div className={styles.emailParent}>
            <img
              className={styles.emailIcon}
              loading="lazy"
              alt=""
              src="/email.svg"
            />
            <a
              className={styles.headingResources1}
              onClick={onHeadingResourcesTextClick}
            >
              Sign In
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
