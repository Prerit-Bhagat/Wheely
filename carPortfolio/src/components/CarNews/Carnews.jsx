// import React, { useEffect, useState } from "react";

// const CarNews = () => {
//   const [news, setNews] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const apiKey = "7f69bc049b5a44e7ad9b6accdf6ea350"; // Replace with your NewsAPI key
//     const apiUrl = `https://newsapi.org/v2/everything?q=cars&apiKey=${apiKey}`;

//     fetch(apiUrl)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         console.log(response)
//         return response.json();
//       })
//       .then((data) => {
//         console.log(data)
//         setNews(data.articles);
//       })
//       .catch((error) => {
//         setError(error.message);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>Car News</h1>
//       {error ? (
//         <p>Error fetching news: {error}</p>
//       ) : (
//         <ul>
//           {news.map((article, index) => (
//             <li key={index}>
//               <a href={article.url} target="_blank" rel="noopener noreferrer">
//                 {article.title}
//               </a>
//               <p>{article.description}</p>

//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default CarNews;
"use client";

import React, { useEffect, useState } from "react";
import "@/components/css/CarNews.css"; // Importing the CSS file

const CarNews = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    // const apiKey = "7f69bc049b5a44e7ad9b6accdf6ea350"; // Replace with your NewsAPI key
    // const apiUrl = `https://newsapi.org/v2/everything?q=cars&sortBy=publishedAt&pageSize=10&apiKey=${apiKey}`;

    const apiKey = "c104c29a70a24519b2648120530502f3";
    const apiUrl = `https://newsapi.org/v2/everything?q=tesla&from=2025-07-07&sortBy=publishedAt&apiKey=${apiKey}`;

    setLoading(true); // Set loading to true before fetch
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (data.articles && Array.isArray(data.articles)) {
          setNews(data.articles);
        } else {
          throw new Error("Invalid data format received from API.");
        }
      })
      .catch((err) => {
        console.error("Error fetching news:", err);
        setError(err.message);
      })
      .finally(() => {
        setLoading(false); // Set loading to false after fetch completes
      });
  }, []);

  return (
    <section className="car-news-container">
      <h1 className="car-news-title">Latest Car News</h1>
      {loading ? (
        <p className="loading-message">Loading news...</p>
      ) : error ? (
        <p className="error-message">Error fetching news: {error}</p>
      ) : news.length === 0 ? (
        <p className="no-news-message">No news articles found.</p>
      ) : (
        <div className="news-grid">
          {news.map((article, index) => (
            <article key={article.url || index} className="news-card">
              {article.urlToImage && (
                <img
                  src={article.urlToImage || "/placeholder.svg"}
                  alt={article.title}
                  className="news-card-image"
                />
              )}
              <div className="news-card-content">
                <h3 className="news-card-title">
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {article.title}
                  </a>
                </h3>
                {article.source?.name && (
                  <p className="news-card-source">
                    Source: {article.source.name}
                  </p>
                )}
                <p className="news-card-description">{article.description}</p>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
};

export default CarNews;
