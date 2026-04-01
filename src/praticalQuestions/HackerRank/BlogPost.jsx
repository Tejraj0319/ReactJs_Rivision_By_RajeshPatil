import React, { useState } from "react";

const Blogpost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [post, setPost] = useState([]);

  const handleCreate = () => {
    if (!title.trim() || !description.trim()) return;
    const newPost = {
      id: Date.now(),
      title,
      description,
    };
    setPost([...post, newPost]);
    setTitle("");
    setDescription("");
  };

  const handleDelete = (id) => {
    const updatedPosts = post.filter((item) => item.id !== id);
    setPost(updatedPosts);
  };

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center p-6">
      {/* title */}
      <div className="text-3xl font-bold mb-6 text-gray-800">
        <h2>BLOG POST</h2>
      </div>

      {/* form */}
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md mb-8">
        <div className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border rounded-lg p-2 h-10 focus:outline-none focus:ring-0 focus:border-blue-500"
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border rounded-lg p-2 h-20 focus:outline-none focus:ring-0 focus:border-blue-500"
          />
          <div className="flex justify-center">
            <button
              onClick={handleCreate}
              className="bg-blue-500 hover:bg-blue-700 text-white px-10 py-2 rounded-lg transition"
            >
              Create Post
            </button>
          </div>
        </div>
      </div>

      {/* Show Posts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {post.map((data) => (
          <div
            key={data.id}
            className="bg-white shadow-md rounded-xl p-4 hover:shadow-xl transition"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-1">
              {data.title}
            </h2>
            <p
              style={{
                display: "-webkit-box",
                WebkitLineClamp: "2",
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
              className="text-gray-600 mb-8"
            >
              {data.description}
            </p>
            <button
              onClick={() => handleDelete(data.id)}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm transition"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogpost;
