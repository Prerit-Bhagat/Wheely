import React, { useEffect, useState } from "react";

const CarNews = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiKey = "7f69bc049b5a44e7ad9b6accdf6ea350"; // Replace with your NewsAPI key
    const apiUrl = `https://newsapi.org/v2/everything?q=cars&apiKey=${apiKey}`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        console.log(response)
        return response.json();
      })
      .then((data) => {
        console.log(data)
        setNews(data.articles);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  return (
    <div>
      <h1>Car News</h1>
      {error ? (
        <p>Error fetching news: {error}</p>
      ) : (
        <ul>
          {news.map((article, index) => (
            <li key={index}>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                {article.title}
              </a>
              <p>{article.description}</p>
              
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CarNews;
