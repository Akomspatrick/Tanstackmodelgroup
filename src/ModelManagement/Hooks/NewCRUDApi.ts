import axios from 'axios';
import { addData, getAllData, getData, updateData, deleteData } from './BaseCRUDApi';

export interface NewCRUDApiInterface<CreateType, ResponseType> {
  addData: (data: CreateType) => Promise<CreateType | unknown>;
  getAllData: () => Promise<ResponseType[] | undefined>;
  getData: (query: string) => Promise<ResponseType>;
  updateData: (data: CreateType) => Promise<CreateType | unknown>;
  deleteData: (query: string) => Promise<unknown>;
}

export default function NewCRUDApi<TRequestDTO, TResponseDTO>(
  url: string,
): NewCRUDApiInterface<TRequestDTO, TResponseDTO> {
  const axiosInstance = axios.create({ baseURL: url });
  return {
    addData: (data: TRequestDTO) => addData(axiosInstance, data),
    getAllData: () => getAllData<TResponseDTO>(axiosInstance),
    getData: (query: string) => getData<TResponseDTO>(axiosInstance, query),
    updateData: (data: TRequestDTO) => updateData(axiosInstance, data),
    deleteData: (query: string) => deleteData(axiosInstance, query),
  };
}
