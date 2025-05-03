<template>
  <div class="flex flex-col items-center">
    <img
      src="@/assets/images/projects/projectsMain.webp"
      alt="homeImage"
      class="w-full mx-auto h-[calc(50vh)] object-cover pb-10"
    />
    <h1 class="text-4xl p-5">Our Projects</h1>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-[90%] pb-10"
    >
      <PCard v-for="project in projects" :key="project.title" class="p-5">
        <template #header>
          <div class="text-[2.5rem] text-center mb-4;">{{ project.header }}</div>
        </template>
        <template #title>{{ project.title }}</template>
        <template #content>
          <p>{{ project.description }}</p>
          <p>Additional content goes here.</p>
        </template>
      </PCard>
    </div>
  </div>
</template>
<script setup lang="ts">
const projects = [
  {
    header: 'HEADER',
    title: 'TITLE',
    description: 'DESC',
  },
  {
    header: 'HEADER',
    title: 'TITLE',
    description: 'DESC',
  },
  {
    header: 'HEADER',
    title: 'TITLE',
    description: 'DESC',
  },
  {
    header: 'HEADER',
    title: 'TITLE',
    description: 'DESC',
  },
  {
    header: 'HEADER',
    title: 'TITLE',
    description: 'DESC',
  },
  {
    header: 'HEADER',
    title: 'TITLE',
    description: 'DESC',
  },
  {
    header: 'HEADER',
    title: 'TITLE',
    description: 'DESC',
  },
  {
    header: 'HEADER',
    title: 'TITLE',
    description: 'DESC',
  },
]
</script>
<style scoped></style>
