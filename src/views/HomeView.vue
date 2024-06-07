<template>
  <div class="h-full w-full bg-[#1F1F1F] flex flex-col justify-center">
    <div
      class="bg-[url('../../public/home.jpg')] bg-cover bg-scroll bg-no-repeat flex justify-center"
    >
      <div
        class="flex justify-center items-center w-[90%] flex-col text-center py-64"
      >
        <h1 class="text-white font-semibold text-6xl">
          Lorem ipsum dolor sit, amet consectetur.
        </h1>
        <h3 class="text-white font-medium text-3xl pt-10">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea suscipit
          provident necessitatibus maiores inventore cumque vero quam repellat.
        </h3>
        <router-link
          to="/challenges"
          class="text-white mt-10 text-xl bg-primary hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-4 w-[20%] py-2 text-center"
        >
          Get Started
        </router-link>
      </div>
    </div>
    <div class="flex flex-col text-white justify-center items-center">
      <h1 class="font-semibold text-6xl">Lorem ipsum dolor sit</h1>
      <h3 class="font-medium text-xl">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea suscipit
        provident necessitatibus maiores
      </h3>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped></style>
