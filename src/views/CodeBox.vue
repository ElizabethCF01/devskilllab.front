<template>
    <div class="h-screen w-full bg-[#1a1919] flex flex-col justify-center ">
        <div
            class="h-screen bg-[url('/codeProjects.jpg')] bg-center bg-cover bg-scroll bg-no-repeat flex justify-center">
            <div class="h-screen w-full bg-black/70  flex justify-center items-center flex-col text-center py-64">
                <h1 class="text-white font-semibold text-4xl">
                    Lorem ipsum dolor sit, amet consectetur.
                </h1>
                <h3 class="text-white font-medium text-2xl pt-10">
                    You don't have any code project yet, let's start one!
                </h3>
                <router-link to="/codeplayground"
                    class="text-white mt-10 text-xl bg-primary hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-4 w-[20%] py-2 text-center">
                    Start a new Project
                </router-link>
            </div>
        </div>

    </div>
</template>

<script lang="ts" setup></script>

<style scoped></style>
