<template>
  <div class="z-0 flex flex-col items-center min-h-screen">
    <img
      src="@/assets/images/home/homeImage.jpg"
      alt="homeImage"
      class="w-full mx-auto min-h-screen max-h-screen object-cover"
    />
    <h1>{{ message }}</h1>
    <p>This is the index page content.</p>
  </div>
</template>

<script setup lang="ts">
const message = 'Welcome to the Index page!'
console.log(message)
</script>
