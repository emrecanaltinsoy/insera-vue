<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from '@/components/AppHeader.vue'
import WhatsAppButton from '@/components/WhatsAppButton.vue'
import { watch } from 'vue'

import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)

// import { ref, onMounted, onBeforeUnmount, computed } from 'vue'

// import { useMouse, useScroll } from '@vueuse/core'
// import { useTemplateRef } from 'vue'

// const arrivedTopState = ref(true)
// const el = useTemplateRef<HTMLElement>('el')

// const { x, y } = useMouse()

// const menuBarClass = computed(() => {
//   return arrivedTopState.value ? 'w-full bg-transparent! border-0! z-10' : 'w-full z-10' //
// })

// const handleScroll = () => {
//   const { y: scrollY } = useScroll(el)
//   arrivedTopState.value = scrollY.value === 0
//   console.log('HOMMER', scrollY.value, arrivedTopState.value)
// }

// onMounted(() => {
//   window.addEventListener('scroll', handleScroll)
// })

// onBeforeUnmount(() => {
//   window.removeEventListener('scroll', handleScroll)
// })

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
  <div ref="el" class="flex flex-col min-h-screen w-full">
    <header
      class="flex flex-row justify-between items-center w-full h-[70px] transition-[background-color] duration-[0.3s] ease-[ease] px-8 py-4"
    >
      <div>
        <h1 class="text-2xl text-[color:var(--primary-color)] m-0">Insera</h1>
      </div>

      <div>
        <AppHeader />
      </div>

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

    <WhatsAppButton />
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
