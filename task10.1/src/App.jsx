import React from "react";
import Header from "./Header";
import Image from "./Image";
import Newsletter from "./Newsletter";
import Footer from "./Footer";
import "./App.css";
import FeaturedArticles from "./FeaturedArticle";
import FeaturedTutorials from "./FeaturedTutorial";


function App() {
  return (
    <div>
      <Header/>
      <Image />
      <FeaturedArticles/>
      <FeaturedTutorials/>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;