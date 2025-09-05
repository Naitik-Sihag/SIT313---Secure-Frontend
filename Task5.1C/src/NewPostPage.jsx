import React, { useState } from "react";
import QuestionForm from "./QuestionForm";
import ArticleForm from "./Articleform";
import "./NewPostPage.css";

export default function NewPostPage() {
  const [postType, setPostType] = useState("");

  return (
    <div className="new-post-container">
      <h3>New Post</h3>

      <div className="post-type">
        <label>Select Post Type: </label>
        <label>
          <input
            type="radio"
            value="question"
            checked={postType === "question"}
            onChange={(i) => setPostType(i.target.value)}
          />
          Question
        </label>
        <label>
          <input
            type="radio"
            value="article"
            checked={postType === "article"}
            onChange={(i) => setPostType(i.target.value)}
          />
          Article
        </label>
      </div>

      {/* Conditional Rendering */}
      {postType === "question" && <QuestionForm />}
      {postType === "article" && <ArticleForm />}
    </div>
  );
}