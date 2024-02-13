import { useMutation } from 'react-query';
import { addPublication } from '../services/publications';
import { PublicationForCreation } from '../utils/types';

export const useAddPublication = (options = {}) => {
    return useMutation((publication: PublicationForCreation) => addPublication(publication), {
        ...options,
    });
};
