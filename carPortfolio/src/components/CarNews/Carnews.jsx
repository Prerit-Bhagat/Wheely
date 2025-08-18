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
// "use client";

// import React, { useEffect, useState } from "react";
// import "@/components/css/CarNews.css"; // Importing the CSS file

// const CarNews = () => {
//   const [news, setNews] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true); // Add loading state

//   useEffect(() => {
//     // const apiKey = "7f69bc049b5a44e7ad9b6accdf6ea350"; // Replace with your NewsAPI key
//     // const apiUrl = `https://newsapi.org/v2/everything?q=cars&sortBy=publishedAt&pageSize=10&apiKey=${apiKey}`;

//     const apiKey = "c104c29a70a24519b2648120530502f3";
//     const apiUrl = `https://newsapi.org/v2/everything?q=tesla&from=2025-07-07&sortBy=publishedAt&apiKey=${apiKey}`;

//     setLoading(true); // Set loading to true before fetch
//     fetch(apiUrl)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then((data) => {
//         if (data.articles && Array.isArray(data.articles)) {
//           setNews(data.articles);
//         } else {
//           throw new Error("Invalid data format received from API.");
//         }
//       })
//       .catch((err) => {
//         console.error("Error fetching news:", err);
//         setError(err.message);
//       })
//       .finally(() => {
//         setLoading(false); // Set loading to false after fetch completes
//       });
//   }, []);

//   return (
//     <section className="car-news-container">
//       <h1 className="car-news-title">Latest Car News</h1>
//       {loading ? (
//         <p className="loading-message">Loading news...</p>
//       ) : error ? (
//         <p className="error-message">Error fetching news: {error}</p>
//       ) : news.length === 0 ? (
//         <p className="no-news-message">No news articles found.</p>
//       ) : (
//         <div className="news-grid">
//           {news.map((article, index) => (
//             <article key={article.url || index} className="news-card">
//               {article.urlToImage && (
//                 <img
//                   src={article.urlToImage || "/placeholder.svg"}
//                   alt={article.title}
//                   className="news-card-image"
//                 />
//               )}
//               <div className="news-card-content">
//                 <h3 className="news-card-title">
//                   <a
//                     href={article.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     {article.title}
//                   </a>
//                 </h3>
//                 {article.source?.name && (
//                   <p className="news-card-source">
//                     Source: {article.source.name}
//                   </p>
//                 )}
//                 <p className="news-card-description">{article.description}</p>
//               </div>
//             </article>
//           ))}
//         </div>
//       )}
//     </section>
//   );
// };

// export default CarNews;
"use client";

import React, { useState } from "react";
import "@/components/css/CarNews.css"; // Importing the CSS file

const CarNews = () => {
  const defaultNews = [
    {
      title: "Tesla Unveils New Electric SUV with Extended Range",
      description:
        "Tesla has introduced its latest electric SUV, offering over 500 miles of range on a single charge.",
      url: "https://example.com/tesla-suv",
      urlToImage:
        "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      source: { name: "Car Magazine" },
    },
    {
      title: "BMW Announces Next-Gen Autonomous Driving Features",
      description:
        "BMW plans to roll out advanced autonomous driving features in their upcoming models.",
      url: "https://example.com/bmw-autonomous",
      urlToImage:
        "https://images.unsplash.com/photo-1517949908115-7202b6b4c1a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      source: { name: "Auto World" },
    },
    {
      title: "Ford Invests in EV Charging Infrastructure",
      description:
        "Ford is investing $2 billion in expanding EV charging networks across the globe.",
      url: "https://example.com/ford-ev",
      urlToImage:
        "https://images.unsplash.com/photo-1610465299993-1b7c6c3e8ff7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      source: { name: "Motor News" },
    },
    {
      title: "Mercedes-Benz Reveals Futuristic Concept Car",
      description:
        "Mercedes showcased its Vision EQXX concept car with groundbreaking aerodynamics and solar panels.",
      url: "https://example.com/mercedes-concept",
      urlToImage:
        "https://images.unsplash.com/photo-1605559424843-8b6f6b62d249?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      source: { name: "Drive Daily" },
    },
    {
      title: "Hyundai Expands Hydrogen Fuel Cell Program",
      description:
        "Hyundai is pushing forward with hydrogen fuel technology, aiming to make it mainstream by 2030.",
      url: "https://example.com/hyundai-hydrogen",
      urlToImage:
        "https://images.unsplash.com/photo-1629203851125-ec7bfb4b2e36?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      source: { name: "Green Mobility" },
    },
    {
      title: "Porsche Taycan Breaks EV Lap Record",
      description:
        "The Porsche Taycan Turbo S set a new Nürburgring record, making it the fastest electric sedan.",
      url: "https://example.com/porsche-taycan",
      urlToImage:
        "https://images.unsplash.com/photo-1571607388263-56c8e7e6df62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      source: { name: "Racing Insider" },
    },
  ];

  // {
  //   title: "Audi Plans 20 New Electric Models by 2030",
  //   description:
  //     "Audi announced its roadmap to launch 20 new EV models within the next five years.",
  //   url: "https://example.com/audi-ev",
  //   urlToImage:
  //     "https://images.unsplash.com/photo-1600267165605-caa6528d1aa0?w=800",
  //   source: { name: "Auto Future" },
  // },
  // {
  //   title: "Toyota Tests Solid-State Batteries",
  //   description:
  //     "Toyota’s breakthrough in solid-state battery technology promises faster charging and longer life cycles.",
  //   url: "https://example.com/toyota-battery",
  //   urlToImage:
  //     "https://images.unsplash.com/photo-1620799139503-9f1c443d7183?w=800",
  //   source: { name: "Tech Mobility" },
  // },
  // ];

  const [news] = useState(defaultNews); // using static data

  return (
    <section className="car-news-container">
      <h1 className="car-news-title">Latest Car News</h1>
      {news.length === 0 ? (
        <p className="no-news-message">No news articles available.</p>
      ) : (
        <div className="news-grid">
          {news.map((article, index) => (
            <article key={article.url || index} className="news-card">
              {article.urlToImage && (
                <img
                  src={article.urlToImage}
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
