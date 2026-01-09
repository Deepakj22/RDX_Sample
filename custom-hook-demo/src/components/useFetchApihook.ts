import { useEffect, useState } from "react";
import type { ICustomer } from "./ICustomer";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

export function useFetchApiHook() {
    const [customers, setCustomers] = useState<ICustomer[]>([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${baseUrl}/Crud/Customers`)
            .then(response => response.json())
            .then((customers: ICustomer[]) => setCustomers(customers))
            .finally(() => setLoading(false))
    }, []);

    return { customers, loading }
}