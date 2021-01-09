import cn from "classnames"

import styles from "./ad.module.scss"

const Ad = () => {
  return (
    <article className={styles.ad}>
      <p>
        <span className={styles["ad__letter"]}>W</span>
        <span className={styles["ad__letter"]}>e</span>
        <span className={styles["ad__letter"]}>r</span>
        <span className={styles["ad__letter"]}>b</span>
        <span className={styles["ad__letter"]}>u</span>
        <span className={styles["ad__letter"]}>n</span>
        <span className={styles["ad__letter"]}>g</span>
      </p>
    </article>
  )
}

export default Ad