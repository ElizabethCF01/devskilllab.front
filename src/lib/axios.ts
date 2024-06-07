import axios from "axios";
// import { useUserStore } from "@/stores/userStore";

const instance = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}/api/`,
});

instance.interceptors.request.use(
  async (config) => {
    let tk = "";

    // try {
    //   const userStore = useUserStore();
    //   const accessToken = userStore.userToken;
    //   if (accessToken) {
    //     config.headers.Authorization = `Bearer ${accessToken}`;
    //   }
    //   tk;
    // } catch (error) {
    //   console.error(error);
    // }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default instance;
