import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_KEY = process.env.REACT_APP_API_KEY;

const Article = () => {
    const [article, setArticle] = useState([]);
    let { id } = useParams();

    useEffect(() => {
        fetch(`https://newsapi.org/v2/everything?q=tesla&from=2022-12-24&sortBy=publishedAt&apiKey=${API_KEY}`)
            .then(response => response.json())
            .then(data => {
                setArticle(data.articles[id]);
                console.log(data.articles[id]);
            })
            .catch(error => {
                console.log(error);
            });
    }, [id])

    return (
        <div>
            <h1 className="display-3 text-center fw-bold">{article.title}</h1>
        </div>
    );
}

export default Article;