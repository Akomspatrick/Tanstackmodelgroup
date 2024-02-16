import { ProblemDetails, ProblemRoot } from 'ModelManagement/Types/ModelManagementInterfaces';
import axios, { AxiosError, AxiosInstance } from 'axios';

export const addData = async <T, R>(axiosInstance: AxiosInstance, inputData: T): Promise<R | unknown> => {
  const response = await axiosInstance.post<R>(
    '',
    inputData, //{ withCredentials: true }
  );
  try {
    return await response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllData = async <T>(axiosInstance: AxiosInstance) => {
  try {
    const response = await axiosInstance.get<T[]|[]>('');
    
    const p= response.data;
    console.log(p);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getData = async <T>(axiosInstance: AxiosInstance, query: string) => {
  try {
    const response = await axiosInstance.get<T>(query);

    return response.data;
  } catch (error) {
    console.log("error in getData=======");
    if (axios.isAxiosError(error)) {

      const  probresponse :ProblemRoot  = error.response?.data// as ProblemDetails;

      throw probresponse.problemDetails;
      // Do something with this error...
    } else {

      const probresponse   = { title: "Error in BaseCRUDApi.ts file" ,  
                               status: 500, 
                               detail: "error in getData in BaseCRUDApi.ts file , Please check the console log for more details" }as ProblemDetails;
     
      throw probresponse;
      
    }
   
  }
};

export const updateData = async <T, R>(axiosInstance: AxiosInstance, inputData: T): Promise<R | unknown> => {
  const response = await axiosInstance.put<R>(
    '',
    inputData, //{ withCredentials: true }
  );
  try {
    return await response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteData = async <T>(axiosInstance: AxiosInstance, id: string): Promise<T | unknown> => {
  const response = await axiosInstance.delete<T>(id);
  try {
    return await response.data;
  } catch (error) {
    console.log(error);
  }
};
