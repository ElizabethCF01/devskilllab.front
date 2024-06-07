<template>
  <div
    class="max-w-sm bg-white/20 border border-gray-500 rounded-lg shadow backdrop-blur-md"
  >
    <div
      :class="`rounded-t-lg bg-cover w-full h-[240px] bg-center`"
      :style="{
        backgroundImage: `url(${
          baseUrl + challenge.attributes.Images?.data[0]?.attributes?.url
        })`,
      }"
      alt="challenge image"
    ></div>

    <div class="p-5">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-200">
        {{ challenge.attributes.Title }}
      </h5>

      <p class="mb-3 font-normal text-gray-100 dark:text-gray-400">
        {{ challenge.attributes.ShortDescription }}
      </p>
      <router-link
        to="/retoview"
        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Read more
        <svg
          class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Challenge } from "@/interfaces/challenge";
import { baseUrl } from "@/lib/data";

const props = defineProps<{
  challenge: Challenge;
}>();
</script>

<style scoped></style>
