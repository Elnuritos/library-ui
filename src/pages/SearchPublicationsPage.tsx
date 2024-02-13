import { useState } from 'react';
import { useSearchPublications } from '../hooks/useSearchPublications';
import { Publication } from '../utils/types';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import usePublications from '../hooks/usePublications';



function SearchPublicationsPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    const { userType } = useSelector((state: RootState) => state.auth);

    // Используем usePublications для получения всех публикаций изначально
    const { data: allPublications, isLoading: isLoadingAllPublications } = usePublications();
    // Используем useSearchPublications только когда есть поисковый запрос
    const { data: searchResults, isLoading: isLoadingSearchResults } = useSearchPublications(searchTerm);

    // Определяем, какие данные и состояние использовать на основе наличия поискового запроса
    const isLoading = searchTerm ? isLoadingSearchResults : isLoadingAllPublications;
    //const error = searchTerm ? errorSearchResults : errorAllPublications;
    const publications = searchTerm ? searchResults : allPublications;

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


            <div className="list-group">
                {publications?.map((pub: Publication) => (
                    <div key={pub.id} className="list-group-item list-group-item-action">
                        <h5 className="mb-1">{pub.title}</h5>
                        <p className="mb-1">{pub.content}</p>
                        <button onClick={() => navigate(`/publications/${pub.id}`)} className="btn btn-primary me-2">
                            View
                        </button>
                        {userType === 'PUBLISHER' && (
                            <button onClick={(e) => {
                                e.stopPropagation(); // Предотвращаем всплывание события
                                navigate(`/update-publication/${pub.id}`);
                            }} className="btn btn-secondary">
                                Update
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SearchPublicationsPage;
