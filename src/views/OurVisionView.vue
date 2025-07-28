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
        Vizyonumuz
      </h2>
    </div>

    <div class="flex flex-row justify-center gap-4 mb-10">
      <PPanelMenu :model="items" class="w-full max-w-xs mx-auto p-6" />

      <div class="flex flex-col gap-4 max-w-[90%] pb-10">
        <div class="max-w-3xl mx-auto p-6">
          <h1 class="text-3xl font-bold mb-4">Vizyonumuz</h1>
          <PDivider />

          <div class="flex flex-col gap-4">
            <p class="text-[color:var(--light-text)] mb-4">
              Uzman ekibimiz enerji danışmanlığı hizmeti ile nihai kullanıcıların güneş enerjisinden
              verimli bir şekilde yaralanmasını sağlayarak, bu sayede hem maliyet tasarrufu
              sağlayacak hem de sürdürebilirliğe dikkat çekerek yeşil çevre ve geleceğe katkıda
              bulunmayı hedeflemekteyiz. Başta meskenler olmak üzere ülkemizde bulunan tüm elektrik
              tüketicilerine ulaşıp en akılcı çözümleri sunmaktayız
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
  {
    label: 'Vizyonumuz',
    command: () => router.push('/vizyonumuz'),
    style: {
      'background-color': 'var(--p-panelmenu-item-focus-background)',
    },
    disabled: true, // Disable the current item to indicate it's selected
  },
  { label: 'Misyonumuz', command: () => router.push('/misyonumuz') },
  { label: 'Hizmetlerimiz', command: () => router.push('/hizmetlerimiz') },
]
</script>
