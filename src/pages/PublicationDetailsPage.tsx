import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPublicationById } from '../services/publications';


function PublicationDetailsPage() {
    const { id } = useParams<{ id: string }>();
    const [publication, setPublication] = useState<{ title: string; content: string } | null>(null);

    useEffect(() => {
        if (id) { 
            const fetchPublication = async () => {
                try {
                    const data = await getPublicationById(id);
                    setPublication(data);
                } catch (error) {
                    console.error("Failed to fetch publication details:", error);
                 
                }
            };
            fetchPublication();
        }
    }, [id]);

    if (!publication) return <div>Loading...</div>;

    return (
        <div className="container">
            <h1>{publication.title}</h1>
            <p>{publication.content}</p>
        </div>
    );
}

export default PublicationDetailsPage;
