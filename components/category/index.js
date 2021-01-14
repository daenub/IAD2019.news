import React from "react"

import Article from "../article/article"
import CategoryMainArticle from "../article/categoryMainArticle"

import styles from "./category.module.scss"

const Category = ({category, articles}) => {
  const mainArticles = articles.slice(0,2)
  return (
    <React.Fragment>
      <h2 className={styles.category} id={category}>
        <span className={styles["category__word-wrapper"]}>
          {category}
        </span>
      </h2>
      {
        articles.slice(0, 2).map(a => <CategoryMainArticle key={a.url} article={a} />)
      }
      {
        articles.slice(2, 5).map(a => <Article key={a.url} article={a} />)
      }
    </React.Fragment>
  )
}

export default Category