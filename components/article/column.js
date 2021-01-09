import cn from "classnames"
import styles from "./article.module.scss"

import Like from "../like"
import {formatDate} from "../../lib/date"

const Column = ({article}) => {
  return (
    <article className={cn(styles.article, styles["article--column"])}>
      <div className={styles["article__image-wrapper"]}>
        <img alt={""} src={article.urlToImage} className={styles["article__image"]} />
      </div>
      <span className={styles["article__type"]}>Kolumne</span>
      <h2 className={styles["article__title"]}>
        <a href={article.url}>
          {article.title}
        </a>
      </h2>
      <footer className={styles["article__footer"]}>
        <p className={styles["article__meta"]}>
          {article.author} • <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
        </p>
        <Like identifier={article.url} numOfLikes={article.likes} />
      </footer>
    </article>
  )
}

export default Column