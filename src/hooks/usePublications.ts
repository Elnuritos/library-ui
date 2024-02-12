import { useQuery } from 'react-query';
import {getPublications} from '../services/publications';

export const usePublications = () => {
    return useQuery('publications', getPublications);
}
export default usePublications;