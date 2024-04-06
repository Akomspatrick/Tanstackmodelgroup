import { useQueryClient, useMutation } from '@tanstack/react-query';
//import { BaseURLs, EndPoints } from 'ConstantValues/APIEndPoints';
import { BaseURLs, EndPoints } from '../../../src/ConstantValues/APIEndPoints';
//import { ALLQueryKeys } from 'ConstantValues/TanstackQueryConstant';
import { ALLQueryKeys } from '../../../src/ConstantValues/TanstackQueryConstant';
import {
  TestingModeGroupCreateRequestDTO,
  TestingModeGroupResponseDTO,
} from 'ModelManagement/Types/ModelManagementInterfaces';

import CRUDApi from '../../../src/Services/CRUDApi';

export const useCreateModelTypeGroup = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: CRUDApi<TestingModeGroupCreateRequestDTO, TestingModeGroupResponseDTO>(
      BaseURLs.ModelManagementURL + EndPoints.MODEL_MANAGEMENT.TESTINGMODEGROUP,
    ).addData,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [ALLQueryKeys.testingModeGroupQueryCreateKey] });
    },
  });
};
