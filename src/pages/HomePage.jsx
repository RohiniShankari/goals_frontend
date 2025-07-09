
import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { Link } from "react-router";

const HomePage = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // Fetch all notes from the backend
    const fetchNotes = async () => {
      try {
        const res = await axios.get("https://goals-backend-yx1s.onrender.com/api/notes");
        setNotes(res.data);
      } catch (error) {
        console.error("Error fetching notes:", error.message);
      }
    };

    fetchNotes();
  }, []);

  return (
    <>
      <Navbar />
      <div className="max-w-5xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-4">Capture your thoughts before they fade.</h2>

        {notes.length === 0 ? (
          <p>No notes yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {notes.map((note) => (
              <div key={note._id} className="card bg-base-100 shadow-lg border border-primary">

                <div className="card-body">
                  <h3 className="card-title">{note.title}</h3>
                  <p className="truncate">{note.content}</p>
                  <div className="card-actions justify-end">
                    <Link
                      to={`/note/${note._id}`}
                      className="btn btn-outline btn-primary btn-sm"
                    >
                      View Note
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default HomePage;
