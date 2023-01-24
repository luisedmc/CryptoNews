import React, { useState, useEffect } from "react";
import Loading from "./utils/Loading";

const API_KEY = process.env.REACT_APP_API_KEY;

const Articles = () => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch(`https://newsapi.org/v2/everything?q=tesla&from=2022-12-24&sortBy=publishedAt&apiKey=${API_KEY}`)
            .then(response => response.json())
            .then(data => {
                setIsLoading(false);
                setArticles(data.articles.slice(0, 26));
                console.log(data.articles.slice(0, 26));
            })
            .catch(error => {
                setIsLoading(false);
                console.log(error);
            });
    }, []);

    return (
        <div>
            <h1 className="display-3 text-center fw-bold">Latest Articles</h1>

            {isLoading && <Loading />}
            <div className="row">
                {articles.map((article, index) => {
                    return (
                        <article key={index} className="col-md-6 d-flex justify-content-between">

                            <div className="article_card">
                                <div className="article_image">
                                    <img className="img-fluid w-100" src={article.urlToImage} alt={article.title} />
                                </div>

                                <div className="article_description">
                                    <div className="article_title">
                                        <h2>{article.title}</h2>
                                    </div>

                                    <p>{article.description}</p>
                                </div>

                                <div className="article_button">
                                    <div className="read_more">
                                        <a target="blank" rel="noopener noreferrer" href={article.url}>Read more</a>
                                    </div>
                                </div>
                            </div>

                        </article>
                    );
                })}
            </div>
        </div>
    );
}

export default Articles;