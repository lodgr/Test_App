import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import Page2 from "../components/Page2";
import Page1 from "../components/Page1";
import Page from "../components/Page";
import styles from "./Website.module.css";

const Website = () => {
  return (
    <div className={styles.website}>
      <section className={styles.page1}>
        <FrameComponent1 />
        <FrameComponent />
      </section>
      <Page2 />
      <Page1 />
      <Page />
    </div>
  );
};

export default Website;
