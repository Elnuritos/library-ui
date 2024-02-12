import appAxios from "./appAxios";
import {  Publication } from "../utils/types";

const getPublications = async (): Promise<Publication[]> => {
    return appAxios.get(`/publications/`).then(
        (response) => {
            const data = response.data;
            console.log(data);

            return data;
        });
}

const addPublication = async (publication: Publication): Promise<Publication> => {
    return appAxios.post('/publications/', publication).then(
        (response) => {
            const data = response.data;
            console.log("BOOK ADDED IS ", data);

            return data;
        });
}

const updatePublication = async (data: Publication) => {
    return appAxios
        .put(`/publications/${data.id}`, data)
        .then((response) => response.data);
};

const deletePublication = async (id: string) => {
    return appAxios.delete(`publications/${id}`).then(response => {
        const { data } = response;
        return data;
    });
};

export default { getPublications, addPublication, updatePublication, deletePublication };