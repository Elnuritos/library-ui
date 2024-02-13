import { useMutation } from 'react-query';
import { updatePublication } from '../services/publications';
import { Publication } from '../utils/types';
import { useNavigate } from 'react-router-dom';

export const useUpdatePublication = () => {
    const navigate = useNavigate();
    return useMutation((publication: Publication) => updatePublication(publication), {
        onSuccess: () => {

            alert('Publication updated successfully!');
            navigate('/home');
        },
        onError: () => {

            alert('Failed to update the publication.');
        },
    });
};
export default useUpdatePublication;