import PropTypes from 'prop-types';

function Note({ id, title, content, onDeleteNote }) {
  const handleDelete = () => {
    onDeleteNote && onDeleteNote(id);
  };

  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

Note.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onDeleteNote: PropTypes.func.isRequired,
};

export default Note;