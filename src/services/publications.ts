import appAxios from "./appAxios";
import {  Publication, PublicationForCreation } from "../utils/types";

export const getPublications = async (): Promise<Publication[]> => {
    return appAxios.get(`/publications/`).then(
        (response) => {
            const data = response.data;
            console.log(data);

            return data;
        });
}
export const getPublicationById = async (id: string): Promise<Publication> => {
    return appAxios.get(`/publications/${id}`).then(
        (response) => {
            const data = response.data;
            console.log(data);
            return data;
        });
};

export const addPublication = async (publication: PublicationForCreation): Promise<PublicationForCreation> => {
    return appAxios.post('/publications/', publication).then(
        (response) => {
            const data = response.data;
            console.log("BOOK ADDED IS ", data);

            return data;
        });
}

export const updatePublication = async (data: Publication) => {
    return appAxios
        .put(`/publications/${data.id}`, data)
        .then((response) => response.data);
};

export const deletePublication = async (id: string) => {
    return appAxios.delete(`publications/${id}`).then(response => {
        const { data } = response;
        return data;
    });
};

export const searchPublicationsByTitle = async (title: string) => {
    const response = await appAxios.get(`/api/publications/search?title=${title}`);
    return response.data;
  };

//export default { getPublications,getPublicationById, addPublication, updatePublication, deletePublication,searchPublicationsByTitle };