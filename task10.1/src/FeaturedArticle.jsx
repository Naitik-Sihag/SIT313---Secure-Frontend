import React from "react";

const articles = [
  { id: 1, title: "Article's name", author: "Author's name", rating: 4.5, img: "https://picsum.photos/200?random=1" },
  { id: 2, title: "Article's name", author: "Author's name", rating: 4.2, img: "https://picsum.photos/200?random=2" },
  { id: 3, title: "Article's name", author: "Author's name", rating: 4.7, img: "https://picsum.photos/200?random=3" },
];

function FeaturedArticles() {
  return (
    <section className="section">
      <h2>Featured Articles</h2>
      <div className="card-container">
        {articles.map(article => (
          <div key={article.id} className="card">
            <img src={article.img} alt={article.title} />
            <h3>{article.title}</h3>
            <p>Summary of article</p>
            <p>{article.author}</p>
            <p>{article.rating}</p>
          </div>
        ))}
      </div>
      <button className="see-all">See all articles</button>
    </section>
  );
}

export default FeaturedArticles;