import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000/api/v1",
  withCredentials: true,
  timeout: 10000,
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("Access");
  if(token){
    config.headers.Authorization = `Bearer ${token}`
  }

  return config;
}, (err) => Promise.reject(err));

apiClient.interceptors.response.use((response) => {
    return response;
}, async (error) => {
  const originalRequest = error.config;
  let tryReq = false;
  console.log(originalRequest);
  if(error.response.status === 403 && !tryReq){
    tryReq = true;
    await refreshToken();

        // Retry original request with new token
      return apiClient(originalRequest);
    // if(data ){
    //   return;
    // }
    // localStorage.setItem("Access", data.access_token);
    
  }
  return Promise.reject(error)  
});

export const refreshToken = async () => {
  try{
    const res = await apiClient.post("/user/refresh");
    if(res){
      localStorage.setItem("Access", res.data.access_token);
    }

  }
  catch(err){
    console.log(err);
  }
}

export const postContent = async (data) => {
  try {
    const res = await apiClient.post("/content", data);
    return res;
  } catch (ex) {
    return {
      err: true,
      errorMsg: ex,
    };
  }
};

export const loginUser = async (data) => {
  try {
    const res = await apiClient.post("user/login", data);
    return res.data;
  } catch (ex) {
    return {
      error: true,
      errorMsg: ex
    }
  }
}

export const registerUser = async (data) => {
  try{
    const res = await apiClient.post("user/signup", data);
    console.log(res);
    return res.data;
  }
  catch(ex) {
    return {
      error: true,
      errorMsg: ex
    }
  }
}

export const GetAllContent = async () => {
  try{
    const res = await apiClient.get("content/all");
    return res.data;
  }
  catch(ex){
    return {
      error: true,
      errorMsg: ex
    }
  }
}

export const FetchUser = async () => {
  try{
      const res = await apiClient.get("user/me");
      return res.data.user;
  }
  catch(ex){
    return {
      error: true,
      errorMsg: ex
    }
  }
}

export const logOut = async () => {
  try{
      await apiClient.get("user/logout");
  }
  catch(ex){
    return {
      error: true,
      errorMsg: ex
    }
  }
}
