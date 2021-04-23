import React from "react";

export const PostListItem = ({ post }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-5">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:w-48"
            src={post.webformatURL}
            alt="Man looking at item at a store"
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {post.user_id}
          </div>
          <a
            href="/"
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            {post.user}
          </a>
          <p className="mt-2 text-gray-500">{post.tags}</p>
        </div>
      </div>
    </div>
  );
};
