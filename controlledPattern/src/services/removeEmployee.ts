import apiClient from "../api/apiClient";

export const removeEmployee = async (id: number): Promise<void> => {
    await apiClient.delete(`/employee/${id}`);

}