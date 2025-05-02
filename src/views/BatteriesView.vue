<template>
  <h1>Batteries page</h1>
  <p>This is the Batteries page content.</p>
  <PButton @click="handleClick">Click me</PButton>
</template>
<script setup lang="ts">
const handleClick = () => {
  alert('Button clicked!')
}
</script>
<style scoped></style>
