import axiosInstance from "./axiosInstance";

const serviceCall = (axiosInstance) => (
  type,
  url,
  payload = {},
  timeout = 3000,
  headers = {},
  responseType = "json"
) => {
  const request = {
    method: type.toLowerCase() || "get",
    url,
    timeout,
    responseType,
    headers,
  };

  return axiosInstance(request);
};

export default serviceCall;
