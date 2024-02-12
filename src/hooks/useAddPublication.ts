import { useMutation } from 'react-query';
import PublicationService from '../services/publications';
import { Publication } from '../utils/types';

export const useAddPublication = () => {
    return useMutation((publication: Publication) => PublicationService.addPublication(publication));
}
