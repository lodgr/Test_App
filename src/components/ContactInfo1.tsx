import { FunctionComponent } from "react";
import FrameComponent2 from "./FrameComponent";
import styles from "./ContactInfo1.module.css";

export type ContactInfo1Type = {
  className?: string;
};

const ContactInfo1: FunctionComponent<ContactInfo1Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.contactInfo, className].join(" ")}>
      <FrameComponent2 outputOnlinepngtools1="/outputonlinepngtools-1@2x.png" />
      <div className={styles.thankYouMessage}>
        <h1 className={styles.thankYouFor}>
          Thank you for your interest. We will be in touch soon.
        </h1>
      </div>
    </section>
  );
};

export default ContactInfo1;
