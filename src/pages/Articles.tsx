import React, { useState, useEffect, ChangeEvent } from "react"
import { Row } from "react-bootstrap"
import { Title } from "src/components/Title"
import { ArticleCard } from "src/components/ArticleCard"
import { Loading } from "src/components/Loading"
import { SearchBox } from "src/components/SearchBox"
import "./../index.css"
import { ArticleData } from "src/components/interfaces/iArticleData"

const API_KEY = process.env.REACT_APP_API_KEY

const Articles = () => {
  const [articles, setArticles] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const requestOptions = {
      method: "GET",
    }

    setIsLoading(true)
    fetch(`https://newsapi.org/v2/everything?q=crypto&apiKey=${API_KEY}`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false)
        const articleIndex = data.articles.slice(0, 26).map((article: ArticleData, index: number) => {
          return { ...article, originalIndex: index }
        })
        setArticles(articleIndex)
        // console.log(data.articles.slice(0, 26));
      })
      .catch((error) => {
        setIsLoading(false)
        console.log(error)
      })
  }, [])

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery((event.target as HTMLInputElement).value)
  }

  const searchedArticle = articles.filter((article: ArticleData) => {
    return article.title.toLowerCase().includes(searchQuery.toString().toLowerCase())
  })
  // console.log(searchedArticle);

  return (
    <>
      <Title titleLabel="Latest Articles" />

      <SearchBox onChangeHandler={handleSearch} />
      {isLoading && <Loading />}
      {searchQuery !== ""
        ? searchedArticle.map((article: ArticleData, index: number) => (
            <Row>
              <ArticleCard key={index} index={article.originalIndex} article={article} />
            </Row>
          ))
        : articles.map((article: ArticleData, index: number) => (
            <ArticleCard key={index} index={article.originalIndex} article={article} />
          ))}
    </>
  )
}

export default Articles
