<template>
  <Html lang="en-us">
    <Body>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>
<script setup>
import { onMounted } from 'vue'

onMounted(async () => {
  const wow = await import('wow.js')
  new wow.default().init()
})
</script>
