import apiClient from "../api/apiClient"
import type { Employee } from "../entity/Employee";

export const getEmployeeById = async (id: number): Promise<Employee> => {
    const response = await apiClient.get<Employee>(`/employee/${id}`);
    return response.data;

}

