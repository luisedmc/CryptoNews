import React, { useState, useEffect } from "react"
import { Row } from "react-bootstrap"
import Title from "../components/Title"
import ArticleCard from "../components/ArticleCard"
import Loading from "../components/Loading"
import SearchBox from "../components/SearchBox"
import "./../index.css"

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
        const articleIndex = data.articles.slice(0, 26).map((article, index) => {
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

  const handleSearch = (event) => {
    setSearchQuery(event.target.value)
  }

  const searchedArticle = articles.filter((article) => {
    return article.title.toLowerCase().includes(searchQuery.toString().toLowerCase())
  })
  // console.log(searchedArticle);

  return (
    <>
      <Title title="Latest Articles" />

      <SearchBox onChange={handleSearch} />
      {isLoading && <Loading />}
      {searchQuery !== ""
        ? searchedArticle.map((article, index) => (
            <Row>
              <ArticleCard key={index} index={article.originalIndex} article={article} />
            </Row>
          ))
        : articles.map((article, index) => (
            <ArticleCard key={index} index={article.originalIndex} article={article} />
          ))}
    </>
  )
}

export default Articles
