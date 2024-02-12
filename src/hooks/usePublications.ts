import { useQuery } from 'react-query';
import PublicationService from '../services/publications';

export const usePublications = () => {
    return useQuery('publications', PublicationService.getPublications);
}
export default usePublications;