import { ref, computed, type Ref } from "vue";
import { defineStore } from "pinia";
import type { StrapiUserResponse } from "@/interfaces/user";

export const useAuthStore = defineStore("auth", () => {
  const user: Ref<StrapiUserResponse | undefined> = ref(undefined);

  return { user };
});
