import classNames from "classnames";

import styles from "./button.module.css";

function Button({ children, className, color }) {
  return (
    <button
      className={classNames(styles.button, className, "shadow-md")}
      style={{ backgroundColor: color }}
    >
      {children}
    </button>
  );
}

export default Button;
