<template>
  <h1>Products page</h1>
  <p>This is the products page content.</p>
  <button @click="handleClick">Click me</button>
</template>
<script setup lang="ts">
const handleClick = () => {
  alert('Button clicked!')
}
</script>
<style scoped></style>
