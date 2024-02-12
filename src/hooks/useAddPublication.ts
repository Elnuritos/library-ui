import { useMutation } from 'react-query';
import {addPublication} from '../services/publications';
import { PublicationForCreation } from '../utils/types';

export const useAddPublication = () => {
    return useMutation((publication: PublicationForCreation) => addPublication(publication));
}
export default useAddPublication;