<template>
  <div
    class="bg-[#1F1F1F] w-full bg-[url('/nasa.jpg')] bg-cover bg-fixed bg-no-repeat h-screen py-10"
  >
    <div class="pt-20 text-center">
      <h1 class="font-semibold text-white text-4xl my-5">Retos</h1>
    </div>
    <div>
      <form class="max-w-md mx-auto">
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >Search</label
        >
        <div class="relative">
          <div
            class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
          >
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            class="block w-full p-4 ps-10 text-sm text-white border border-gray-500 rounded-lg bg-gray-500/20 back focus:ring-primary focus:border-primary"
            placeholder="Search Mockups, Logos..."
            required
          />
          <button
            type="submit"
            class="text-white absolute end-2.5 bottom-2.5 bg-primary hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>
    </div>

    <div class="flex flex-wrap gap-2 mt-14 justify-center">
      <CourseCard v-for="challenge in challenges" :challenge="challenge" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import CourseCard from "@/components/CourseCard.vue";
import { useChallenges } from "@/composables/useChallenges";
import type { Challenge } from "@/interfaces/challenge";
import { onMounted, ref, type Ref } from "vue";

const { getChallengeList } = useChallenges();
const challenges: Ref<Challenge[]> = ref([]);
const isLoading = ref(false);
onMounted(async () => {
  isLoading.value = true;
  challenges.value = await getChallengeList();
  isLoading.value = false;
});
</script>

<style scoped></style>
, ref, type Ref
