import { useEffect, useState } from "react"

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

const useCustomerFetchApi = <T,>(url: string, delayTime = 1000) => {
    const [apiData, setApiData] = useState<T[]>([]);
    const [buffer, setBuffer] = useState(true);

    useEffect(() => {
        setBuffer(true);
        let mounted = true;

        const delayTimer = setTimeout(() => {
            fetch(`${apiBaseUrl}${url}`)
                .then(reponse => reponse.json())
                .then((apiData: T[]) => {
                    if (mounted)
                        setApiData(apiData);
                })
                .finally(() => {
                    if (mounted)
                        setBuffer(false);
                });

        }, delayTime);
        return () => {
            setBuffer(false)
            clearTimeout(delayTimer);
        }
    }, [url, delayTime]);
    return { apiData, buffer }

}

export default useCustomerFetchApi
