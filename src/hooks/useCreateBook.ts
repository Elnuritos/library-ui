import { useMutation, useQueryClient } from 'react-query';
import { BookService } from '../services';
import { Book } from '../utils/types';

const useCreateBook = () => {
    const queryClient = useQueryClient();
    return useMutation((data: Book) => BookService.addBook(data), {
        onSuccess: () => {
            queryClient.invalidateQueries('books');
        },
    });
};

export default useCreateBook;