import { useQuery } from "react-query";
import { BookService } from "../services";

const useBooks = () => {
    return useQuery('articles', 
        () => BookService.getBooks()
    );
}

export default useBooks;