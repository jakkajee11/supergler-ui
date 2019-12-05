import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
// import { ExceptionHandler, HttpResponseHandler } from '../utils';
// import { ApiConfig } from '../constants/Constants';
// import AuthService from '../services/authService.jsx';

axios.defaults.baseURL = "localhost:3000/api";
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

//const authService = new AuthService();

export const httpRequester = {
  async get(url: string, options?: AxiosRequestConfig) {
    let config = await this.getConfig();
    // if (options) {
    //   config = {
    //     ...config,
    //     options
    //   };
    // }
    try {
      const response = await axios.get(url, config);
      return await this.createResponse(response);
    } catch (error) {
      return error; //this.handlerRequestError(error);
    }
  },

  //   async export(url, options) {
  //     let config = await this.getConfig();
  //     if (options) {
  //       config = {
  //         ...config,
  //         options
  //       };
  //     }
  //     try {
  //       // need to return with header
  //       return await axios.get(url, { responseType: 'arraybuffer', ...config});
  //     } catch (error) {
  //       return this.handlerRequestError(error);
  //     }
  //   },

  //   async post(url, payload) {
  //     const config = await this.getConfig();
  //     try {
  //       const response = await axios.post(url, payload, config);
  //       return await HttpResponseHandler.createResponse(response);
  //     } catch (error) {
  //       return this.handlerRequestError(error);
  //     }
  //   },

  //   async put(url, payload) {
  //     const config = await this.getConfig();
  //     try {
  //       const response = await axios.put(url, payload, config);
  //       return await HttpResponseHandler.createResponse(response);
  //     } catch (error) {
  //       return this.handlerRequestError(error);
  //     }
  //   },

  //   async delete(url) {
  //     const config = await this.getConfig();
  //     try {
  //       const response = await axios.delete(url, config);
  //       return await HttpResponseHandler.createResponse(response);
  //     } catch (error) {
  //       return this.handlerRequestError(error);
  //     }
  //   },

  async getConfig() {
    //const user = await authService.getUser();
    //console.log(['getConfig.user', user]);
    let config: AxiosRequestConfig = {
      headers: {
        Authorization: ""
      },
      cancelToken: source.token
    };

    // if (user) {
    //   config.headers = {
    //     Authorization: `${user.token_type} ${user.access_token}`
    //   };
    // }

    return config;
  },

  //   handlerRequestError(error) {
  //     console.log(['RequestError', error]);
  //     if (axios.isCancel(error)) {
  //       console.log('Request canceled', error);
  //     } else {
  //       console.log(error);
  //     }

  //     return ExceptionHandler.handleHttpError(error.response);
  //   },

  async createResponse(response: AxiosResponse) {
    console.log(["createResponse", response]);
    const { status, data, statusText } = response;
    let results = {
      status: status,
      data:
        data && data.rows
          ? {
              lastUpdated: data && data.lastUpdated ? data.lastUpdated : "",
              rows: data && data.rows ? data.rows : [],
              totalRows: data && data.totalRows ? data.totalRows : 0
            }
          : data,
      statusText: statusText || "",
      errorMessage: data && data.ExceptionMessage ? data.ExceptionMessage : ""
    };
    return results;
  },

  async createErrorResponse(error: AxiosResponse) {
    const { status, data, statusText } = error;
    console.log(["createErrorResponse", error, status, data, statusText]);
    return {
      status: status,
      lastModified: "",
      rows: [],
      totalRows: 0,
      statusText: statusText || "",
      errorMessage: data && data.ExceptionMessage ? data.ExceptionMessage : ""
    };
  },

  cancelToken(message?: string) {
    // cancel the request (the message parameter is optional)
    source.cancel(message || "Operation canceled by the user.");
  }
};
