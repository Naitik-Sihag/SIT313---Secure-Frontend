import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function ArticleForm() {
  const [title, setTitle] = useState("");
  const [abstract, setAbstract] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !abstract || !content) {
      alert("Please fill all required fields!");
      return;
    }

    setLoading(true);

    try {
      let imageData = null;
      if (image) {
        imageData = await convertToBase64(image);
      }

      console.log("Saving article to Firestore...");
      const docRef = await addDoc(collection(db, "articles"), {
        title,
        abstract,
        content,
        tags,
        image: imageData,
        createdAt: serverTimestamp(),
      });
      
      console.log("Article saved with ID:", docRef.id);
      alert("Article posted successfully!");
      setTitle("");
      setAbstract("");
      setContent("");
      setTags("");
      setImage(null);
    } catch (err) {
      console.error("Detailed error:", err);
      console.error("Error code:", err.code);
      console.error("Error message:", err.message);
      alert(`Upload failed: ${err.message}`);
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-6 bg-white rounded-lg shadow-md">
      <div>
        <label className="block font-semibold mb-1">Title</label>
        <input
          type="text"
          placeholder="Enter a descriptive title"
          className="w-full border border-gray-300 rounded-lg p-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div>
        <label className="block font-semibold mb-1">Add a image</label>
        <div className="border border-gray-300 rounded-lg p-4 h-32 flex items-center justify-center bg-gray-50 mb-2">
          {image ? (
            <div className="text-center">
              <p className="text-sm text-gray-600">Selected: {image.name}</p>
              <p className="text-xs text-gray-500 mt-1">Image ready for upload</p>
            </div>
          ) : (
            <p className="text-gray-400">No image selected</p>
          )}
        </div>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          className="hidden"
          id="imageUpload"
        />
        <div className="flex space-x-2">
          <label
            htmlFor="imageUpload"
            className="bg-gray-400 text-black px-3 py-1 rounded cursor-pointer hover:bg-gray-300 text-sm"
          >
            Browse
          </label>
          <button
            type="button"
            onClick={() => document.getElementById('imageUpload').click()}
            className="bg-gray-400 text-black px-3 py-1 rounded hover:bg-gray-300 text-sm"
          >
            Upload
          </button>
        </div>
      </div>

      <div>
        <label className="block font-semibold mb-1">Abstract</label>
        <input
          type="text"
          placeholder="Enter a 1-paragraph abstract"
          className="w-full border border-gray-300 rounded-lg p-2"
          value={abstract}
          onChange={(e) => setAbstract(e.target.value)}
        />
      </div>

      <div>
        <label className="block font-semibold mb-1">Article Text</label>
        <textarea
          placeholder="Enter full article content"
          className="w-full border border-gray-300 rounded-lg p-2 h-28"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </div>

      <div>
        <label className="block font-semibold mb-1">Tags</label>
        <input
          type="text"
          placeholder="Please add up to 3 tags"
          className="w-full border border-gray-300 rounded-lg p-2"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-semibold disabled:opacity-60"
        >
          {loading ? "Posting..." : "Post"}
        </button>
      </div>
    </form>
  );
}