import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import axios from "axios";
import Navbar from "../components/Navbar";
import toast from "react-hot-toast";

const NoteDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await axios.get(`https://goals-backend-yx1s.onrender.com/api/notes/${id}`);
        setNote(res.data);
      } catch (err) {
        console.error("Error fetching note:", err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNote();
  }, [id]);

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this note?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`https://goals-backend-yx1s.onrender.com/api/notes/${id}`);
       toast.success("Note deleted successfully!");
      navigate("/"); // Redirect to homepage
    } catch (err) {
      console.error("Error deleting note:", err.message);
    }
  };

  if (loading) return <p className="text-center mt-10">Loading note...</p>;
  if (!note) return <p className="text-center mt-10 text-red-500">Note not found.</p>;

  const createdAt = new Date(note.createdAt).toLocaleString();
  const updatedAt = new Date(note.updatedAt).toLocaleString();

  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto p-6 mt-6 bg-base-100 shadow-xl rounded-lg">
        <h1 className="text-3xl font-bold mb-4">{note.title}</h1>
        <p className="text-lg whitespace-pre-line mb-6">{note.content}</p>

        <div className="text-sm text-gray-500 border-t pt-4 mb-4">
          <p><strong>Created:</strong> {createdAt}</p>
          <p><strong>Last Updated:</strong> {updatedAt}</p>
        </div>

        <button
          onClick={handleDelete}
          className="btn btn-error btn-sm"
        >
          Delete Note
        </button>
      </div>
    </>
  );
};

export default NoteDetails;

