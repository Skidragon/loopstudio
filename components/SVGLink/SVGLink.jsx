import Link from "next/link";
import React from "react";
import styles from "./SVGLink.module.scss";
export const SVGLink = ({ href = "", svgElement, ...props }) => {
  return (
    <Link href={href}>
      <a className={styles["svg-link"]}>{React.cloneElement(svgElement)}</a>
    </Link>
  );
};
