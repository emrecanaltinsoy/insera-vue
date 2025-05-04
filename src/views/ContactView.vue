<template>
  <div class="flex flex-col items-center">
    <div class="relative w-full">
      <img
        src="@/assets/images/contact/contactMain.jpeg"
        alt="contactImage"
        class="w-full mx-auto h-[calc(50vh)] object-cover pb-10"
      />
      <h2
        class="absolute text-5xl font-extrabold text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        Contact us
      </h2>
    </div>

    <h1 class="text-4xl p-5">Contact us</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
      <div class="flex flex-col max-w-[90%] pb-10 gap-4">
        <p class="text-[color:var(--light-text)]">
          If you have any questions or inquiries, please feel free to reach out to us.
        </p>
        <PInputText v-model="name" label="Name" placeholder="Enter your name" class="w-full mb-4" />
        <PInputText
          v-model="email"
          label="Email"
          placeholder="Enter your email"
          class="w-full mb-4"
        />
        <PInputText
          v-model="telephone"
          label="Telephone"
          placeholder="Enter your telephone"
          class="w-full mb-4"
        />
        <PInputText
          v-model="message"
          label="Message"
          placeholder="Enter your message"
          class="w-full mb-4"
        />
        <PButton @click="submitForm" class="mt-4 p-2 bg-blue-500 text-white rounded"
          >Submit</PButton
        >
      </div>
      <div class="flex flex-col max-w-[90%] pb-10 gap-4">
        <PCard class="w-full">
          <template #header>
            <div class="text-[2.5rem] text-center mb-4;">Email</div>
          </template>
          <template #content>
            <p class="text-[color:var(--light-text)]">
              Email:
              <a href="mailto:info@insera.com" class="text-blue-500">info@insera.com</a>
            </p>
          </template>
        </PCard>
        <PCard class="w-full">
          <template #header>
            <div class="text-[2.5rem] text-center mb-4;">Telephone</div>
          </template>
          <template #content>
            <p class="text-[color:var(--light-text)]">
              Telephone:
              <a href="tel:+1234567890" class="text-blue-500">+1234567890</a>
            </p>
          </template>
        </PCard>
        <PCard class="w-full">
          <template #header>
            <div class="text-[2.5rem] text-center mb-4;">Address</div>
          </template>
          <template #content>
            <p class="text-[color:var(--light-text)]">
              Address:
              <span class="text-blue-500">123 Main St, City, Country</span>
            </p>
          </template>
        </PCard>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const telephone = ref('')
const message = ref('')
const submitForm = () => {
  // Handle form submission logic here
  console.log('Form submitted with:', {
    name: name.value,
    email: email.value,
    telephone: telephone.value,
    message: message.value,
  })
}
</script>
<style scoped></style>
