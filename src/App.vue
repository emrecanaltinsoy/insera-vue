<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeaderPrime from '@/components/AppHeaderPrime.vue'
import { watch } from 'vue'

import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)

import { ref } from 'vue'
import { computed, onMounted, onBeforeUnmount } from 'vue'

import { useScroll, useMouse } from '@vueuse/core'

const arrivedTopState = ref(true)

const { x, y } = useMouse()
const { y: scrollY } = useScroll(document)

const menuBarClass = computed(() => {
  return scrollY.value === 0 ? 'w-full bg-transparent! border-0! z-10' : 'w-full z-10' //
})

// Watch for theme changes
watch(
  () => isDark.value,
  (newTheme) => {
    if (newTheme) {
      document.documentElement.classList.add('dark-mode')
    } else {
      document.documentElement.classList.remove('dark-mode')
    }
  },
)
</script>

<template>
  <div class="flex flex-col min-h-screen w-full">
    <header
      class="fixed top-0 left-0 flex justify-between items-center z-10 w-full transition-[background-color] duration-[0.3s] ease-[ease] px-8 py-4"
    >
      <div>
        <h1 class="text-2xl text-[color:var(--primary-color)] m-0">Insera</h1>
      </div>
      <AppHeaderPrime />

      <h3>Mouse: {{ x }} x {{ y }}, {{ scrollY }}</h3>

      <div class="flex justify-content-end align-items-center md:flex-row md:gap-2">
        <PButton @click="toggleDark()" class="p-button-rounded">
          <i :class="['pi', isDark ? 'pi-moon' : 'pi-sun']"></i>
        </PButton>
      </div>
    </header>

    <main>
      <Suspense>
        <RouterView />
      </Suspense>
    </main>
  </div>
</template>

<style>
@import 'primeicons/primeicons.css';

:root {
  --primary-color: #4f46e5;
  --primary-hover: #4338ca;
  --secondary-color: #f3f4f6;
  --text-color: #1f2937;
  --light-text: #6b7280;
  --border-color: #e5e7eb;
  --danger-color: #ef4444;
  --success-color: #10b981;
  --background-color: #f9fafb;
  --card-background: white;
}

/* Dark theme variables */
.dark-mode {
  --primary-color: #6366f1;
  --primary-hover: #818cf8;
  --secondary-color: #374151;
  --text-color: #f3f4f6;
  --light-text: #d1d5db;
  --border-color: #4b5563;
  --danger-color: #f87171;
  --success-color: #34d399;
  --background-color: #1f2937;
  --card-background: #374151;
}

/* Reset CSS */
* {
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}

body {
  font-family:
    'Inter',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    'Open Sans',
    'Helvetica Neue',
    sans-serif;
  color: var(--text-color);
  line-height: 1.6;
  background-color: var(--background-color);
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
}

/* Active menu item styling */
:deep(.active-menu-item) {
  color: var(--primary-color) !important;
  font-weight: 600 !important;
}

:deep(.p-menuitem-text) {
  transition: color 0.2s ease;
}

:deep(.p-menuitem-icon) {
  transition: color 0.2s ease;
}

:deep(.p-menuitem-link:hover .p-menuitem-text),
:deep(.p-menuitem-link:hover .p-menuitem-icon) {
  color: var(--primary-color) !important;
}
</style>
