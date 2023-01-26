import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Row } from 'react-bootstrap';
import Title from "../../components/Title";
import Loading from "../../components/Loading";
import "./../../index.css";

const API_KEY = process.env.REACT_APP_API_KEY;

const Articles = () => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const requestOptions = {
            method: "GET",
        }
        
        setIsLoading(true);
        fetch(`https://newsapi.org/v2/everything?q=crypto&apiKey=${API_KEY}`, requestOptions)
            .then(response => response.json())
            .then(data => {
                setIsLoading(false);
                setArticles(data.articles.slice(0, 26));
                // console.log(data.articles.slice(0, 26));
            })
            .catch(error => {
                setIsLoading(false);
                console.log(error);
            });
    }, []);

    return (
        <>
            <Title title="Latest Articles" />

            {isLoading && <Loading />}
            <Row>
                {articles.map((article, index) => {
                    return (
                        <Card key={index} className="mx-auto my-3 p-0" style={{ width: "28rem" }}>
                            <Link to={`/articles/${index}`} className="text-decoration-none">
                                <Card.Img className="img-fluid max-height-image w-100" variant="top" src={article.urlToImage} /></Link>

                            <Card.Body>
                                <Link to={`/articles/${index}`} className="text-decoration-none">
                                    <Card.Title>{article.title}</Card.Title> </Link>
                                <Card.Text>{article.description}</Card.Text>
                            </Card.Body>

                            <Card.Footer className="d-flex justify-content-between align-items-center">
                                <small className="text-muted">By '{article.author}'</small>
                                <Link to={`/articles/${index}`} className="text-decoration-none">Read More</Link>
                            </Card.Footer>
                        </Card>
                    );
                })}
            </Row>
        </>
    );
}

export default Articles;