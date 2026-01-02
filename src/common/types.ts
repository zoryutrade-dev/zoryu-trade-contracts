export type ISODateString = string;

export type ApiOk<T> = {
  success: true;
  data: T;
};

export type ApiErr = {
  success: false;
  error: {
    code: string;
    message: string;
  };
};

export type ApiResponse<T> = ApiOk<T> | ApiErr;

export type Pagination = {
  limit?: number;
  cursor?: string;
};
