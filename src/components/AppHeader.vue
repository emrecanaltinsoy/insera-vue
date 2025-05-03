<template>
  <div>
    <PMenubar class="w-full bg-transparent! border-0! z-10" :model="items" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { computed, onMounted, onBeforeUnmount } from 'vue'

import { useScroll } from '@vueuse/core'

const arrivedTopState = ref(true)

const menuBarClass = computed(() => {
  return arrivedTopState.value ? 'w-full bg-transparent! border-0! z-10' : 'w-full z-10' //
})

const handleScroll = () => {
  const { y: scrollY } = useScroll(document)
  arrivedTopState.value = scrollY.value === 0
  console.log('scrollY.value', scrollY.value)
  console.log('arrivedTopState.value', arrivedTopState.value)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})

const router = useRouter()

const selectedLanguage = ref('EN')

const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-home',
    command: () => router.push('/'),
  },
  {
    label: 'Products',
    items: [
      {
        label: 'All Products',
        command: () => router.push('/products'),
        icon: 'pi pi-box',
      },
      {
        label: 'Batteries',
        command: () => router.push('/products/batteries'),
        icon: 'pi pi-bolt',
      },
    ],
    icon: 'pi pi-box',
  },
  {
    label: 'Projects',
    command: () => router.push('/projects'),
    icon: 'pi pi-search',
  },
  {
    label: 'Contact',
    icon: 'pi pi-users',
    command: () => router.push('/contact'),
  },
])
</script>
