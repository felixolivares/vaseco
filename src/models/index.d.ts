import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum LoadingStatus {
  COMPLETE = "COMPLETE",
  PENDING = "PENDING",
  INPROGRESS = "INPROGRESS",
  CANCELED = "CANCELED"
}



type ProviderMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EmployeeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Provider {
  readonly id: string;
  readonly providerID?: string;
  readonly name?: string;
  readonly status?: LoadingStatus | keyof typeof LoadingStatus;
  readonly employees?: (Employee | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Provider, ProviderMetaData>);
  static copyOf(source: Provider, mutator: (draft: MutableModel<Provider, ProviderMetaData>) => MutableModel<Provider, ProviderMetaData> | void): Provider;
}

export declare class Employee {
  readonly id: string;
  readonly name?: string;
  readonly paternalLastname?: string;
  readonly maternalLastname?: string;
  readonly ssn?: string;
  readonly curp?: string;
  readonly salary?: number;
  readonly validity?: boolean;
  readonly Provider?: Provider;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Employee, EmployeeMetaData>);
  static copyOf(source: Employee, mutator: (draft: MutableModel<Employee, EmployeeMetaData>) => MutableModel<Employee, EmployeeMetaData> | void): Employee;
}