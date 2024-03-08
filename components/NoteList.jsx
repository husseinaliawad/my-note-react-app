import PropTypes from 'prop-types';
import Note from './Note';

function NoteList({ notes, onDeleteNote }) {
  return (
    <div>
      {notes.map((note) => (
        <Note key={note.id} note={note} onDeleteNote={onDeleteNote} />
      ))}
    </div>
  );
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteNote: PropTypes.func.isRequired,
};

export default NoteList;