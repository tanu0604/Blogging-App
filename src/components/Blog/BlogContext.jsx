// // src/components/Blog/BlogContext.js
// import React, { createContext, useContext, useState } from "react";

// const BlogContext = createContext();

// export const useBlog = () => {
//   return useContext(BlogContext);
// };

// export const BlogProvider = ({ children }) => {
//   const [blogs, setBlogs] = useState([]); // State to hold blog posts

//   const addBlog = (newBlog) => {
//     setBlogs((prevBlogs) => [
//       ...prevBlogs,
//       { id: prevBlogs.length + 1, ...newBlog },
//     ]);
//   };

//   return (
//     <BlogContext.Provider value={{ blogs, addBlog }}>
//       {children}
//     </BlogContext.Provider>
//   );
// };

// // Optionally, if you need a default export, you can do it like this
// // export default BlogProvider; 
// src/blog/BlogContext.js
import React, { createContext, useContext, useEffect, useState } from "react";

const BlogContext = createContext();

export const useBlog = () => {
  return useContext(BlogContext);
};

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState(() => {
    // Get stored blogs from local storage, if available
    const savedBlogs = localStorage.getItem("blogs");
    return savedBlogs ? JSON.parse(savedBlogs) : []; // Parse saved blogs or return empty array
  });

  const addBlog = (blog) => {
    setBlogs((prevBlogs) => {
      const newBlogs = [...prevBlogs, { ...blog, id: Date.now() }];
      localStorage.setItem("blogs", JSON.stringify(newBlogs)); // Save blogs to local storage
      return newBlogs;
    });
  };

  // Optional: Sync blogs with local storage whenever they change
  useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }, [blogs]);

  return (
    <BlogContext.Provider value={{ blogs, addBlog }}>
      {children}
    </BlogContext.Provider>
  );
};
