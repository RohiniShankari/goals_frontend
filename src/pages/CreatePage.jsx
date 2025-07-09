
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("https://goals-backend-yx1s.onrender.com/api/notes", {
        title,
        content,
      });
      toast.success("Note created successfully!");
      console.log("Note created:", res.data);
      navigate("/"); // Redirect to homepage after creation
    } catch (error) {
      console.error("Error creating note:", error.response?.data || error.message);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 shadow-lg rounded-lg bg-base-100">
      <h2 className="text-2xl font-bold mb-4">Create a New Note</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input
            type="text"
            placeholder="Enter note title"
            className="input input-bordered"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Content</span>
          </label>
          <textarea
            placeholder="Enter note content"
            className="textarea textarea-bordered h-32"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>

        <div className="form-control">
          <button className="btn btn-primary" type="submit">
            Create Note
          </button>
        </div>

      </form>
    </div>
  );
};

export default CreatePage;
