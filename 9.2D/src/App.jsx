import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Image from "./Image";
import Newsletter from "./Newsletter";
import Footer from "./Footer";
import FeaturedArticles from "./FeaturedArticle";
import FeaturedTutorials from "./FeaturedTutorial";
import PricingPlans from "./PricingPlans";
import PaymentPage from "./PaymentPage";
import PostPage from "./PostPage";
import "./App.css";

function HomePage() {
  return (
    <>
      <Image />
      <FeaturedArticles />
      <FeaturedTutorials />
      <Newsletter />
    </>
  );
}

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/plans" element={<PricingPlans />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/post" element={<PostPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;