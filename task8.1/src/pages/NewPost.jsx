import React, { useState } from "react";
import QuestionForm from "./QuestionForm";
import ArticleForm from "./ArticleForm";

export default function NewPost() {
  const [postType, setPostType] = useState("question");

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 bg-gray-300 ">New Post</h2>
      
      <div className="mb-6">
        <label className="mr-6">
          <input
            type="radio"
            value="question"
            checked={postType === "question"}
            onChange={() => setPostType("question")}
            className="mr-2"
          />
          Question
        </label>
        <label>
          <input
            type="radio"
            value="article"
            checked={postType === "article"}
            onChange={() => setPostType("article")}
            className="mr-2"
          />
          Article
        </label>
      </div>

      <div className="border-t pt-6">
        <h3 className="font-semibold mb-4 bg-gray-300">What do you want to ask or share</h3>
        <p className="text-gray-600 mb-6">
          This section is designed based on the type of the post. It could be developed by conditional rendering.
          <span className="text-red-600 font-medium">
            {" "}
            For post a {postType}, the following section would be appeared.
          </span>
        </p>
        
        {postType === "question" ? <QuestionForm /> : <ArticleForm />}
      </div>
    </div>
  );
}
