
//import { useFetchApiHook } from './useFetchApihook';
import type { ICustomer } from './ICustomer';
import Spinner from './Spinner';
import useCustomerFetchApi from './useCustomerFetchApi';
//import useGenericFetchApi from './useGenericFetchApi';


const FetchApi :React.FC = () => {
//const {data,loading} = useGenericFetchApi<ICustomer>("/Crud/Customers",2000);
const {apiData,buffer} = useCustomerFetchApi<ICustomer>("/Crud/Customers",1500);


     if (buffer) 
      return (
    <div className='spinner-container'>
      <Spinner /> 
           <p className="text-gray-500 animate-pulse">Loading data...</p>
    </div> )

  return (
    
    <div className="flex flex-col items-center justify-center w-full p-6 font-sans">
      <div className="w-full max-w-4xl overflow-hidden rounded-xl border border-gray-200 shadow-sm">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 font-semibold text-gray-900">Id</th>
              <th className="px-6 py-4 font-semibold text-gray-900">Name</th>
              <th className="px-6 py-4 font-semibold text-gray-900">Email</th>
              <th className="px-6 py-4 font-semibold text-gray-900 text-center">City</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {apiData.map((customer, index) => (
              <tr key={customer.id ?? index} className="hover:bg-blue-50/50 transition-colors">
                <td className="px-6 py-4 font-mono text-xs text-gray-400">#{customer.id}</td>
                <td className="px-6 py-4 font-medium text-gray-900">{customer.name}</td>
                <td className="px-6 py-4">{customer.email}</td>
                <td className="px-6 py-4 text-center">
                  <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700">
                    {customer.city}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default FetchApi
