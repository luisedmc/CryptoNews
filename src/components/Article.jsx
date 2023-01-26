import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Col, Row, Image } from 'react-bootstrap';
import Loading from "./Loading";

const API_KEY = process.env.REACT_APP_API_KEY;

const Article = () => {
    const [article, setArticle] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    let { id } = useParams();

    useEffect(() => {
        const requestOptions = {
            method: "GET",
        }

        setIsLoading(true);
        fetch(`https://newsapi.org/v2/everything?q=crypto&apiKey=${API_KEY}`, requestOptions)
            .then(response => response.json())
            .then(data => {
                setIsLoading(false);
                setArticle(data.articles[id]);
                console.log(data.articles[id]);
            })
            .catch(error => {
                setIsLoading(false);
                console.log(error);
            });
    }, [id])

    return (
        <Container>
            <Row>
                <h1 className="display-3 mt-2 text-primary text-center fw-bold">{article.title}</h1>
            </Row>

            {isLoading && <Loading />}

            <Row className="mt-4">
                <p>{article.content}</p>
                <Col className="d-flex justify-content-between">
                    <small className="text-secondary">{article.publishedAt}</small>
                    <small className="text-secondary">By {article.author}</small>
                </Col>
            </Row>

            <Row className="mt-4">
                <Col>
                    <Image fluid src={article.urlToImage} />
                </Col>
            </Row>

            {/* <Row>
                <Col className="d-flex justify-content-center align-items-center">
                    <a href={article.url}>Full article</a>
                </Col>
            </Row> */}
        </Container>
    );
}

export default Article;