import NewsAPI from "newsapi"
const newsapi = new NewsAPI(process.env.NEWS_API_KEY)

import {getCategories} from "./categories"

// Regex to remove tail of the string that start either with - or |
// They're usually used to describe the origin of the article
const titleReplaceRegex = /( \|.*)|( - [^-]*$)/g

export const getNewsArticles = async () => {
  const categories = getCategories()

  const results = await Promise.allSettled(categories.map(async category => {
    const res = await newsapi.v2.everything({
      q: category,
      language: 'de',
      sortBy: 'relevancy',
    })

    const articles = res.articles
      .filter(a => a.urlToImage && a.description)
      .map(a => ({
        ...a,
        author: a.author || "John Doe",
        likes: Math.floor(Math.random() * 100)
      }))

    return {
      category,
      articles,
    }
  }))

  return results.map(({value}) => value)
}

export const getHeadlines = async () => {
  const res = await newsapi.v2.topHeadlines({
    country: "ch"
  })

  return res.articles
    .filter(a => a.urlToImage && a.description)
    .map(a => ({
      ...a,
      title: a.title.replace(titleReplaceRegex, ""),
      author: a.author || "John Doe",
      likes: Math.floor(Math.random() * 100)
    }))
}