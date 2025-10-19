import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

function PostPage() {
  const [postType, setPostType] = useState("question");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [tags, setTags] = useState("");
  const [isPreview, setIsPreview] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      postType,
      title,
      description,
      code,
      language,
      tags: tags.split(",").map(tag => tag.trim())
    });
    alert("Post submitted successfully!");
  };



  return (
    <div style={{ padding: "20px", maxWidth: "1000px", margin: "0 auto" }}>
      <h2 style={{ marginBottom: "30px" }}>Create a New Post</h2>
      
      <form onSubmit={handleSubmit}>
        {/* Post Type Selection */}
        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}>
            Post Type:
          </label>
          <div>
            <label style={{ marginRight: "20px" }}>
              <input
                type="radio"
                value="question"
                checked={postType === "question"}
                onChange={(e) => setPostType(e.target.value)}
                style={{ marginRight: "5px" }}
              />
              Question
            </label>
            <label>
              <input
                type="radio"
                value="article"
                checked={postType === "article"}
                onChange={(e) => setPostType(e.target.value)}
                style={{ marginRight: "5px" }}
              />
              Article
            </label>
          </div>
        </div>

        {/* Title */}
        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}>
            Title:
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter your post title..."
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              fontSize: "16px"
            }}
            required
          />
        </div>

        {/* Description */}
        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}>
            Description:
          </label>
          <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
            <button
              type="button"
              onClick={() => setIsPreview(false)}
              style={{
                padding: "5px 15px",
                backgroundColor: !isPreview ? "#007bff" : "#f8f9fa",
                color: !isPreview ? "white" : "#333",
                border: "1px solid #ccc",
                borderRadius: "4px",
                cursor: "pointer"
              }}
            >
              Write
            </button>
            <button
              type="button"
              onClick={() => setIsPreview(true)}
              style={{
                padding: "5px 15px",
                backgroundColor: isPreview ? "#007bff" : "#f8f9fa",
                color: isPreview ? "white" : "#333",
                border: "1px solid #ccc",
                borderRadius: "4px",
                cursor: "pointer"
              }}
            >
              Preview
            </button>
          </div>
          
          {!isPreview ? (
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe your post... (Markdown supported)"
              style={{
                width: "100%",
                height: "150px",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                fontSize: "14px",
                fontFamily: "monospace",
                resize: "vertical"
              }}
              required
            />
          ) : (
            <div style={{
              width: "100%",
              minHeight: "150px",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              backgroundColor: "#f8f9fa"
            }}>
              <ReactMarkdown>{description || "*Preview will appear here...*"}</ReactMarkdown>
            </div>
          )}
        </div>

        {/* Code Section (for questions) */}
        {postType === "question" && (
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}>
              Code (Optional):
            </label>
            
            <div style={{ marginBottom: "10px" }}>
              <label style={{ marginRight: "10px" }}>Language:</label>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                style={{
                  padding: "5px",
                  border: "1px solid #ccc",
                  borderRadius: "4px"
                }}
              >
                <option value="javascript">JavaScript</option>
                <option value="python">Python</option>
                <option value="java">Java</option>
                <option value="cpp">C++</option>
              </select>
            </div>

            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder={`Enter your ${language} code here...`}
              style={{
                width: "100%",
                height: "300px",
                padding: "12px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                fontSize: "14px",
                fontFamily: "'Courier New', monospace",
                backgroundColor: "#2d3748",
                color: "#e2e8f0",
                resize: "vertical",
                lineHeight: "1.5"
              }}
            />
          </div>
        )}

        {/* Tags */}
        <div style={{ marginBottom: "30px" }}>
          <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}>
            Tags (comma-separated):
          </label>
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="react, javascript, programming..."
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              fontSize: "16px"
            }}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            padding: "12px 30px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "6px",
            fontSize: "16px",
            cursor: "pointer"
          }}
        >
          Publish {postType === "question" ? "Question" : "Article"}
        </button>
      </form>
    </div>
  );
}

export default PostPage;