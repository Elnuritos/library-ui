import { useMutation } from 'react-query';
import {deletePublication} from '../services/publications';

export const useDeletePublication = () => {
    return useMutation((id: string) => deletePublication(id));
}
export default useDeletePublication;