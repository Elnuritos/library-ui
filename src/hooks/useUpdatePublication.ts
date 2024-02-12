import { useMutation } from 'react-query';
import PublicationService from '../services/publications';
import { Publication } from '../utils/types';

export const useUpdatePublication = () => {
    return useMutation(( publication: Publication) => PublicationService.updatePublication(publication));
}
