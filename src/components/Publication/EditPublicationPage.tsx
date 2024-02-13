import  { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useUpdatePublication } from '../../hooks/useUpdatePublication';
import { usePublicationById } from '../../hooks/usePublicationById';

function EditPublicationPage() {
    const { id } = useParams();
    if (!id) {
        return <Navigate to="/home" replace />;
    }

    const { data: publication, isLoading } = usePublicationById(id);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const { mutateAsync: updatePub } = useUpdatePublication();

    useEffect(() => {
        if (!isLoading && publication) {
            setTitle(publication.title);
            setContent(publication.content);
        }
    }, [publication, isLoading]);

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        updatePub({ id, title, content });
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Update publication</h2>
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
                <button type="submit" className="btn btn-success">update</button>
            </form>
        </div>
    );
}

export default EditPublicationPage;
