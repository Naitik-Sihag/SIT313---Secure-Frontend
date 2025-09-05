import React, { useState } from "react";
import "./QuestionForm.css";

export default function QuestionForm() {
  const [title, setTitle] = useState("");
  const [problem, setProblem] = useState("");
  const [tags, setTags] = useState("");

  const handleSubmit = (i) => {
    i.preventDefault();
    console.log("Question submitted:", { title, problem, tags });
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <label>Title</label>
      <input
        type="text"
        placeholder="Start your question with how, what, why, etc."
        value={title}
        onChange={(i) => setTitle(i.target.value)}
      />

      <label>Describe your problem</label>
      <textarea
        rows="6"
        value={problem}
        onChange={(i) => setProblem(i.target.value)}
      />

      <label>Tags</label>
      <input
        type="text"
        placeholder="Please add up to 3 tags to describe what your question is about e.g., Java"
        value={tags}
        onChange={(i) => setTags(i.target.value)}
      />

      <button type="submit">Post</button>
    </form>
  );
}