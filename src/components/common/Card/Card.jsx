import classNames from "classnames";

import styles from "./card.module.css";

function Card({ children, className }) {
  return (
    <div className={classNames(styles.cardContainer, className)}>
      {children}
    </div>
  );
}

export default Card;
