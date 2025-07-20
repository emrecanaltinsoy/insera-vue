<template>
  <div @click="navigateToHome" class="cursor-pointer">
    <h1 class="text-2xl text-[color:var(--primary-color)] m-0">Insera</h1>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

function navigateToHome() {
  router.push('/')
}
</script>

<style scoped>
.cursor-pointer {
  transition: color 0.3s ease;
}
.cursor-pointer:hover {
  color: var(--primary-color);
}
</style>
