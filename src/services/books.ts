import appAxios from "./appAxios";
import { Book } from "../utils/types";

const getBooks = async (): Promise<Book[]> => {
    return appAxios.get(`/books/`).then(
        (response) => {
            const data = response.data;
            console.log(data);

            return data;
        });
}

const addBook = async (book: Book): Promise<Book> => {
    return appAxios.post('/books/', book).then(
        (response) => {
            const data = response.data;
            console.log("USER ADDED IS ", data);

            return data;
        });
}

const updateBook = async (data: Book) => {
    return appAxios
        .put(`/books/${data.isbn}`, data)
        .then((response) => response.data);
};

const deleteBook = async (id: string) => {
    return appAxios.delete(`books/${id}`).then(response => {
        const { data } = response;
        return data;
    });
};

export default { getBooks, addBook, updateBook, deleteBook };