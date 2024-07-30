import { FunctionComponent } from "react";
import Page3 from "../components/Page3";
import Page2 from "../components/Page2";
import Page11 from "../components/Page1";
import Page4 from "../components/Page4";
import styles from "./Website.module.css";

const Website: FunctionComponent = () => {
  return (
    <div className={styles.website}>
      <Page3 />
      <Page2 />
      <Page11 />
      <Page4 />
    </div>
  );
};

export default Website;
