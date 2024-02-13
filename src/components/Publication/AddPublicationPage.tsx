import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAddPublication } from '../../hooks/useAddPublication';

function AddPublicationPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();
  const { mutateAsync } = useAddPublication({
    onSuccess: () => {
      alert('Publication added successfully!');
      navigate('/home');
    },
    onError: () => {
      alert('An error occurred while adding the publication.');
    },
  });
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    mutateAsync({ title, content });
  };

 
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Add publication</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content:</label>
          <textarea
            className="form-control"
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Send</button>
      </form>
    </div>
  );
}
export default AddPublicationPage;