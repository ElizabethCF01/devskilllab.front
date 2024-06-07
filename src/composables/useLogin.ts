import type { StrapiLoginResponse } from "@/interfaces/user";
import axiosClient from "@/lib/axios";
import { AxiosError } from "axios";
import { toast } from "vue3-toastify";
import { useAuthStore } from "@/stores/auth";
import { useRoute, useRouter } from "vue-router";

export const useLogin = () => {
  const authStore = useAuthStore();
  const router = useRouter();

  const login = async (email: string, password: string) => {
    let response = null;
    try {
      const response = await axiosClient.post<StrapiLoginResponse>(
        "auth/local",
        {
          identifier: email,
          password: password,
        }
      );
      console.log(response);
      if (response) {
        toast.success("Welcome back !");
        router.push("/");
        authStore.user = response.data.user;
      }
    } catch (error) {
      console.log(error);
      toast.error(
        ((error as AxiosError).response?.data as any)?.error?.message ||
          "Some Error occurred try again!"
      );
    }
  };
  const register = async (
    username: string,
    email: string,
    password: string
  ) => {
    let response = null;
    try {
      const response = await axiosClient.post<StrapiLoginResponse>(
        "auth/local/register",
        {
          username: username,
          email: email,
          password: password,
        }
      );
      console.log(response);
      if (response) {
        toast.success("Successfully registerd !");
        router.push("/");
        authStore.user = response.data.user;
      }
    } catch (error) {
      console.log(error);
      toast.error(
        ((error as AxiosError).response?.data as any)?.error?.message ||
          "Some Error occurred try again!"
      );
    }
  };

  return {
    login,
    register,
  };
};
