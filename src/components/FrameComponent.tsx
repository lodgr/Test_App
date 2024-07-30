import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent.module.css";

export type FrameComponent2Type = {
  className?: string;
  outputOnlinepngtools1?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
  outputOnlinepngtools1,
}) => {
  const navigate = useNavigate();

  const onHeadingLogoTextClick = useCallback(() => {
    navigate("/website");
  }, [navigate]);

  const onHeadingFeaturesTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='page2']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

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
      <div onClick={onHeadingLogoTextClick}>
      <img
        className={styles.outputOnlinepngtools1Icon}
        loading="lazy"
        alt=""
        src={outputOnlinepngtools1}
        
      />
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.headingsParent}>
          <nav className={styles.headings}>
            <a
              className={styles.headingFeatures}
              onClick={onHeadingFeaturesTextClick}
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
            <a className={styles.headingResources1}>Sign In</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent2;
