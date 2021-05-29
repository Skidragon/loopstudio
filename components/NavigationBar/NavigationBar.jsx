import CloseIcon from "components/CloseIcon/CloseIcon";
import Hamburger from "components/Hamburger/Hamburger";
import Logo from "components/Logo/Logo";
import React, { useState } from "react";
import styles from "./NavigationBar.module.scss";
// https://www.npmjs.com/package/react-intersection-observer
// https://css-tricks.com/accessible-svgs/
export default function NavigationBar({ children, ...props }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles["navigation-bar"]}>
      <div className={styles["initial-content"]}>
        <Logo />
        <nav className={styles.nav}>
          <ul className={styles.list}>
            {children.map((child) => {
              return (
                <li key={child.href} className={styles.item}>
                  {React.cloneElement(child, {
                    className: styles["item-link"],
                  })}
                </li>
              );
            })}
          </ul>
        </nav>
        {open ? (
          <CloseIcon
            className={styles["close-icon"]}
            onClick={() => {
              setOpen(false);
            }}
          />
        ) : (
          <Hamburger
            className={styles["hamburger"]}
            onClick={() => {
              setOpen(true);
            }}
          />
        )}
      </div>
      {open ? (
        <nav className={styles["mobile-nav"]}>
          <ul className={styles["mobile-list"]}>
            {children.map((child) => {
              return (
                <li key={child.href} className={styles["mobile-item"]}>
                  {React.cloneElement(child, {
                    className: styles["mobile-link"],
                  })}
                </li>
              );
            })}
          </ul>
        </nav>
      ) : null}
    </div>
  );
}
