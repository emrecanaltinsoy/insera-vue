<template>
  <div class="flex flex-col md:flex-row justify-center items-center gap-8">
    <div class="flex flex-col">
      <Icon />
      <p class="text-[color:var(--light-text)]">
        Insera, yenilikçi çözümler sunan bir teknoloji şirketidir.
      </p>
      <p class="text-[color:var(--p-text-color)]">
        Copyright &copy; {{ new Date().getFullYear() }} Insera. Tüm hakları saklıdır.
      </p>
    </div>
    <div class="flex flex-col">
      <h2 class="text-lg">Useful Links</h2>
      <a
        @click="router.push('/projects')"
        class="text-[color:var(--light-text)] hover:text-[color:var(--primary-color)] cursor-pointer"
        >Projects</a
      >
    </div>
    <div class="flex flex-col">
      <h2 class="text-lg">Contact</h2>
      <p class="text-[color:var(--light-text)]">
        <a href="mailto:info@insera.com">info@insera.com</a>
      </p>
      <p class="text-[color:var(--light-text)]">
        <a href="tel:+1234567890">+1 (234) 567-890</a>
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
import Icon from '@/components/Icon.vue'

const router = useRouter()
</script>

<style scoped></style>
