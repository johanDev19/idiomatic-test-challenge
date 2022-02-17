import classNames from "classnames";
import styles from "./select.module.css";

function Select({ className, options, onChange, name }) {
  return (
    <select
      name={name}
      size={options.length > 2 ? options.length : 5}
      className={classNames(styles.select, className)}
      onChange={onChange}
    >
      {options.map((option) => (
        <option key={option.id} id={option.id} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
