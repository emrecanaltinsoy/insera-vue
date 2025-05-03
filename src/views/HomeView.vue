<template>
  <div class="flex flex-col items-center">
    <img
      src="@/assets/images/home/homeImage.jpg"
      alt="homeImage"
      class="w-full mx-auto h-[calc(100vh-70px)] object-cover"
    />
    <h1>{{ message }}</h1>
    <p>This is the index page content.</p>
  </div>
</template>

<script setup lang="ts">
const message = 'Welcome to the Index page!'
console.log(message)
</script>
