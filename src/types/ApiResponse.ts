export interface ApiResponse {
  success: boolean;
  data: {
    [key: string]: any;
    error?: Error;
    now?: Date;
  };
}
