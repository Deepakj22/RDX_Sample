import apiClient from "../api/apiClient";
import type { Employee } from "../entity/Employee";

export const getEmployees = async (): Promise<Employee[]> => {
    const response = await apiClient.get<Employee[]>('/employee');
    return response.data;
}
