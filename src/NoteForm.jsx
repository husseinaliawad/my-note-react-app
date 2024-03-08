import React, { useState } from 'react';

function NoteForm({ addNote }) {
  const [newNote, setNewNote] = useState('');

  const handleNoteChange = (e) => {
    setNewNote(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newNote.trim() !== '') {
      addNote(newNote);
      setNewNote('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a note"
        value={newNote}
        onChange={handleNoteChange}
      />
      <button type="submit">Add Note</button>
    </form>
  );
}

export default NoteForm;