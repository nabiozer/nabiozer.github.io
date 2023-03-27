import { AxiosResponse } from "axios";

export interface IResultGeneral<T> extends AxiosResponse<T> {}

export interface sIErrorMessageItems {
  Key: string;
  Value: string;
}

export interface IResultError {
  Key: string;
  Value: string;
}

export interface IResultDatas<T> {
  Data: T[];
  Error?: IResultError;
}
export interface IResultData<T> {
  Data: T;
  Error?: IResultError;
}

export interface IResultDataPagination<T> {
  Data: T[];
  Error?: IResultError | null;
  PageSize?: number;
  PageIndex?: number;
  TotalPages?: number;
  TotalRecords?: number;
}

export interface IPaginationFilterParameters {
  field: string;
  operator: string;
  value: any;
  logic: string;
}

export interface IPaginationFilter {
  logic?: string;
  filters?: IPaginationFilterParameters[];
}

export interface IPaginationSort {
  field: string;
  direction: "desc" | "asc";
}

export interface IPaginationRequest {
  PageNumber: number;
  PageSize: number;
  Filter: IPaginationFilter;
  Sorts: IPaginationSort[];
}

export declare const defaultPaginationRequest: IPaginationRequest;


export interface ICommon {
  createdAt?:string;
  updatedAt?:string;
  _v?:number;
}