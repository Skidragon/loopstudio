import Link from "next/link";
import React from "react";

export const SVGLink = ({ href = "", svgElement, ...props }) => {
  return (
    <Link href={href}>
      <a>{React.cloneElement(svgElement)}</a>
    </Link>
  );
};
