import apiClient from "../api/apiClient";
import type { Employee } from "../entity/Employee";

export const registerEmployee = async (employee: Employee): Promise<Employee> => {
    const newEmployee = await apiClient.post<Employee>('/employee', employee);
    return newEmployee.data;
}