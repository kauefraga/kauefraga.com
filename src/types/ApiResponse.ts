export interface IApiResponse {
  success: boolean;
  data: {
    [key: string]: any;
    error?: Error;
    now?: Date;
  };
}
