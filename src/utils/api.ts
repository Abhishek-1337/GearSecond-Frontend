import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000/api/v1",
  timeout: 10000,
});

export const postContent = async (data) => {
  try {
    const res = await apiClient.post("/content", data);
    console.log(res);   
  } catch (ex) {
    return {
      err: true,
      errorMsg: ex,
    };
  }
};
