import styles from "./Hamburger.module.scss";
import cn from "classnames";

export default function Hamburger({ ...props }) {
  return (
    <svg
      width="24"
      height="16"
      viewBox={"0 0 25 17"}
      xmlns="http://www.w3.org/2000/svg"
      tabIndex="-1"
      {...props}
      className={cn({
        [styles.hamburger]: true,
        [props.className]: Boolean(props?.className),
      })}
    >
      <title>Open Navigation</title>
      <g>
        <path d="M0 0h24v2H0zM0 7h24v2H0zM0 14h24v2H0z" />
      </g>
    </svg>
  );
}
