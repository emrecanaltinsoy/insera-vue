<template>
  <div>
    <PMenubar class="w-full bg-transparent! border-0! z-10" :model="items" />
  </div>
</template>

<style scoped>
.p-menubar-mobile {
  position: unset;
}
</style>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
// import { computed, onMounted, onBeforeUnmount } from 'vue'

// import { useScroll } from '@vueuse/core'

// const arrivedTopState = ref(true)

// const menuBarClass = computed(() => {
//   return arrivedTopState.value ? 'w-full bg-transparent! border-0! z-10' : 'w-full z-10' //
// })

// const handleScroll = () => {
//   const { y: scrollY } = useScroll(document)
//   arrivedTopState.value = scrollY.value === 0
//   console.log('scrollY.value', scrollY.value)
//   console.log('arrivedTopState.value', arrivedTopState.value)
// }

// onMounted(() => {
//   window.addEventListener('scroll', handleScroll)
// })

// onBeforeUnmount(() => {
//   window.removeEventListener('scroll', handleScroll)
// })

const router = useRouter()

// const selectedLanguage = ref('EN')

const items = ref([
  {
    label: 'Kurumsal',
    items: [
      {
        label: 'Hakkımızda',
        command: () => router.push('/hakkimizda'),
      },
      {
        label: 'Sıkça Sorulan Sorular',
        command: () => router.push('/sikca-sorulan-sorular'),
      },
    ],
  },
  {
    label: 'Ürünler',
    items: [
      {
        label: 'Tüm Ürünler',
        command: () => router.push('/urunler'),
      },
      // {
      //   label: 'Bataryalar',
      //   command: () => router.push('/urunler/bataryalar'),
      // },
    ],
  },
  {
    label: 'Projeler',
    command: () => router.push('/projeler'),
  },
  {
    label: 'İletişim',
    command: () => router.push('/iletisim'),
  },
])
</script>
