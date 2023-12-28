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

export default { getBooks };