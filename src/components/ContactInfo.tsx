import { FunctionComponent, useCallback } from "react";
import "antd/dist/antd.min.css";
import { Dropdown, Menu, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import FrameComponent2 from "./FrameComponent";
import { useNavigate } from "react-router-dom";
import styles from "./ContactInfo.module.css";

export type ContactInfoType = {
  className?: string;
};

const ContactInfo: FunctionComponent<ContactInfoType> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/contact-confirm");
  }, [navigate]);

  return (
    <section className={[styles.contactInfo, className].join(" ")}>
      <FrameComponent2 outputOnlinepngtools1="/outputonlinepngtools-1@2x.png" />
      <div className={styles.contactUsWrapper}>
        <div className={styles.contactUs}>
          <div className={styles.formContainer}>
            <div className={styles.fieldsContainer}>
              <div className={styles.getInTouchWrapper}>
                <h1 className={styles.getInTouchContainer}>
                  <span>{`Get in `}</span>
                  <span className={styles.touch}>Touch</span>
                </h1>
              </div>
              <form className={styles.formFields}>
                <div className={styles.textField}>
                  <input
                    className={styles.name}
                    placeholder="Name *"
                    type="text"
                  />
                  <img
                    className={styles.textFieldChild}
                    alt=""
                    src="/vector-2.svg"
                  />
                </div>
                <div className={styles.textField}>
                  <input
                    className={styles.email}
                    placeholder="Email"
                    type="text"
                  />
                  <img
                    className={styles.textFieldChild}
                    alt=""
                    src="/vector-2.svg"
                  />
                </div>
                <div className={styles.textField}>
                  <input
                    className={styles.phoneNumber}
                    placeholder="Phone number *"
                    type="text"
                  />
                  <img
                    className={styles.textFieldChild}
                    alt=""
                    src="/vector-2.svg"
                  />
                </div>
                <Dropdown
                  className={styles.dropdown}
                  overlay={
                    <Menu>
                      {(
                        [
                          { value: "Bayou Showcase" },
                          { value: "Google Search" },
                          { value: "Linkedin" },
                          { value: "Twitter" },
                          { value: "Referral" },
                        ] as any
                      ).map((option: any, index: number) => (
                        <Menu.Item key={index}>
                          <a onClick={(e) => e.preventDefault()}>
                            {option.value || ""}
                          </a>
                        </Menu.Item>
                      ))}
                    </Menu>
                  }
                  arrow={undefined}
                  trigger={["hover"]}
                >
                  <Button onClick={(e) => e.preventDefault()}>
                    {` `}
                    <DownOutlined />
                  </Button>
                </Dropdown>
                <button className={styles.button} onClick={onButtonClick}>
                  <b className={styles.send}>send</b>
                </button>
              </form>
            </div>
            <div className={styles.contactDetails}>
              <div className={styles.detailItemsParent}>
                <img
                  className={styles.detailItemsIcon}
                  loading="lazy"
                  alt=""
                  src="/frame-831.svg"
                />
                <div className={styles.phone035432Container}>
                  <p className={styles.phone}>PHONE</p>
                  <p className={styles.p}>03 5432 1234</p>
                </div>
              </div>
              <div className={styles.detailItemsParent}>
                <img
                  className={styles.detailItemsIcon}
                  loading="lazy"
                  alt=""
                  src="/frame-835.svg"
                />
                <div className={styles.phone035432Container}>
                  <p className={styles.phone}>FAX</p>
                  <p className={styles.p}>03 5432 1234</p>
                </div>
              </div>
              <div className={styles.frameGroup}>
                <img
                  className={styles.detailItemsIcon}
                  loading="lazy"
                  alt=""
                  src="/frame-833.svg"
                />
                <div className={styles.emailInfomarcccomau}>
                  <p className={styles.phone}>EMAIL</p>
                  <p className={styles.p}>info@marcc.com.au</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
