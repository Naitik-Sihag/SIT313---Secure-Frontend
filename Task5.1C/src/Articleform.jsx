import React, { useState } from "react";
import "./ArticleForm.css";

export default function ArticleForm() {
  const [title, setTitle] = useState("");
  const [abstract, setAbstract] = useState("");
  const [text, setText] = useState("");
  const [tags, setTags] = useState("");

  const handleSubmit = (i) => {
    i.preventDefault();
    console.log("Article submitted:", { title, abstract, text, tags });
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <label>Title</label>
      <input
        type="text"
        placeholder="Enter a descriptive title"
        value={title}
        onChange={(i) => setTitle(i.target.value)}
      />

      <label>Abstract</label>
      <input
        type="text"
        placeholder="Enter a 1-paragraph abstract"
        value={abstract}
        onChange={(i) => setAbstract(i.target.value)}
      />

      <label>Article Text</label>
      <textarea
        rows="6"
        placeholder="Enter a 1-paragraph abstract"
        value={text}
        onChange={(i) => setText(i.target.value)}
      />

      <label>Tags</label>
      <input
        type="text"
        placeholder="Please add up to 3 tags to describe what your article is about e.g., Java"
        value={tags}
        onChange={(i) => setTags(i.target.value)}
      />

      <button type="submit">Post</button>
    </form>
  );
}