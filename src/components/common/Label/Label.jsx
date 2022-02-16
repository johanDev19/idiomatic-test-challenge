import classNames from "classnames";
import styles from "./label.module.css";

function Label({ children, className }) {
  return (
    <label className={classNames(styles.label, className)}>{children}</label>
  );
}

export default Label;
