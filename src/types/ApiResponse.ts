export interface IResponseData {
  success: boolean;
  data: {
    [key: string]: any;
    error?: Error;
  };
}
