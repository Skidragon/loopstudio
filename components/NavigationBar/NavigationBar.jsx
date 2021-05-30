import CloseIcon from "components/CloseIcon/CloseIcon";
import Hamburger from "components/Hamburger/Hamburger";
import Logo from "components/Logo/Logo";
import React, { useEffect, useState } from "react";
import styles from "./NavigationBar.module.scss";
import cn from "classnames";
// https://www.npmjs.com/package/react-intersection-observer
// https://css-tricks.com/accessible-svgs/
// https://bennettfeely.com/clippy/
// https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
export default function NavigationBar({ inView = false, children, ...props }) {
  const [open, setOpen] = useState(false);
  const [hasOpenBefore, setHasOpenBefore] = useState(false);
  const [wasInView, setWasInView] = useState(false);
  useEffect(() => {
    if (inView) {
      setWasInView(true);
    }
  }, [inView]);
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      setHasOpenBefore(true);
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);
  useEffect(() => {
    const exitMobileNav = window.addEventListener("keyup", (e) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    });
    return () => {
      window.removeEventListener("keyup", exitMobileNav);
    };
  }, []);
  const getMobileNavClass = () => {
    if (open) {
      return styles["mobile-nav-active"];
    }
    if (hasOpenBefore && !open) {
      return styles["mobile-nav-inactive"];
    }
    return styles["none"];
  };
  return (
    <div
      className={cn({
        [styles["navigation-bar"]]: true,
        [styles["navigation-bar-remove-bg"]]: !inView && wasInView,
        [styles["contrast-from-bg"]]: inView,
      })}
    >
      <div className={styles["initial-content"]}>
        <Logo className={styles["logo"]} />
        <nav className={styles.nav}>
          <ul className={styles.list}>
            {children.map((child) => {
              return (
                <li key={child.props.children} className={styles.item}>
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
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                setOpen(false);
              }
            }}
          />
        ) : (
          <Hamburger
            className={styles["hamburger"]}
            onClick={() => {
              setOpen(true);
            }}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                setOpen(false);
              }
            }}
          />
        )}
      </div>
      <nav className={getMobileNavClass()}>
        <ul className={styles["mobile-list"]}>
          {children.map((child) => {
            return (
              <li key={child.props.children} className={styles["mobile-item"]}>
                {React.cloneElement(child, {
                  className: styles["mobile-link"],
                })}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
