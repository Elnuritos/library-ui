
import { Navigate, useParams } from 'react-router-dom';
import { usePublicationById } from '../../hooks/usePublicationById';

function PublicationDetailsPage() {
    
    const { id } = useParams();
    if (!id) {
        return <Navigate to="/home" replace />;
    }
    const { data: publication, isLoading, error } = usePublicationById(id);

    if (isLoading) return <div>Loading...</div>;
    if (error) {
        const message = (error as Error).message;
        return <div>Error: {message}</div>;
    }
    if (!publication) {
        return <div>Publication not found.</div>;
    }
  return (
    <div className="container mt-5">
    <div className="card">
        <div className="card-header">
            Publication Details
        </div>
        <div className="card-body">
            <h5 className="card-title">{publication.title}</h5>
            <p className="card-text">{publication.content}</p>
        </div>
    </div>
</div>

  );
}

export default PublicationDetailsPage;
