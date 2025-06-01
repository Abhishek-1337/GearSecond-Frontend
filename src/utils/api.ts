import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000/api/v1",
  timeout: 10000,
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if(token){
    config.headers.Authorization = `Bearer ${token}`
  }

  return config;
}, (err) => Promise.reject(err));

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


export const registerUser = async (data) => {
  try{
    const res = await apiClient.post("user/signup", data);
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
