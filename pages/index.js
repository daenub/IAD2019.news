import Head from 'next/head'
import styles from '../styles/Home.module.scss'

import {getNewsArticles, getHeadlines} from "../lib/news"

import Header from "../components/header"
import MainArticle from "../components/article/mainArticle"
import SubArticle from "../components/article/subArticle"
import Article from "../components/article/article"
import Column from "../components/article/column"
import Like from "../components/like"
import Category from "../components/category"
import Weather from "../components/weather"

import Ad from "../components/ad"

export default function Home({articlesByCategory, headlines}) {
  const [mainHeadlineArticle, subHeadlinearticle, columnArticle, ...headlineArticles] = headlines

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <h2 className={"show-for-sr"}>Aktuelles</h2>
      <MainArticle key={mainHeadlineArticle.url} article={mainHeadlineArticle} />
      <SubArticle key={subHeadlinearticle.url} article={subHeadlinearticle} />
      <Column key={columnArticle.url} article={columnArticle} />
      <Weather />

      {
        headlineArticles.slice(0, 3).map(article => <Article key={article.url} article={article} />)
      }
      <Ad />

      {
        articlesByCategory.map(props => <Category key={props.category} {...props} />)
      }
    </div>
  )
}

export async function getStaticProps(context) {
  const articles = await getNewsArticles()
  const headlines = await getHeadlines()

  return {
    props: {
      articlesByCategory: articles,
      headlines: headlines
    }, // will be passed to the page component as props
  }
}
