import { useQuery } from 'react-query';
import {getPublicationById} from '../services/publications';

export const usePublicationById = (id: string) => {
  return useQuery(['publication', id], () => getPublicationById(id));
};

export default usePublicationById;