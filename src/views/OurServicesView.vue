<template>
  <div class="flex flex-col items-center">
    <div class="relative w-full">
      <img
        src="@/assets/images/aboutus/aboutusMain.jpeg"
        alt="aboutUsImage"
        class="w-full mx-auto h-[calc(50vh)] object-cover pb-10"
      />
      <h2
        class="absolute text-5xl font-extrabold text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        Hizmetlerimiz
      </h2>
    </div>

    <div class="flex flex-row justify-center gap-4 mb-10">
      <PPanelMenu :model="items" class="w-full max-w-xs mx-auto p-6" />

      <div class="flex flex-col gap-4 max-w-[90%] pb-10">
        <div class="max-w-3xl mx-auto p-6">
          <h1 class="text-3xl font-bold mb-4">Hizmetlerimiz</h1>
          <PDivider />

          <div class="flex flex-col gap-4">
            <p class="text-[color:var(--light-text)] mb-4">
              Meskenler için dağıtım şirketine bağımlı (on grid), bağımsız (off gird) veya hibrit
              sistemler kurmak
            </p>
            <p class="text-[color:var(--light-text)] mb-4">
              Tarım üreticisine kaynak sularına elektrik tüketimiini güneşten sağlayan akılcı
              çözümler sunmak
            </p>
            <p class="text-[color:var(--light-text)] mb-4">
              Sanayi üreticilerinin elektrik maaliyetlerini düşürerek üretim maaliyetlerini azaltmak
            </p>
            <p class="text-[color:var(--light-text)] mb-4">
              Enerji verimliliği danışmanlığı ile enerji tüketim ve üretim verilerini optimize etmek
            </p>
            <p class="text-[color:var(--light-text)] mb-4">
              Güneş enerjisi santrallerinin kurulum ve bakım hizmetlerini sağlamak
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const items = [
  {
    label: 'Hakkımızda',
    command: () => router.push('/hakkimizda'),
  },
  { label: 'Vizyonumuz', command: () => router.push('/vizyonumuz') },
  { label: 'Misyonumuz', command: () => router.push('/misyonumuz') },
  { label: 'Hizmetlerimiz', command: () => router.push('/hizmetlerimiz'), disabled: true },
]
</script>
