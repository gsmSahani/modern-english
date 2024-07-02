import React from "react";

import blogPosts from "./BlogPost";

const Blog = () => {
  return (
    <div className="dark:bg-gray-600 dark:text-white ">
      <div className="container mx-auto px-4 py-12 overflow-x-hidden dark:bg-gray-600">
        <h2 className="text-3xl font-bold text-center mb-8">Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="rounded-lg shadow-lg bg-white overflow-hidden h-full dark:bg-black dark:text-white"
            >
              <div className="p-6 flex flex-col h-full bg-slate-200 dark:bg-black">
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{post.content}</p>
                <div className="flex items-center mb-4">
                  <img
                    src={post.authorImage}
                    alt={post.author}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="text-sm text-gray-700">{post.author}</p>
                    <p className="text-xs text-gray-500">{post.date}</p>
                  </div>
                </div>
                <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300 dark:bg-black dark:text-white dark:outline">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
