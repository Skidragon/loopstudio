import NextLink from "next/link";
import styles from "./Link.module.scss";
import cn from "classnames";

export default function Link({ children, className = "", ...props }) {
  return (
    <NextLink {...props}>
      <a className={cn([styles.link, props.className])}>{children}</a>
    </NextLink>
  );
}
