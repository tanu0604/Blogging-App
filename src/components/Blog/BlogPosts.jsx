// // src/blog/BlogPosts.js
// import React from "react";
// import { useBlog } from "./BlogContext";
// import BlogForm from "./BlogForm"; // Import the BlogForm
// // import Blog1 from "../../assests/Blogs/Blog1";

// const BlogPosts = () => {
//   const { blogs } = useBlog();

//   return (
//     <div className="p-4 mt-16 lg:ml-44 md:ml-24 ml-0">
//       <BlogForm /> {/* Include BlogForm here */}
//       <div className="headings flex justify-between">
//         <h1 className="text-2xl font-semibold mb-4">Blogs</h1>
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {blogs.map((post) => (
//           <div
//             key={post.id}
//             className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
//           >
//             <div className="img-container mb-2">
//               <img
//                 src={post.image || Blog1} // Use a placeholder if no image is provided
//                 alt={post.title}
//                 className="w-48 h-32 object-cover rounded-lg flex justify-center items-center"
//               />
//             </div>
//             <h2 className="text-xl font-semibold">{post.title}</h2>
//             <p className="text-gray-800">{post.content}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BlogPosts;
// src/blog/BlogPosts.js
import React from "react";
import { useBlog } from "./BlogContext";
import BlogForm from "./BlogForm"; // Import the BlogForm

const BlogPosts = () => {
  const { blogs } = useBlog();

  return (
    <div className="p-4 mt-16 lg:ml-24 md:ml-24 ml-0">
      <BlogForm /> {/* Include BlogForm here */}
      <div className="headings flex justify-between">
        <h1 className="text-2xl font-semibold mb-4">Blogs</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {blogs && blogs.length > 0 ? (
          blogs.map((post) => (
            <div
              key={post.id}
              className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <div className="img-container mb-2">
                <img
                  src={post.image || "path/to/placeholder/image.jpg"} // Use a placeholder if no image is provided
                  alt={post.title}
                  className="w-48 h-32 object-cover rounded-lg flex justify-center items-center"
                />
              </div>
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-gray-800">{post.content}</p>
            </div>
          ))
        ) : (
          <p>No blog posts available.</p> // Fallback message
        )}
      </div>
    </div>
  );
};

export default BlogPosts;
