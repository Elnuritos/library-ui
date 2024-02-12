import { useMutation } from 'react-query';
import PublicationService from '../services/publications';

export const useDeletePublication = () => {
    return useMutation((id: string) => PublicationService.deletePublication(id));
}
