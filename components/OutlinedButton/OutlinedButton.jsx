import styles from "./OutlinedButton.module.scss";
import cn from "classnames";
export default function OutlinedButton({ children, ...props }) {
  return (
    <a {...props} className={cn([styles["outlined-button"], props.className])}>
      {children}
    </a>
  );
}
