<template>
  <div
    class="m_4081bf90 mantine-Group-root"
    style="
      --group-gap: var(--mantine-spacing-md);
      --group-align: center;
      --group-justify: flex-start;
      --group-wrap: wrap;
      flex: 1 1 0%;
      overflow-y: auto;
      max-height: calc(100vh - var(--header-height));
    "
  >
    <div
      class="m_6d731127 mantine-Stack-root __m__-r2h"
      style="
        --stack-gap: 0rem;
        --stack-align: stretch;
        --stack-justify: flex-start;
        margin-inline: auto;
        padding-block: calc(1.25rem * var(--mantine-scale));
        width: 100%;
        min-width: calc(18.75rem * var(--mantine-scale));
        max-width: calc(68.75rem * var(--mantine-scale));
      "
    >
      <div
        class="m_6d731127 mantine-Stack-root"
        style="
          --stack-gap: var(--mantine-spacing-md);
          --stack-align: center;
          --stack-justify: flex-start;
          width: 100%;
        "
      >
        <div
          class="m_6d731127 mantine-Stack-root"
          style="
            --stack-gap: 0rem;
            --stack-align: center;
            --stack-justify: flex-start;
            padding-top: 1vh;
            width: 100%;
            height: 100%;
          "
        >
          <UiBoxFlashboxStep1 v-if="appStore.isStep === 1" />
          <UiBoxFlashboxStep2 v-if="appStore.isStep === 2" />
          <UiBoxFlashboxStep3 v-if="appStore.isStep === 3" />
          <UiBoxFlashboxStep4 v-if="appStore.isStep === 4" />
          <UiBoxFlashboxStep5 v-if="appStore.isStep === 5" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useAppStore } from '~/store/app'
definePageMeta({
  layout: 'deploy',
})
const appStore = useAppStore()
</script>
<style scoped>
.__m__-r2h {
  padding-inline: var(--mantine-spacing-md);
}
@media (min-width: 62em) {
  .__m__-r2h {
    padding-inline: var(--mantine-spacing-xl);
  }
}
</style>
