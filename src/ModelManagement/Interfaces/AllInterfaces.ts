//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.20.0.0 (NJsonSchema v10.9.0.0 (Newtonsoft.Json v13.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------

/* tslint:disable */
/* eslint-disable */
// ReSharper disable InconsistentNaming

export interface ModelCreateRequestDTO {
  guidId: string;
  modelName: string | null;
  modelTypesName: string | null;
}

export interface ModelGetRequestDTO {
  modelName: string | null;
}

export interface ModelResponseDTO {
  guidId: string;
  modelName: string | null;
  modelTypeName: string | null;
  modelVersions: ModelVersionResponseDTO[] | null;
}

export interface ModelTypeCreateRequestDTO {
  guidId: string;
  modelTypeName: string | null;
  modelTypeGroupName: string | null;
}

export interface ModelTypeGetRequestDTO {
  modelTypeName: string | null;
}

export interface ModelTypeGroupCreateRequestDTO {
  modelTypeGroupName: string | null;
  testingMode: string | null;
  description: string | null;
  guidId: string;
}

export interface ModelTypeGroupGetRequestDTO {
  value: any | null;
}

export interface ModelTypeGroupResponseDTO {
  modelTypeGroupName: string | undefined;
  testingMode: string | undefined;
  description: string | undefined;
  guidId: string;
}

export interface ModelTypeGroupUpdateRequestDTO {
  modelTypeGroupName: string | null;
  testingMode: string | null;
  description: string | null;
  guidId: string;
}

export interface ModelTypeResponseDTO {
  modelTypeId: string | null;
  modelTypeName: string | null;
  modelTypeGroupName: string | null;
  models: ModelResponseDTO[] | null;
}

export interface ModelTypeUpdateRequestDTO {
  modelTypeId: string;
  modelTypeName: string | null;
  modelTypeGroupName: string | null;
}

export interface ModelUpdateRequestDTO {
  modelId: string;
  modelName: string | null;
  modelTypesName: string | null;
}

export interface ModelVersionCreateRequestDTO {
  modelVersionId: number;
  versionDescription: string | null;
  modelVersionName: string | null;
  modelName: string | null;
  defaultTestingMode: string | null;
  timestamp: Date;
  userName: string | null;
  capacity: number;
  nominalOutput: number;
  nominalOutputPercentage: number;
  nonlinearityPercentage: number;
  minimumDeadLoad: number;
  vMin: number;
  nMax: number;
  safeLoad: number;
  ultimateLoad: number;
  shellMaterialName: string | null;
  alloy: boolean;
  defaultCableLength: number;
  numberOfGauges: number;
  resistance: number;
  cCNumber: string | null;
  accuracyClass: string | null;
  application: string | null;
  temperingHardnessLow: number;
  temperingHardnessHigh: number;
  nTEPCertificationId: string | null;
  nTEPCertificationTimestamp: Date;
  oIMLCertificationId: string | null;
  oIMLCertificationTimestamp: Date;
  testPointDirection: boolean;
  guidId: string;
}

export interface ModelVersionDocumentCreateRequestDTO {
  modelVersionId: number;
  modelName: string | null;
  modelVersionDocumentId: number;
  documentDescription: string | null;
  stage: string | null;
  documentDrive: string | null;
  documentPath: string | null;
  documentname: string | null;
  timestamp: Date;
  userName: string | null;
  guidId: string;
}

export interface ModelVersionDocumentGetRequestDTO {
  value: any | null;
}

export interface ModelVersionDocumentResponseDTO {
  value: any | null;
}

export interface ModelVersionDocumentUpdateRequestDTO {
  modelVersionId: number;
  modelName: string | null;
  modelVersionDocumentId: number;
  documentDescription: string | null;
  stage: string | null;
  documentDrive: string | null;
  documentPath: string | null;
  documentname: string | null;
  timestamp: Date;
  userName: string | null;
  guidId: string;
}

export interface ModelVersionGetRequestDTO {
  value: any | null;
}

export interface ModelVersionResponseDTO {
  value: any | null;
}

export interface ModelVersionUpdateRequestDTO {
  modelVersionId: number;
  versionDescription: string | null;
  modelVersionName: string | null;
  modelName: string | null;
  defaultTestingMode: string | null;
  timestamp: Date;
  userName: string | null;
  capacity: number;
  nominalOutput: number;
  nominalOutputPercentage: number;
  nonlinearityPercentage: number;
  minimumDeadLoad: number;
  vMin: number;
  nMax: number;
  safeLoad: number;
  ultimateLoad: number;
  shellMaterialName: string | null;
  alloy: boolean;
  defaultCableLength: number;
  numberOfGauges: number;
  resistance: number;
  cCNumber: string | null;
  accuracyClass: string | null;
  application: string | null;
  temperingHardnessLow: number;
  temperingHardnessHigh: number;
  nTEPCertificationId: string | null;
  nTEPCertificationTimestamp: Date;
  oIMLCertificationId: string | null;
  oIMLCertificationTimestamp: Date;
  testPointDirection: boolean;
  guidId: string;
}

export interface ProductCreateRequestDTO {
  productId: number;
  modelVersionId: number;
  modelName: string | null;
  capacity: number;
  timestamp: Date;
  stage: string | null;
  subStage: string | null;
  salesOrderId: string | null;
  cableLength: number;
  inspectionResult: number;
  defaultTestingMode: string | null;
  modelTypeGroupName: string | null;
  usedTestingMode: string | null;
  thermexPurcharseOrderNo: string | null;
  machiningPurcharseOrderNo: string | null;
  steelPurcharseOrderNo: string | null;
  batcNo: number;
  guidId: string;
}

export interface ProductGetRequestDTO {
  value: any | null;
}

export interface ProductResponseDTO {
  value: any | null;
}

export interface ProductUpdateRequestDTO {
  productId: number;
  modelVersionId: number;
  modelName: string | null;
  capacity: number;
  timestamp: Date;
  stage: string | null;
  subStage: string | null;
  salesOrderId: string | null;
  cableLength: number;
  inspectionResult: number;
  defaultTestingMode: string | null;
  modelTypeGroupName: string | null;
  usedTestingMode: string | null;
  thermexPurcharseOrderNo: string | null;
  machiningPurcharseOrderNo: string | null;
  steelPurcharseOrderNo: string | null;
  batcNo: number;
  guidId: string;
}

export interface ShellMaterialCreateRequestDTO {
  shellMaterialName: string | null;
  alloy: boolean;
  guidId: string;
}

export interface ShellMaterialGetRequestDTO {
  value: any | null;
}

export interface ShellMaterialResponseDTO {
  value: any | null;
}

export interface ShellMaterialUpdateRequestDTO {
  shellMaterialName: string | null;
  alloy: boolean;
  guidId: string;
}

export interface TestPointCreateRequestDTO {
  modelVersionId: number;
  modelName: string | null;
  capacityTestPoint: number;
  guidId: string;
}

export interface TestPointGetRequestDTO {
  value: any | null;
}

export interface TestPointResponseDTO {
  value: any | null;
}

export interface TestPointUpdateRequestDTO {
  modelVersionId: number;
  modelName: string | null;
  capacityTestPoint: number;
  guidId: string;
}
