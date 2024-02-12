import { useQuery } from 'react-query';
import { searchPublicationsByTitle } from '../services/publications';

export const useSearchPublications = (title: string) => {
  return useQuery(['searchPublications', title], () => searchPublicationsByTitle(title), {
    enabled: !!title,
  });
};
