import classNames from "classnames";

import styles from "./button.module.css";

function Button({ children, className, color, disabled, onClick }) {
  return (
    <button
      className={classNames(styles.button, className, "shadow-md")}
      style={{ backgroundColor: color }}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
