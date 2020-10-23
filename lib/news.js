import NewsAPI from "newsapi"
const newsapi = new NewsAPI(process.env.NEWS_API_KEY)

export const getNewsArticles = async () => {

  const res = await newsapi.v2.everything({
    q: 'Digital',
    language: 'de',
    sortBy: 'relevancy',
  })

  return res.articles
}

export const getHeadlines = async () => {
  const res = await newsapi.v2.topHeadlines({
    country: "ch"
  })

  return res.articles
}