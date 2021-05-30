import styles from "./CloseIcon.module.scss";
import cn from "classnames";

export default function CloseIcon({ ...props }) {
  return (
    <svg
      width="20"
      height="20"
      xmlns="http://www.w3.org/2000/svg"
      viewBox={"0 0 21 21"}
      tabIndex="-1"
      alt
      {...props}
      className={cn({
        [styles["close-icon"]]: true,
        [props.className]: Boolean(props?.className),
      })}
    >
      <title>Close Navigation</title>
      <path d="M17.778.808l1.414 1.414L11.414 10l7.778 7.778-1.414 1.414L10 11.414l-7.778 7.778-1.414-1.414L8.586 10 .808 2.222 2.222.808 10 8.586 17.778.808z" />
    </svg>
  );
}
