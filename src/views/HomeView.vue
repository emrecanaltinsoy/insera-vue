<template>
  <div class="flex flex-col items-center">
    <div class="relative w-full">
      <img
        src="@/assets/images/home/homeImage.jpg"
        alt="homeImage"
        class="w-full mx-auto h-[calc(100vh-70px)] object-cover"
      />
      <h2
        class="absolute text-5xl font-extrabold text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        Work with us to make your life easier
      </h2>
    </div>
    <h1>{{ message }}</h1>
    <p>This is the index page content.</p>
  </div>
</template>

<script setup lang="ts">
const message = 'Welcome to the Index page!'
console.log(message)
</script>
