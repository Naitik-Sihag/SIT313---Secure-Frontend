import React from "react";

const tutorials = [
  { id: 1, title: "Tutorial's name", author: "Author's name", rating: 4.3, img: "https://picsum.photos/200?random=4" },
  { id: 2, title: "Tutorial's name", author: "Author's name", rating: 4.6, img: "https://picsum.photos/200?random=5" },
  { id: 3, title: "Tutorial's name", author: "Author's name", rating: 4.8, img: "https://picsum.photos/200?random=6" },
];

function FeaturedTutorials() {
  return (
    <section className="section">
      <h2>Featured Tutorials</h2>
      <div className="card-container">
        {tutorials.map(tutorial => (
          <div key={tutorial.id} className="card">
            <img src={tutorial.img} alt={tutorial.title} />
            <h3>{tutorial.title}</h3>
            <p>Summary of tutorial</p>
            <p>{tutorial.author}</p>
            <p>{tutorial.rating}</p>
          </div>
        ))}
      </div>
      <button className="see-all">See all tutorials</button>
    </section>
  );
}

export default FeaturedTutorials;