import apiClient from "../api/apiClient";
import type { Employee } from "../entity/Employee";

export const editEmployee = async (id: number, employee: Employee): Promise<Employee> => {
    const editedEmployee = await apiClient.put<Employee>(`/employee/${id}`, employee);
    return editedEmployee.data;
}