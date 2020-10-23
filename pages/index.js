import Head from 'next/head'
import styles from '../styles/Home.module.css'

import {getNewsArticles, getHeadlines} from "../lib/news"

export default function Home({articles, headlines}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          There are {articles.length} Articles
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          {articles.map(article => (
            <a key={article.url} href={article.url} className={styles.card}>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
            </a>
          ))}
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps(context) {
  const articles = await getNewsArticles()
  const headlines = await getHeadlines()

  return {
    props: {
      articles: articles,
      headlines: headlines
    }, // will be passed to the page component as props
  }
}
