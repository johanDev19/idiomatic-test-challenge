import classNames from "classnames";
import styles from "./select.module.css";

function Select({ className, multiple, options }) {
  return (
    <select
      multiple={multiple}
      className={classNames(styles.select, className)}
    >
      {options.map((option) => (
        <option key={option.id} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
