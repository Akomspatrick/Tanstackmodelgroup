import { useQueryClient, useMutation } from '@tanstack/react-query';
import {
  TestingModeGroupCreateRequestDTO,
  TestingModeGroupResponseDTO,
} from 'ModelManagement/Types/ModelManagementInterfaces';
//import { BaseURLs, EndPoints } from 'Constants/APIEndPoints';

import { ALLQueryKeys, BaseURLs, EndPoints } from 'Constants/componentsConstants';
import NewCRUDApi from './NewCRUDApi';

export const useCreateModelTypeGroup = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: NewCRUDApi<TestingModeGroupCreateRequestDTO, TestingModeGroupResponseDTO>(
      BaseURLs.ModelManagementURL + EndPoints.MODEL_MANAGEMENT.TESTINGMODEGROUP,
    ).addData,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [ALLQueryKeys.testingModeGroupQueryCreateKey] });
    },
  });
};
