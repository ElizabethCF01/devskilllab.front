import type { StrapiLoginResponse } from "@/interfaces/user";
import axiosClient from "@/lib/axios";
import { AxiosError } from "axios";
import { toast } from "vue3-toastify";
import { useAuthStore } from "@/stores/auth";
import { useRoute, useRouter } from "vue-router";
import type { Challenge, ChallengesResponse } from "@/interfaces/challenge";

export const useChallenges = () => {
  const authStore = useAuthStore();
  const router = useRouter();

  const getChallengeList = async () => {
    let res: Challenge[] = [];
    try {
      const response = await axiosClient.get<ChallengesResponse>(
        "challenges?populate=*"
      );
      console.log(response);
      if (response) {
        //toast.success("Welcome back !");
        console.log(response.data.data);
        res = response.data.data;
      }
    } catch (error) {
      console.log(error);
      toast.error(
        ((error as AxiosError).response?.data as any)?.error?.message ||
          "Some Error occurred try again!"
      );
    }
    return res;
  };

  return {
    getChallengeList,
  };
};
