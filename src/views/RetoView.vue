<template>
  <div class="min-h-screen w-full bg-[#1a1919] flex flex-col  overflow-hidden">
    <div class="  bg-center bg-cover bg-scroll bg-no-repeat flex ">
      <div class=" w-full bg-[#1a1919] justify-start flex items-center flex-col text-center py-64">

        <div class="" v-if="isLoading">
          <div role="status">
            <svg aria-hidden="true" class="inline w-8 h-8  animate-spin text-gray-600  fill-gray-300"
              viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor" />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill" />
            </svg>
            <span class="sr-only">Loading...</span>
          </div>
        </div>
        <template v-else>
          <div
            class="flex  flex-col md:max-w-2xl lg:max-w-4xl  xl:max-w-5xl  border rounded-lg shadow md:flex-row   border-zinc-700 bg-zinc-800 ">
            <img
              class="object-cover w-full rounded-t-lg h-full md:h-auto md:w-56 lg:w-96 md:rounded-none md:rounded-s-lg"
              :src="baseUrl + challenge?.attributes.Images?.data[0]?.attributes?.url ?? ''" alt="">
            <div class="flex flex-col j p-4 text-start">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-white flex items-center w-full justify-between">
                {{ challenge?.attributes.Title }} <span
                  class="text-sm font-medium me-2 px-2.5 py-0.5 rounded bg-blue-900 text-blue-300">{{
                    challenge?.attributes.Difficulty }}</span>
              </h5>
              <p class="mb-3 font-normal text-zinc-300">{{ challenge?.attributes.ShortDescription }}</p>
              <div class="mt-8 flex items-center">
                <RouterLink to="/codeplayground"
                  class="inline-flex items-center px-3 py-2 text-lg font-medium text-center text-white bg-primary rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Start Challenge
                  <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
                </RouterLink>
              </div>
            </div>
          </div>
          <div class="w-full grid grid-cols-1 lg:grid-cols-2 md:max-w-2xl lg:max-w-4xl  xl:max-w-5xl mt-10 gap-4">
            <div class="flex  flex-col  border rounded-lg shadow  border-zinc-700 bg-zinc-800 text-white">

              <div class="flex flex-col p-4 text-start">
                <h6 class="mb-2 text-2xl font-bold tracking-tight text-white">
                  Brief</h6>
                <template v-for="item in challenge?.attributes.Description">
                  <template v-if="item.type == 'paragraph'" v-for="child in (item.children as DescriptionBlockChild[])">
                    <p class="mb-3" v-if="child.type == 'text'">{{ child.text }}</p>
                  </template>
                  <ul v-else-if="item.type == 'list'" class="list-disc pl-4">
                    <li class="mb-3 " v-for="child in item.children">
                      <template v-for="grandChild in ((child as DescriptionBlock).children as DescriptionBlockChild[])">
                        <p class="mb-3" v-if="grandChild.type == 'text'"> {{ grandChild.text }}</p>
                      </template>

                    </li>
                  </ul>
                </template>
              </div>
            </div>
            <div class="flex  flex-col  border rounded-lg shadow  border-zinc-700 bg-zinc-800 ">

              <div class="flex flex-col p-4 text-start">
                <h6 class="mb-2 text-2xl font-bold tracking-tight text-white">
                  Style Guide</h6>
                <div class="text-zinc-300 marked"
                  v-html="marked.parse(challenge?.attributes?.styleGuide ?? 'No content')">
                </div>

              </div>
            </div>
          </div>

        </template>
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { useChallenges } from "@/composables/useChallenges";
import type { Challenge, DescriptionBlock, DescriptionBlockChild } from "@/interfaces/challenge";
import { onMounted, ref, type Ref } from "vue";
import { baseUrl } from "@/lib/data";
import { marked } from 'marked'
//
const route = useRoute();

const { getChallengeById } = useChallenges();
const challenge: Ref<Challenge | null> = ref(null);
const isLoading = ref(false);
onMounted(async () => {
  isLoading.value = true;
  challenge.value = await getChallengeById(route.params.id.toString());
  isLoading.value = false;
});
</script>

<style>
.marked h1 {
  font-weight: 700;
  font-size: 1.3rem;
  margin-top: 10px;
}

.marked h2 {
  font-weight: 600;
  font-size: 1.2rem;
  margin-top: 10px;
}

.marked h3 {
  font-weight: 500;
  font-size: 1.1rem;
  margin-top: 5px;
}

.marked ul {
  list-style: disc;
  padding-left: 1rem;
  margin-top: 5px;
}

.marked a {
  color: #2b6be7;
}
</style>
