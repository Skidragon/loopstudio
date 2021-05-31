import NextLink from "next/link";
import styles from "./Link.module.scss";
import cn from "classnames";

export default function Link({ children, ...props }) {
  return (
    <NextLink {...props} className={cn([styles.link, props.className])}>
      <a>{children}</a>
    </NextLink>
  );
}
