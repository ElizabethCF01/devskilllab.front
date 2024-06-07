<template>
  <div>
    <nav class="bg-dark-gray fixed w-full z-20 top-0 start-0">
      <div
        class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
      >
        <a
          href="https://flowbite.com/"
          class="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            class="h-8"
            alt="Flowbite Logo"
          />
          <span
            class="self-center text-2xl font-semibold whitespace-nowrap text-white"
            >DevSkillLab</span
          >
        </a>
        <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <div v-if="auth.user" class="flex items-center gap-4 relative">
            <button @click="() => (showDrop = !showDrop)">
              <img
                class="w-10 h-10 rounded-full"
                :src="`https://api.multiavatar.com/${auth.user.email}.png`"
                alt=""
              />
            </button>
            <div class="font-medium text-white">
              <div>{{ auth.user.username }}</div>
              <div class="text-sm text-gray-400">{{ auth.user.email }}</div>
            </div>

            <!-- Dropdown menu -->
            <div
              :class="`z-10 divide-y divide-gray-100 rounded-lg shadow w-44 bg-zinc-800  absolute top-14 left-0 ${
                !showDrop ? 'hidden' : ''
              }`"
            >
              <ul
                class="py-2 text-sm text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >Profile</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    @click="signOut"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >Sign out</a
                  >
                </li>
              </ul>
            </div>
          </div>
          <template v-else>
            <router-link
              to="/login"
              class="text-white mr-5 bg-gray-600 hover:bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
            >
              Log In
            </router-link>
            <router-link
              to="/register"
              class="text-white bg-primary hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
            >
              Sing Up
            </router-link>
          </template>

          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul
            class="flex flex-col p-4 text-white md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0"
          >
            <li>
              <router-link
                to="/"
                class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:hover:text-primary md:p-0"
                aria-current="page"
                >Home</router-link
              >
            </li>

            <li>
              <router-link
                to="/challenges"
                class="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0"
                >Retos</router-link
              >
            </li>
            <li>
              <router-link
                to="/code"
                class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:hover:text-primary md:p-0"
                aria-current="page"
                >Proyectos</router-link
              >
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0"
                >Contact</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts" setup>
import { useAuthStore } from "@/stores/auth";
import { ref } from "vue";

const auth = useAuthStore();
const showDrop = ref(false);

const signOut = () => {
  auth.user = undefined;
};
</script>

<style scoped></style>
