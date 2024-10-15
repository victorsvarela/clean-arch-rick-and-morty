export type HttpResponse<TData = any> = {
  data: TData;
};

export type HttpMethod = "get" | "post" | "put" | "delete";

export type ParamsHttp = {
  method: HttpMethod;
  url: string;
  body?: any;
};

export interface IHttpClient<TData = any> {
  request: (params: IHttpClient.Params) => Promise<HttpResponse<TData>>;
}

export namespace IHttpClient {
  export type Params = ParamsHttp;
}
