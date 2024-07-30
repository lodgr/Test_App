import { FunctionComponent } from "react";
import ContactInfo1 from "../components/ContactInfo1";
import Page4 from "../components/Page";
import styles from "./ContactConfirm.module.css";

const ContactConfirm: FunctionComponent = () => {
  return (
    <div className={styles.contactConfirm}>
      <ContactInfo1 />
      <Page4 />
    </div>
  );
};

export default ContactConfirm;
