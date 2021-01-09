import cn from "classnames"
import styles from "./article.module.scss"

import Like from "../like"
import {formatDate} from "../../lib/date"

const CategoryMainArticle = ({article}) => {
  return (
    <article className={cn(styles.article, styles["article--category-main"])}>
      <img alt={""} src={article.urlToImage} className={styles["article__image"]} />
      <h2 className={styles["article__title"]}>
        <a href={article.url}>
          {article.title}
        </a>
      </h2>
      <p className={styles["article__description"]}>{article.description}</p>
      <footer className={styles["article__footer"]}>
        <p className={styles["article__meta"]}>
          {article.author} • <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
        </p>
        <Like identifier={article.url} numOfLikes={article.likes} />
      </footer>
    </article>
  )
}

export default CategoryMainArticle