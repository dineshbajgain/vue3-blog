<template>
  <header class="text-gray-600 bg-gray-300 shadow-lg body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z" />
        </svg>
      <span class="ml-3 text-xl">Blog</span>
    </a>
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <router-link to="/" active-class="active" class="mr-5 hover:text-red-800">Home</router-link>
      <router-link to="/posts" active-class="active" class="mr-5 hover:text-red-800">About</router-link>
      <router-link to="/posts" active-class="active" class="mr-5 hover:text-red-800">Blog</router-link>
      <router-link to="/posts" active-class="active" class="mr-5 hover:text-red-800">Contact Us</router-link>
    </nav>

  </div>
</header>
</template>

<script>
export default {

}
</script>

<style>
.active{
    color: blue;
}
</style>