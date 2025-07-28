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
        Hakkımızda
      </h2>
    </div>

    <div class="flex flex-row justify-center gap-4 mb-10">
      <PPanelMenu :model="items" class="w-full max-w-xs mx-auto p-6" />

      <div class="flex flex-col gap-4 max-w-[90%] pb-10">
        <div class="max-w-3xl mx-auto p-6">
          <h1 class="text-3xl font-bold mb-4">Hakkımızda</h1>
          <PDivider />
          <div class="flex flex-col gap-4">
            <p class="text-[color:var(--light-text)] mb-4">
              2021 yılında Yenilenebilir enerji kaynaklarından güneş enerjisinden faydalanarak
              profesyonel ekibimiz ile EPC firması olarak çağrı mektubu, projelendirme kurulum ve
              bakım hizmetlerimiz ile hizmet vermekteyiz. Özellikle 2024 başlarından beri ortaya
              çıkan kapasite problemini firmalara ve meskenlere tükettiğin kadar üret mantığıyla
              elektrik maliyetlerini düşürerek ekonomik çözümler sunmaya devam ediyoruz.
            </p>
            <p class="text-[color:var(--light-text)]">
              Tarımsal sulama sistemleri için akılcı çözümler sunarak küçük büyük demeden bütün
              çiftçilerimiz ve üreticilerimize yeraltı sularından elektriğie para ödemeden
              faydalanmaları konusunda tüm hizmetleri sunmaktayız. Insera, yenilikçi çözümler sunan
              bir teknoloji şirketidir. Müşterilerimize en iyi hizmeti sunmak için sürekli olarak
              kendimizi geliştiriyoruz.
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
    style: {
      'background-color': 'var(--p-panelmenu-item-focus-background)',
    },
    disabled: true, // Disable the current item to indicate it's selected
  },
  { label: 'Vizyonumuz', command: () => router.push('/vizyonumuz') },
  { label: 'Misyonumuz', command: () => router.push('/misyonumuz') },
  { label: 'Hizmetlerimiz', command: () => router.push('/hizmetlerimiz') },
]
</script>
