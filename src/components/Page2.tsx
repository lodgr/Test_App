import { FunctionComponent } from "react";
import styles from "./Page2.module.css";

export type Page2Type = {
  className?: string;
};

const Page2: FunctionComponent<Page2Type> = ({ className = "" }) => {
  return (
    <section className={[styles.page2, className].join(" ")}
    data-scroll-to="page2">
      <div className={styles.softwareDescriptionContainerWrapper}>
        <div className={styles.softwareDescriptionContainer}>
          <div className={styles.aSoftwareToolToAutomateYoWrapper}>
            <h1
              className={styles.aSoftwareTool}
            >{`A software tool to automate your lodging tasks `}</h1>
          </div>
          <div className={styles.ourCuttingEdgeAiContainer}>
            <p
              className={styles.ourCuttingEdgeAi}
            >{`Our cutting-edge AI solution connects with all your rental platforms `}</p>
            <p className={styles.allowingYouSit}>
              allowing you sit back and enjoy efficient turnovers and better
              reviews
            </p>
          </div>
        </div>
      </div>
      <div className={styles.featuresGrid}>
        <div className={styles.bookingFeatures}>
          <div className={styles.bookingFeatureItems}>
            <div className={styles.conversionFeatureItems}>
              <div className={styles.bookingConversionItem}>
                <h1 className={styles.answerGuestsUsingContainer}>
                  <span>
                    <p className={styles.ourCuttingEdgeAi}>
                      Answer guests using
                    </p>
                    <p className={styles.allowingYouSit}>conversational AI</p>
                  </span>
                </h1>
              </div>
              <div className={styles.beItPhone}>
                Be it phone calls or chats, never miss out on a booking. Provide
                answers and make bookings 24/7 using our advanced Voice and Chat
                AI.
              </div>
            </div>
          </div>
          <img
            className={styles.service1Icon}
            loading="lazy"
            alt=""
            src="/24-7-service-1@2x.png"
          />
        </div>
      </div>
      <div className={styles.featuresGrid1}>
        <img
          className={styles.reviewTasks1}
          loading="lazy"
          alt=""
          src="/review-tasks-1@2x.png"
        />
        <div className={styles.reviewFeatures}>
          <div className={styles.reviewFeatureItems}>
            <h1 className={styles.turnGuestReviews}>
              Turn guest reviews into tasks
            </h1>
            <div className={styles.reviewInsightsFeatureItem}>
              <div className={styles.goThroughGuestContainer}>
                <p className={styles.ourCuttingEdgeAi}>
                  Go through guest reviews immediately after a checkout
                </p>
                <p className={styles.ourCuttingEdgeAi}>
                  and convert any feedback into actionable tasks for the
                </p>
                <p className={styles.allowingYouSit}>
                  maintenance staff to handle issues timely.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.featuresGrid2}>
        <div className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.convertAvailabilityToBookinParent}>
              <h1 className={styles.convertAvailabilityTo}>
                  <span>
                    <p className={styles.convertAvailability}>
                      Convert Availability into
                    </p>
                    <p className={styles.tobooking}>booking</p>
                  </span>
                </h1>
              <div className={styles.trackOpenNightsContainer}>
                <span className={styles.trackOpenNightsContainer1}>
                  <p
                    className={styles.ourCuttingEdgeAi}
                  >{`Track open nights and suggest guest extensions, `}</p>
                  <p className={styles.allowingYouSit}>
                    early check-ins and late checkouts
                  </p>
                </span>
              </div>
            </div>
          </div>
          <img
            className={styles.booking1Icon}
            loading="lazy"
            alt=""
            src="/booking-1@2x.png"
          />
        </div>
      </div>
      <div className={styles.localExperienceContainerWrapper}>
        <div className={styles.localExperienceContainer}>
          <img
            className={styles.local1Icon}
            loading="lazy"
            alt=""
            src="/local-1@2x.png"
          />
          <div className={styles.experienceDescriptionContain}>
            <div className={styles.enhanceGuestExperiencesParent}>
              <h1 className={styles.enhanceGuestExperiences}>
                Enhance Guest Experiences
              </h1>
              <div className={styles.suggestLocalRestaurantsContainer}>
                <p
                  className={styles.ourCuttingEdgeAi}
                >{`Suggest local restaurants, shops and other `}</p>
                <p
                  className={styles.allowingYouSit}
                >{`fun activities based on their preferences using AI. `}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page2;
