// src/blog/BlogForm.js
import React, { useState } from "react";
import { useBlog } from "./BlogContext";

const BlogForm = () => {
  const { addBlog } = useBlog(); // Access addBlog function from context
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      addBlog({ title, content, image }); // Pass blog data to the context
      setTitle(""); // Reset the title input
      setContent(""); // Reset the content input
      setImage(""); // Reset the image input
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h2 className="text-xl font-semibold mb-4">Add New Blog Post</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 w-full rounded"
          required
        />
      </div>
      <div className="mb-4">
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="border p-2 w-full rounded"
          required
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Image URL (optional)"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="border p-2 w-full rounded"
        />
      </div>
      <button
        type="submit"
        className="bg-primaryColor text-white p-2 rounded-lg"
      >
        Add Blog Post
      </button>
    </form>
  );
};

export default BlogForm;
