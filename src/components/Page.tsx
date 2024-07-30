import { FunctionComponent } from "react";
import styles from "./Page.module.css";

export type Page4Type = {
  className?: string;
};

const Page4: FunctionComponent<Page4Type> = ({ className = "" }) => {
  return (
    <section
      className={[styles.page4, className].join(" ")}
      data-scroll-to="page4"
    >
      <div className={styles.newsInfo}>
        <img
          className={styles.checkCircleIcon}
          alt=""
          src="/check-circle-icon.svg"
        />
        <b className={styles.text}>Join the 10,000 users in our newsletter</b>
      </div>
      <img className={styles.inputIconLeft} alt="" src="/input-icon-left.svg" />
      <div className={styles.inputContainerWrapper}>
        <div className={styles.inputContainer}>
          <div className={styles.headingWrapper}>
            <h1 className={styles.heading}>
              Subscribe to our bi-weekly newsletter!
            </h1>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.inputPlaceholderWrapper}>
                <div className={styles.inputPlaceholder}>Enter your email</div>
              </div>
              <button className={styles.masterPrimaryButton}>
                <b className={styles.buttonText}>Suscribe</b>
                <img
                  className={styles.lineRoundedarrowRight}
                  alt=""
                  src="/line-roundedarrow-right.svg"
                />
              </button>
            </div>
            <div className={styles.divider} />
          </div>
        </div>
      </div>
      <footer className={styles.footerContentParent}>
        <div className={styles.footerContent}>
          <div className={styles.footerTop}>
            <h1 className={styles.lodgr}>Lodgr</h1>
            <div className={styles.footerTitles}>
              <div className={styles.frameGroup}>
                <b className={styles.footerTitle}>Product</b>
                <b className={styles.footerTitle1}>Company</b>
                <div className={styles.singleTitle}>
                  <b className={styles.footerTitle2}>Follow Us</b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footerLinks}>
          <div className={styles.linksContainer}>
            <div className={styles.linkParent}>
              <div className={styles.link}>
                <div className={styles.masterLink}>
                  <img
                    className={styles.lineRoundedpasswordIcon}
                    alt=""
                    src="/line-roundedpassword.svg"
                  />
                  <div className={styles.features}>Features</div>
                  <img
                    className={styles.lineRoundedpasswordIcon}
                    alt=""
                    src="/line-roundedchevron-down.svg"
                  />
                </div>
              </div>
              <div className={styles.link1}>
                <div className={styles.masterLink}>
                  <img
                    className={styles.lineRoundedpasswordIcon}
                    alt=""
                    src="/line-roundedpassword.svg"
                  />
                  <a className={styles.pricing}>Pricing</a>
                  <img
                    className={styles.lineRoundedpasswordIcon}
                    alt=""
                    src="/line-roundedchevron-down.svg"
                  />
                </div>
              </div>
              <div className={styles.link2}>
                <div className={styles.masterLink}>
                  <img
                    className={styles.lineRoundedpasswordIcon}
                    alt=""
                    src="/line-roundedpassword.svg"
                  />
                  <div className={styles.updates}>Updates</div>
                  <img
                    className={styles.lineRoundedpasswordIcon}
                    alt=""
                    src="/line-roundedchevron-down.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.linkGroup}>
              <div className={styles.link}>
                <div className={styles.masterLink}>
                  <img
                    className={styles.lineRoundedpasswordIcon}
                    alt=""
                    src="/line-roundedpassword.svg"
                  />
                  <a className={styles.about}>About</a>
                  <img
                    className={styles.lineRoundedpasswordIcon}
                    alt=""
                    src="/line-roundedchevron-down.svg"
                  />
                </div>
              </div>
              <div className={styles.link}>
                <div className={styles.masterLink}>
                  <img
                    className={styles.lineRoundedpasswordIcon}
                    alt=""
                    src="/line-roundedpassword.svg"
                  />
                  <a className={styles.contactUs}>Contact us</a>
                  <img
                    className={styles.lineRoundedpasswordIcon}
                    alt=""
                    src="/line-roundedchevron-down.svg"
                  />
                </div>
              </div>
              <div className={styles.link}>
                <div className={styles.masterLink}>
                  <img
                    className={styles.lineRoundedpasswordIcon}
                    alt=""
                    src="/line-roundedpassword.svg"
                  />
                  <a className={styles.careers}>Careers</a>
                  <img
                    className={styles.lineRoundedpasswordIcon}
                    alt=""
                    src="/line-roundedchevron-down.svg"
                  />
                </div>
              </div>
              <div className={styles.link}>
                <div className={styles.masterLink}>
                  <img
                    className={styles.lineRoundedpasswordIcon}
                    alt=""
                    src="/line-roundedpassword.svg"
                  />
                  <a className={styles.blog}>Blog</a>
                  <img
                    className={styles.lineRoundedpasswordIcon}
                    alt=""
                    src="/line-roundedchevron-down.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.socialLinks}>
              <div className={styles.socialContainer}>
                <div className={styles.link}>
                  <div className={styles.masterLink7}>
                    <a className={styles.linkedin}>Linkedin</a>
                  </div>
                </div>
                <div className={styles.link8}>
                  <div className={styles.masterLink7}>
                    <a className={styles.instagram}>Instagram</a>
                  </div>
                </div>
                <div className={styles.link}>
                  <div className={styles.masterLink7}>
                    <a className={styles.linkedin}>Youtube</a>
                  </div>
                </div>
                <div className={styles.link}>
                  <div className={styles.masterLink7}>
                    <a className={styles.twitter}>Twitter</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Page4;
