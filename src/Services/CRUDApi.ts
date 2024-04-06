import axios from 'axios';
import { baseRequest } from './BaseCRUDApi';
//import { addData, getAllData, getData, updateData, deleteData } from './BaseCRUDApi';


export interface CRUDApiInterface<CreateType, ResponseType> {
  addData: (data: CreateType) => Promise<CreateType | unknown>;
  getAllData: () => Promise<ResponseType[] | undefined>;
  getData: (query: string) => Promise<ResponseType| undefined>;
  updateData: (data: CreateType) => Promise<CreateType | unknown>;
  deleteData: (query: string) => Promise<unknown>;
}


  export default function CRUDApi<TRequestDTO, TResponseDTO>(url: string): CRUDApiInterface<TRequestDTO, TResponseDTO> {
    const axiosInstance = axios.create({ baseURL: url });
    return {
      addData: (data: TRequestDTO) => baseRequest.PostData(axiosInstance, data),
      getAllData: () => baseRequest.GetAllData<TResponseDTO>(axiosInstance),
      getData: (query: string) => baseRequest.GetData<TResponseDTO>(axiosInstance, query),
      updateData: (data: TRequestDTO) => baseRequest.PutData(axiosInstance, data),
      deleteData: (query: string) => baseRequest.DeleteData(axiosInstance, query),
    };
  }

  // addData: (data: TestingModeGroupCreateRequestDTO) => {  return baseRequest.postData(axiosInstance, data); },
  // getAllData:  () => { return  baseRequest.getAllData<TestingModeGroupResponseDTO>(axiosInstance);},
  // getData: (query: string) => {return  baseRequest.getData<TestingModeGroupResponseDTO>(axiosInstance, query);},
  // updateData: (data: TestingModeGroupCreateRequestDTO) => {return   baseRequest.putData(axiosInstance, data);},
  // deleteData: (query: string) => {return  baseRequest.deleteData(axiosInstance, query);  },
