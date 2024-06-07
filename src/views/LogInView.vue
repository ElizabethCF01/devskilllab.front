<template>
  <div
    class="w-full bg-[url('../../public/login.jpg')] bg-cover bg-fixed bg-no-repeat h-screen flex justify-center items-center">
    <div
      class="w-full max-w-md p-4 bg-white/10 border border-gray-200/30 rounded-lg shadow sm:p-6 md:p-8 backdrop-blur-sm">
      <form class="space-y-6" @submit.prevent="handleSubmit">
        <h5 class="text-3xl font-bold text-white text-center">{{ route.name == 'login' ? "Sign in" : "Sign up" }}</h5>
        <div v-if="route.name != 'login'">
          <label for="username" class="block mb-2 text-sm font-medium text-gray-100 dark:text-white">Username</label>
          <input type="text" name="username" id="username" v-model="username"
            class="bg-gray-50/20 border border-gray-300 text-gray-50 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-100"
            placeholder="jhon" :required="route.name != 'login'" />
        </div>
        <div>
          <label for="email" class="block mb-2 text-sm font-medium text-gray-100 dark:text-white">Your email</label>
          <input type="email" name="email" id="email" v-model="email"
            class="bg-gray-50/20 border border-gray-300 text-gray-50 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-100"
            placeholder="name@company.com" required />
        </div>
        <div>
          <label for="password" class="block mb-2 text-sm font-medium text-gray-100 dark:text-white">Your
            password</label>
          <input type="password" name="password" id="password" placeholder="password" v-model="password"
            class="bg-gray-50/20 border border-gray-300 text-gray-50 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-100"
            required />
        </div>

        <div class="flex items-start">
          <div class="flex items-start">
            <div class="flex items-center h-5">
              <input id="remember" type="checkbox" value=""
                class="w-4 h-4 border border-gray-300 rounded bg-gray-50/20 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 " />
            </div>
            <label for="remember" class="ms-2 text-sm font-medium text-gray-100 dark:text-gray-300">Remember me</label>
          </div>
          <a v-if="route.name == 'login'" href="#" class="ms-auto text-sm hover:underline text-gray-200">Lost
            Password?</a>
        </div>
        <button type="submit"
          class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{{
            route.name == 'login' ? "Login to your account" : "Create account" }}</button>
        <div v-if="route.name == 'login'" class="text-sm font-medium text-gray-200 dark:text-gray-300">
          Not registered? <RouterLink to="/register" class="text-blue-400 hover:underline">Create account</RouterLink>
        </div>
        <div v-else class="text-sm font-medium text-gray-200 dark:text-gray-300">
          Already registerd? <RouterLink to="/login" class="text-blue-400 hover:underline">Sign in</RouterLink>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { useLogin } from '@/composables/useLogin';
import { ref } from 'vue';

const route = useRoute();
const { login, register } = useLogin()


const email = ref("")
const password = ref("")
const username = ref("")
const handleSubmit = async () => {
  console.log(email.value)
  if (route.name == "login")
    await login(email.value, password.value)
  else register(username.value, email.value, password.value);
}

</script>


<style scoped></style>
