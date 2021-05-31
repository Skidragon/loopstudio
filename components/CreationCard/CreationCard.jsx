import Image from "next/image";
import styles from "./CreationCard.module.scss";
import cn from "classnames";
import Link from "next/link";
export const CreationCard = ({
  title = "",
  src = "",
  alt = "",
  quality = 90,
  objectPosition = "",
  ...props
}) => {
  return (
    <div {...props} className={[cn(styles["creation-card"], props.className)]}>
      <Link href={title.replace(" ", "-").toLowerCase()}>
        <a className={styles["link"]}></a>
      </Link>
      <h3 className={styles["title"]}>{title}</h3>
      <div className={styles["img-wrapper"]}>
        <Image
          layout="fill"
          objectFit="cover"
          quality={quality}
          className={styles["img"]}
          objectPosition={objectPosition}
          src={src}
          alt={alt}
        />
      </div>
    </div>
  );
};
