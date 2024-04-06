import {  useQuery } from '@tanstack/react-query';
import { BaseURLs, EndPoints } from '../../../src/ConstantValues/APIEndPoints';
import { ALLQueryKeys } from '../../../src/ConstantValues/TanstackQueryConstant';
import { ProblemDetails, TestingModeGroupCreateRequestDTO, TestingModeGroupResponseDTO } from 'ModelManagement/Types/ModelManagementInterfaces';

import CRUDApi from '../../../src/Services/CRUDApi';
//https://www.youtube.com/watch?v=8K1N3fE-cDs
export const useGetTestingModeGroups = () => {
  return useQuery({
    queryKey: [ALLQueryKeys.testingModeGroupQueryGetKey],
    queryFn: CRUDApi<TestingModeGroupCreateRequestDTO, TestingModeGroupResponseDTO>(
      BaseURLs.ModelManagementURL + EndPoints.MODEL_MANAGEMENT.TESTINGMODEGROUP,
    ).getAllData,
    
  });
};

export const useGetSingleTestingModeGroup = ( id: string ) => {
  return useQuery<TestingModeGroupResponseDTO | undefined, Error>({
    queryKey: [ALLQueryKeys.testingModeGroupQueryGetSingleKey,id],
    queryFn:()=>CRUDApi<TestingModeGroupCreateRequestDTO, TestingModeGroupResponseDTO>(
      BaseURLs.ModelManagementURL + EndPoints.MODEL_MANAGEMENT.TESTINGMODEGROUP,
    ).getData(id),      
  },

  );
};

// export const useModelTypeGroupNames = () => {
//   return useQuery({
//     queryKey: ['modelgrouptypenames'],
//     queryFn: getModelTypeGroupNames,
//   });
// };

// export const useModelTypeGroupDetails1 = (ids: (string | undefined)[] | undefined) => {
//   return useQueries({
//     queries: (ids ?? []).map((id) => {
//       console.log('id===>', id);
//       return {
//         queryKey: ['modelgrouptype', id],
//         queryFn: () => getModelTypeGroup(id!),
//       };
//     }),
//   });
// };

// export const useModelTypeGroupDetails = (
//   ids: (string | undefined)[] | undefined
// ) => {
//   const res = useQueries({
//     queries: (ids ?? []).map((id) => {
//       console.log("id===>", id);
//       return {
//         queryKey: ["modelgrouptype", id],
//         queryFn: () => getModelTypeGroup(id!),
//       };
//     }),
//     combine: (result) => {
//       data: result.map((x) => x.data);
//     },
//   });
//   console.log("res===>", res);

//   return res;
// };



