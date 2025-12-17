import apiRequest from "../api/apiRequest";
import type { Post } from "../api/Post";

export const getAllPosts = async (): Promise<Post[]> => {
    const response = await apiRequest.get<Post[]>("/posts");
    return response.data;
};

export const getPostById = async (id: number): Promise<Post> => {
    const response = await apiRequest.get<Post>(`/posts/${id}`);
    return response.data;
};

export const createPost = async (data: Post): Promise<Post> => {
    const response = await apiRequest.post<Post>("/posts", data);
    return response.data;
};

export const updatePost = async (id: number, data: Post): Promise<Post> => {
    const response = await apiRequest.put<Post>(`/posts/${id}`, data);
    return response.data;
};

export const deletePost = async (id: number): Promise<void> => {
    await apiRequest.delete(`/posts/${id}`);
};
