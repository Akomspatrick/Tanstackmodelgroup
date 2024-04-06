
import { ProblemDetails, ProblemRoot } from 'ModelManagement/Types/ModelManagementInterfaces';
import axios, {  AxiosInstance, AxiosResponse } from 'axios';

const baseURL = 'https://localhost:5001/api/';

const ProcessResponse = async <T>(response: AxiosResponse<T>) => 
{
  try { return await response;} catch (error) {ProcessError(error);}

}

const ProcessError= (error: any) => {
 
  console.log("Processing Error.....");
  if (axios.isAxiosError(error))
   {

    const  probresponse :ProblemRoot  = error.response?.data
    throw probresponse.problemDetails;
   } 
   else 
   {
    const probresponse   = { title: "Error in BaseCRUDApi.ts file" ,  
                             status: 500, 
                             detail: "error in getData in BaseCRUDApi.ts file , Please check the console log for more details" }as ProblemDetails;
   
    throw probresponse;
    
  }
}

export const baseRequest={
  getData: async<T>(axiosInstance: AxiosInstance, query: string) => 
  {
    const response = await axiosInstance.get<T>(query);   
    ProcessResponse(response);
  },
  getAllData: async<T>(axiosInstance: AxiosInstance) => 
  {
    const response = await axiosInstance.get<T[]|[]>('');  
    ProcessResponse(response);
  },
  postData: async<T,R>(axiosInstance: AxiosInstance, body: T)=>//: Promise<R | unknown> => 
  {
    const response = await axiosInstance.post<R>('', body,   );
    ProcessResponse(response);
  },
  putData: async<T,R>(axiosInstance: AxiosInstance, body: T)=>//: Promise<R | unknown> => 
  {
    const response = await axiosInstance.put<R>('', body,   );
    ProcessResponse(response);
  },
  deleteData: async<T>(axiosInstance: AxiosInstance, id: string)=>//: Promise<R | unknown> => 
  {
    const response = await axiosInstance.delete<T>(id );
    ProcessResponse(response);
  },

}