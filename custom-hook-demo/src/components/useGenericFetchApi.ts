
import { useEffect, useState } from "react";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

const useGenericFetchApi = <T,>(url: string, delayMs = 500) => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let isMounted = true;

    const timer = setTimeout(() => {
      fetch(`${baseUrl}${url}`)
        .then(response => response.json())
        .then((data: T[]) => {
          if (isMounted) setData(data)
        })
        .finally(() => {
          if (isMounted)
            setLoading(false);
        });
    }, delayMs);

    return () => {
      isMounted = false;
      clearTimeout(timer);
    }

  }, [url, delayMs]);


  return { data, loading }
}

export default useGenericFetchApi


// const delay = (ms: number) => {
//   new Promise(resolve => setTimeout(resolve, ms))
// }

// useEffect(() => {
//   const fetchData = async () => {
//     await delay(10000);
//     const response = await fetch(`${baseUrl}/Crud/Customers`);
//     const data = await response.json();
//     setData(data);
//     setLoading(false);
//   }
//   fetchData();
// }, []);