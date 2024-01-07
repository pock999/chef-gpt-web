export interface IResponseDTO<T> {
  msg: string;
  status: number;
  data: T;
}