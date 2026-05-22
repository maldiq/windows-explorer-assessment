import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000/api/v1",
});

export const getFolderTree = async () => {
    const response = await api.get("/folders/tree");

    return response.data;
};

export const getFolderChildren = async (folderId: string) => {
    const response = await api.get(`/folders/${folderId}/children`);

    return response.data;
};

export const searchFolders = async (keyword: string) => {
    const response = await api.get(`/folders/search/${keyword}`);

    return response.data;
};

export const renameFolder = async (id: string, name: string) => {
    const response = await api.put(`/folders/${id}`, {
        name,
    });

    return response.data;
};

export const deleteFolder = async (id: string) => {
    const response = await api.delete(`/folders/${id}`);

    return response.data;
};
