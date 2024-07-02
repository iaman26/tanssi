<template>
  <div
    class="m_89ab340 mantine-AppShell-root"
    data-layout="alt"
    style="
      --app-shell-transition-duration: 200ms;
      --app-shell-transition-timing-function: ease;
    "
  >
    <CommonSidebar />
    <CommonHeader :windowWidth="appStore.windowWidth" />
    <main class="m_8983817 mantine-AppShell-main" style="padding-right: 0rem">
      <slot />
    </main>
    <UiModalConnectWallet v-if="appStore.isModal" @closeModal="closeModal" />
    <UiModalConnectWallet
      v-if="appStore.isModalConnect2"
      @closeModal="closeModal"
    />
  </div>
</template>
<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useAppStore } from '~/store/app'
const appStore = useAppStore()
const { setIsModal, setIsModalConnect2, setIsWindowWidth } = appStore
function closeModal() {
  setIsModal(false)
  setIsModalConnect2(false)
}

function updateWidth() {
  setIsWindowWidth(window?.innerWidth)
}
onMounted(() => {
  window.addEventListener('resize', updateWidth)
  updateWidth()
})

onUnmounted(() => {
  window.removeEventListener('resize', updateWidth)
})
</script>
