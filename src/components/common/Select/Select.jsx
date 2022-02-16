import classNames from "classnames";
import styles from "./select.module.css";

function Select({ children, className, multiple }) {
  return (
    <select
      multiple={multiple}
      className={classNames(styles.select, className)}
    >
      {children}
    </select>
  );
}

export default Select;
