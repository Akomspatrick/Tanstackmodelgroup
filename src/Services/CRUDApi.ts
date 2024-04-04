import axios from 'axios';
import { addData, getAllData, getData, updateData, deleteData } from './BaseCRUDApi';


export interface CRUDApiInterface<CreateType, ResponseType> {
  addData: (data: CreateType) => Promise<CreateType | unknown>;
  getAllData: () => Promise<ResponseType[] | undefined>;
  getData: (query: string) => Promise<ResponseType>;
  updateData: (data: CreateType) => Promise<CreateType | unknown>;
  deleteData: (query: string) => Promise<unknown>;
}


  export default function CRUDApi<TRequestDTO, TResponseDTO>(url: string): CRUDApiInterface<TRequestDTO, TResponseDTO> {
    const axiosInstance = axios.create({ baseURL: url });
    return {
      addData: (data: TRequestDTO) => addData(axiosInstance, data),
      getAllData: () => getAllData<TResponseDTO>(axiosInstance),
      getData: (query: string) => getData<TResponseDTO>(axiosInstance, query),
      updateData: (data: TRequestDTO) => updateData(axiosInstance, data),
      deleteData: (query: string) => deleteData(axiosInstance, query),
    };
  }