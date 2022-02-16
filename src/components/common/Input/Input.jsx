import classNames from "classnames";
import styles from "./input.module.css";

function Input(props) {
  return (
    <input {...props} className={classNames(styles.input, props.className)} />
  );
}

export default Input;
