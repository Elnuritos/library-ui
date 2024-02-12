import { useState } from 'react';
import { useSearchPublications } from '../hooks/useSearchPublications';
import { Publication } from '../utils/types';
import { useNavigate } from 'react-router-dom';



function SearchPublicationsPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const { data: publications, isLoading, error } = useSearchPublications(searchTerm);
    const navigate = useNavigate();
    return (
        <div className="container mt-3">
            <input
                type="text"
                className="form-control mb-3"
                placeholder="Search publications by title..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            {isLoading && <div className="text-center">Loading...</div>}
            {typeof error === 'string' ? (
                <div className="alert alert-danger" role="alert">
                    Error occurred: {error}
                </div>
            ) : error instanceof Error ? (
                <div className="alert alert-danger" role="alert">
                    Error occurred: {error.message}
                </div>
            ) : null}


            <div className="list-group">
                {publications?.map((pub: Publication) => (
                       <a onClick={() => navigate(`/publications/${pub.id}`)} className="list-group-item list-group-item-action" key={pub.id}>
                        <h5 className="mb-1">{pub.title}</h5>
                        <p className="mb-1">{pub.content}</p>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default SearchPublicationsPage;
