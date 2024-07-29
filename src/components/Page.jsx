import PropTypes from "prop-types";
import styles from "./Page.module.css";

const Page = ({ className = "" }) => {
  return (
    <footer className={[styles.page4, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.headingWrapper}>
          <h1 className={styles.heading}>
            Subscribe to our bi-weekly newsletter!
          </h1>
        </div>
        <div className={styles.inputButtonContainerParent}>
          <div className={styles.inputButtonContainer}>
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
      <div className={styles.frameGroup}>
        <div className={styles.lodgrWrapper}>
          <h1 className={styles.lodgr}>Lodgr</h1>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.inputButtonContainer}>
            <div className={styles.footerTitleParent}>
              <b className={styles.footerTitle}>Product</b>
              <div className={styles.featuresParent}>
                <div className={styles.features}>Features</div>
                <a className={styles.pricing}>Pricing</a>
                <div className={styles.caseStudies}>Case studies</div>
                <div className={styles.reviews}>Reviews</div>
                <div className={styles.updates}>Updates</div>
              </div>
            </div>
            <div className={styles.footerTitleParent}>
              <b className={styles.footerTitle1}>Company</b>
              <div className={styles.featuresParent}>
                <a className={styles.about}>About</a>
                <div className={styles.contactUs}>Contact us</div>
                <a className={styles.careers}>Careers</a>
                <div className={styles.culture}>Culture</div>
                <div className={styles.blog}>Blog</div>
              </div>
            </div>
            <div className={styles.footerTitleParent}>
              <b className={styles.footerTitle2}>Support</b>
              <div className={styles.featuresParent}>
                <div className={styles.gettingStarted}>Getting started</div>
                <div className={styles.helpCenter}>Help center</div>
                <div className={styles.serverStatus}>Server status</div>
                <div className={styles.caseStudies}>Report a bug</div>
                <div className={styles.chatSupport}>Chat support</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.socialContainerWrapper}>
          <div className={styles.socialContainer}>
            <b className={styles.footerTitle3}>Follow us</b>
            <div className={styles.frameDiv}>
              <div className={styles.frameParent1}>
                <div className={styles.socialMediaIconSquarefacebParent}>
                  <div className={styles.socialMediaIconSquarefaceb}>
                    <img
                      className={styles.facebookIcon}
                      loading="lazy"
                      alt=""
                      src="/facebook.svg"
                    />
                  </div>
                  <div className={styles.facebookWrapper}>
                    <a className={styles.facebook}>Facebook</a>
                  </div>
                </div>
                <div className={styles.socialMediaIconSquaretwittParent}>
                  <div className={styles.socialMediaIconSquarefaceb}>
                    <img
                      className={styles.twitterIcon}
                      loading="lazy"
                      alt=""
                      src="/twitter.svg"
                    />
                  </div>
                  <div className={styles.facebookWrapper}>
                    <a className={styles.twitter}>Twitter</a>
                  </div>
                </div>
              </div>
              <div className={styles.frameParent2}>
                <div className={styles.socialMediaIconSquareinstaParent}>
                  <img
                    className={styles.socialMediaIconSquareinsta}
                    loading="lazy"
                    alt=""
                    src="/social-media-icon-squareinstagram@2x.png"
                  />
                  <div className={styles.linkedinWrapper}>
                    <img
                      className={styles.linkedinIcon}
                      loading="lazy"
                      alt=""
                      src="/linkedin.svg"
                    />
                  </div>
                  <div className={styles.linkedinWrapper}>
                    <img
                      className={styles.youtubeIcon}
                      loading="lazy"
                      alt=""
                      src="/youtube.svg"
                    />
                  </div>
                </div>
                <div className={styles.socialContainer1}>
                  <div className={styles.socialLinks}>
                    <a className={styles.instagram}>Instagram</a>
                    <a className={styles.linkedin}>LinkedIn</a>
                    <a className={styles.youtube}>YouTube</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Page.propTypes = {
  className: PropTypes.string,
};

export default Page;
