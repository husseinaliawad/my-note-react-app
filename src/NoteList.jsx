import React from 'react';

function NoteList({ notes, deleteNote }) {
  return (
    <ul>
      {notes.map((note, index) => (
        <li key={index}>
          {note}
          <button onClick={() => deleteNote(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default NoteList;