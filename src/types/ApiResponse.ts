export interface ApiResponse {
  success: boolean;
  [key: string]: any;
  error?: Error;
  now?: Date;
}
