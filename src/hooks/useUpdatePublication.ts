import { useMutation } from 'react-query';
import {updatePublication} from '../services/publications';
import { Publication } from '../utils/types';

export const useUpdatePublication = () => {
    return useMutation(( publication: Publication) => updatePublication(publication));
}
export default useUpdatePublication;