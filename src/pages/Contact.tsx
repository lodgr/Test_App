import { FunctionComponent } from "react";
import ContactInfo from "../components/ContactInfo";
import Page4 from "../components/Page4";
import styles from "./Contact.module.css";

const Contact: FunctionComponent = () => {
  return (
    <div className={styles.contact}>
      <ContactInfo />
      <Page4 />
    </div>
  );
};

export default Contact;
