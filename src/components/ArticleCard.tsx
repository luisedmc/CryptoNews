import React from "react"
import { Link } from "react-router-dom"
import { Card } from "react-bootstrap"
import { ArticleCardProps } from "./interfaces/iArticleData"

export const ArticleCard = ({ article, index }: ArticleCardProps) => {
  return (
    <Card key={index} className="mx-auto my-3 p-0" style={{ width: "28rem" }}>
      {/* Image */}
      <Link to={`/articles/${index}`} className="text-decoration-none">
        <Card.Img className="img-fluid max-height-image w-100" variant="top" src={article.urlToImage} />
      </Link>

      {/* Body with Title and Description */}
      <Card.Body>
        <Link to={`/articles/${index}`} className="text-decoration-none">
          <Card.Title>{article.title}</Card.Title>{" "}
        </Link>
        <Card.Text>{article.description}</Card.Text>
      </Card.Body>

      {/* Footer with Author and Read More */}
      <Card.Footer className="d-flex justify-content-between align-items-center">
        <small className="text-muted">By '{article.author}'</small>
        <Link to={`/articles/${index}`} className="text-decoration-none">
          Read More
        </Link>
      </Card.Footer>
    </Card>
  )
}
