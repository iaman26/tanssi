<template>
  <div
    class="m_89ab340 mantine-AppShell-root"
    data-layout="alt"
    style="
      --app-shell-transition-duration: 200ms;
      --app-shell-transition-timing-function: ease;
    "
  >
    <CommonHeader />
    <CommonSidebar />
    <main class="m_8983817 mantine-AppShell-main" style="padding-right: 0rem">
      <slot />
    </main>
    <UiModalConnectWallet v-if="appStore.isModal" @closeModal="closeModal" />
  </div>
</template>
<script setup>
import { useAppStore } from '~/store/app'
const appStore = useAppStore()
const { setIsModal } = appStore
function closeModal() {
  setIsModal(false)
}
</script>
