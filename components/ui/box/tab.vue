<template>
  <div
    class="m_89d33d6d mantine-Tabs-list __m__-roq9"
    data-variant="pills"
    data-orientation="vertical"
    data-placement="left"
    role="tablist"
    aria-orientation="vertical"
    style="gap: 20px"
  >
    <button
      class="mantine-focus-auto m_c3381914 m_4ec4dce6 mantine-Tabs-tab ChooseTemplateStep_tab__3YdK3 m_87cf2631 mantine-UnstyledButton-root"
      data-variant="pills"
      :data-active="appStore.isTabsBox === 1"
      data-orientation="vertical"
      data-placement="left"
      type="button"
      data-testid="template-tab-Evm"
      role="tab"
      id="mantine-1vwa68d9d-tab-Evm"
      aria-selected="true"
      tabindex="0"
      aria-controls="mantine-1vwa68d9d-panel-Evm"
      style="
        background-color: rgb(255, 80, 45);
        flex-grow: 0;
        background-image: url('/images/logo_ethereum_light.svg');
        background-repeat: no-repeat;
        background-position: 85% center;
        padding-left: var(--mantine-spacing-md);
        color: var(--mantine-color-white);
        width: calc(17.8125rem * var(--mantine-scale));
      "
      @click="setTabBox(1)"
    >
      <span
        class="mantine-Tabs-tabLabel"
        style="white-space: normal; width: 100%"
        ><h3
          class="m_8a5d1357 mantine-Title-root"
          data-order="3"
          style="
            --title-fw: var(--mantine-h3-font-weight);
            --title-lh: var(--mantine-h3-line-height);
            --title-fz: calc(2.25rem * var(--mantine-scale));
          "
        >
          EVM
        </h3>
        <p
          class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
          data-size="lg"
          style="
            --text-fz: var(--mantine-font-size-lg);
            --text-lh: var(--mantine-line-height-lg);
            color: var(--mantine-color-white);
            font-weight: 300;
          "
        >
          EVM Template based on Moonbeam Codebase
        </p></span
      ></button
    ><button
      class="mantine-focus-auto m_c3381914 m_4ec4dce6 mantine-Tabs-tab ChooseTemplateStep_tab__3YdK3 m_87cf2631 mantine-UnstyledButton-root"
      data-variant="pills"
      data-orientation="vertical"
      data-placement="left"
      type="button"
      data-testid="template-tab-Substrate"
      role="tab"
      id="mantine-1vwa68d9d-tab-Substrate"
      aria-selected="false"
      tabindex="-1"
      aria-controls="mantine-1vwa68d9d-panel-Substrate"
      :data-active="appStore.isTabsBox === 2"
      style="
        background-color: rgb(72, 166, 167);
        flex-grow: 0;
        background-image: url('/images/logo_substrate_light.svg');
        background-repeat: no-repeat;
        background-position: 85% center;
        padding-left: var(--mantine-spacing-md);
        color: var(--mantine-color-white);
        width: calc(17.8125rem * var(--mantine-scale));
      "
      @click="setTabBox(2)"
    >
      <span
        class="mantine-Tabs-tabLabel"
        style="white-space: normal; width: 100%"
        ><h3
          class="m_8a5d1357 mantine-Title-root"
          data-order="3"
          style="
            --title-fw: var(--mantine-h3-font-weight);
            --title-lh: var(--mantine-h3-line-height);
            --title-fz: calc(2.25rem * var(--mantine-scale));
          "
        >
          Substrate
        </h3>
        <p
          class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
          data-size="lg"
          style="
            --text-fz: var(--mantine-font-size-lg);
            --text-lh: var(--mantine-line-height-lg);
            color: var(--mantine-color-white);
            font-weight: 300;
          "
        >
          Substrate simple template with standard specs
        </p></span
      ></button
    ><button
      class="mantine-focus-auto m_c3381914 m_4ec4dce6 mantine-Tabs-tab ChooseTemplateStep_tab__3YdK3 m_87cf2631 mantine-UnstyledButton-root"
      data-variant="pills"
      data-orientation="vertical"
      data-placement="left"
      type="button"
      data-testid="template-tab-Custom"
      role="tab"
      id="mantine-1vwa68d9d-tab-Custom"
      aria-selected="false"
      tabindex="-1"
      aria-controls="mantine-1vwa68d9d-panel-Custom"
      style="
        background-color: rgb(255, 161, 19);
        flex-grow: 0;
        background-image: url('/images//icons/json-light-icon.svg');
        background-repeat: no-repeat;
        background-position: 85% center;
        padding-left: var(--mantine-spacing-md);
        color: var(--mantine-color-white);
        width: calc(17.8125rem * var(--mantine-scale));
      "
      :data-active="appStore.isTabsBox === 3"
      @click="setTabBox(3)"
    >
      <span
        class="mantine-Tabs-tabLabel"
        style="white-space: normal; width: 100%"
        ><h3
          class="m_8a5d1357 mantine-Title-root"
          data-order="3"
          style="
            --title-fw: var(--mantine-h3-font-weight);
            --title-lh: var(--mantine-h3-line-height);
            --title-fz: calc(2.25rem * var(--mantine-scale));
          "
        >
          Custom
        </h3>
        <p
          class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
          data-size="lg"
          style="
            --text-fz: var(--mantine-font-size-lg);
            --text-lh: var(--mantine-line-height-lg);
            color: var(--mantine-color-white);
            font-weight: 300;
          "
        >
          Provide your custom raw specifications.
        </p></span
      >
    </button>
  </div>
</template>
<script setup>
import { useAppStore } from '~/store/app'
const appStore = useAppStore()
const { setTabBox } = appStore
</script>
<style scoped>
.__m__-roq9 {
  margin-bottom: calc(1.875rem * var(--mantine-scale));
}
@media (min-width: 48em) {
  .__m__-roq9 {
    margin-right: calc(1.875rem * var(--mantine-scale));
  }
}
@media (min-width: 62em) {
  .__m__-roq9 {
    margin-bottom: 0rem;
  }
}
</style>
