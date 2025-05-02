<template>
  <div class="fixed bottom-4 right-4">
    <Button
      icon="pi pi-whatsapp"
      class="p-button-rounded p-button-success"
      style="width: 50px; height: 50px"
      @click="openWhatsApp"
    />
  </div>
</template>

<script setup lang="ts">
import Button from "primevue/button";

import { computed, onMounted, ref } from "vue";

const openWhatsApp = () => {
  const phoneNumber = "34658633066"; // Replace with the actual phone number
  const message = "Hello! How can I help you?"; // Replace with the actual message
  const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
    message
  )}`;
  window.open(url, "_blank");
};

const isMobile = ref(false);
const handleResize = () => {
  isMobile.value = window.innerWidth <= 768;
};

onMounted(() => {
  window.addEventListener("resize", handleResize);
  isMobile.value = window.innerWidth <= 768;
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
});
</script>
