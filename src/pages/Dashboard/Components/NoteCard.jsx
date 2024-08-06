import React, { useState } from "react";

const NoteCard = ({ onPreview, onUpdate, onDelete, note }) => {
  const [comments, setComments] = useState(note.comments || []);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      const updatedComments = [
        ...comments,
        {
          id: Date.now(),
          text: newComment,
          createdAt: new Date().toLocaleString(),
        },
      ];
      setComments(updatedComments);
      setNewComment("");
      // Optionally, update the note with the new comment list
      // onUpdate({ ...note, comments: updatedComments });
    }
  };

  const handleDeleteComment = (commentId) => {
    const updatedComments = comments.filter(
      (comment) => comment.id !== commentId
    );
    setComments(updatedComments);
    // Optionally, update the note with the updated comment list
    // onUpdate({ ...note, comments: updatedComments });
  };

  return (
    <div className="note-card">
      <div className="note-card-wrapper">
        {note?.image && (
          <div className="card-image">
            <img src={note.image} alt="" />
          </div>
        )}
        <h2 className="card-title" onClick={() => onPreview(note)}>
          {note?.title}
        </h2>
        <div className="card-body">
          <p>{note?.desc}</p>
        </div>
        <span className="card-details" onClick={() => onPreview(note)}>
          read more
        </span>
        <div className="card-footer">
          <span className="card-timeline">{note?.createdAt}</span>
          <div className="card-actions">
            <div className="action-item" onClick={() => onUpdate(note)}>
              <i className="fa-solid fa-pen-to-square edit"></i>
            </div>
            <div className="action-item" onClick={() => onDelete(note?.id)}>
              <i className="fa-solid fa-trash-can delete"></i>
            </div>
          </div>
        </div>
        <div className="comments-section">
          <h3>Comments</h3>
          <form onSubmit={handleAddComment}>
            <input
              type="text"
              placeholder="Add a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button type="submit">Save</button>
          </form>
          <div className="comments-list">
            {comments.map((comment) => (
              <div key={comment.id} className="comment-item">
                <p>{comment.text}</p>
                <span className="comment-timeline">{comment.createdAt}</span>
                <button
                  className="delete-comment"
                  onClick={() => handleDeleteComment(comment.id)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteCard