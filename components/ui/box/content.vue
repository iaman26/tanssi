<template>
  <div
    class="m_89d60db1 mantine-Tabs-root"
    data-variant="pills"
    data-orientation="vertical"
    data-placement="left"
    id="mantine-1vwa68d9d"
    style="
      --tabs-radius: var(--mantine-radius-default);
      --tabs-color: var(--mantine-color-dark-7);
      margin-top: var(--mantine-spacing-xl);
      padding: 0rem;
      width: 100%;
    "
  >
    <UiBoxTab />
    <div
      class="m_b0c91715 mantine-Tabs-panel"
      data-orientation="vertical"
      role="tabpanel"
      id="mantine-1vwa68d9d-panel-Evm"
      aria-labelledby="mantine-1vwa68d9d-tab-Evm"
      style="position: relative"
    >
      <form>
        <div
          class="m_6d731127 mantine-Stack-root"
          style="
            --stack-gap: var(--mantine-spacing-xs);
            --stack-align: stretch;
            --stack-justify: flex-start;
          "
        >
          <template v-if="appStore.isTabsBox === 1">
            <UiBoxFormAppchainDetails />
            <UiBoxFormGasToken />
            <UiBoxFormAccount />
            <UiBoxFormContracts />
          </template>
          <template v-else-if="appStore.isTabsBox === 2">
            <UiBoxFormAppchainDetails />
            <UiBoxFormGasToken />
            <UiBoxFormAccount />
          </template>
          <div
            class="m_4081bf90 mantine-Group-root"
            style="
              --group-gap: var(--mantine-spacing-md);
              --group-align: start;
              --group-justify: space-between;
              --group-wrap: wrap;
            "
          >
            <button
              class="mantine-focus-auto mantine-active mantine-Button-root m_87cf2631 mantine-UnstyledButton-root"
              data-variant="light"
              data-size="md"
              data-with-left-section="true"
              type="button"
              style="
                color: var(--mantine-color-white);
                opacity: 1;
                --button-height: var(--button-height-md);
                --button-padding-x: var(--button-padding-x-md);
                --button-fz: var(--mantine-font-size-md);
                --button-bg: var(--mantine-color-tanssiTeal-light);
                --button-hover: var(--mantine-color-tanssiTeal-light-hover);
                --button-color: var(--mantine-color-tanssiTeal-light-color);
                --button-bd: calc(0.0625rem * var(--mantine-scale)) solid
                  transparent;
                font-weight: 500;
              "
            >
              <span class="m_80f1301b mantine-Button-inner"
                ><span
                  class="m_a74036a mantine-Button-section"
                  data-position="left"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="tabler-icon tabler-icon-arrow-left"
                  >
                    <path d="M5 12l14 0"></path>
                    <path d="M5 12l6 6"></path>
                    <path d="M5 12l6 -6"></path></svg></span
                ><span class="m_811560b9 mantine-Button-label">Back</span></span
              ></button
            ><button
              class="mantine-focus-auto ActionButton_button__aljz0 mantine-Button-root m_87cf2631 mantine-UnstyledButton-root"
              data-variant="light"
              data-size="md"
              data-disabled="true"
              data-with-right-section="true"
              type="button"
              disabled=""
              style="
                color: var(--mantine-color-white);
                opacity: 0.5;
                --button-height: var(--button-height-md);
                --button-padding-x: var(--button-padding-x-md);
                --button-fz: var(--mantine-font-size-md);
                --button-bg: var(--mantine-color-tanssiTeal-light);
                --button-hover: var(--mantine-color-tanssiTeal-light-hover);
                --button-color: var(--mantine-color-tanssiTeal-light-color);
                --button-bd: calc(0.0625rem * var(--mantine-scale)) solid
                  transparent;
                font-weight: 500;
                min-width: calc(7.75rem * var(--mantine-scale));
              "
            >
              <span class="m_80f1301b mantine-Button-inner"
                ><span class="m_811560b9 mantine-Button-label">Continue</span
                ><span
                  class="m_a74036a mantine-Button-section"
                  data-position="right"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="tabler-icon tabler-icon-arrow-right"
                  >
                    <path d="M5 12l14 0"></path>
                    <path d="M13 18l6 -6"></path>
                    <path d="M13 6l6 6"></path></svg></span
              ></span>
            </button>
          </div>
        </div>
      </form>
    </div>
    <div
      class="m_b0c91715 mantine-Tabs-panel"
      data-orientation="vertical"
      role="tabpanel"
      id="mantine-1vwa68d9d-panel-Substrate"
      aria-labelledby="mantine-1vwa68d9d-tab-Substrate"
      style="position: relative; display: none"
    ></div>
    <div
      class="m_b0c91715 mantine-Tabs-panel"
      data-orientation="vertical"
      role="tabpanel"
      id="mantine-1vwa68d9d-panel-Custom"
      aria-labelledby="mantine-1vwa68d9d-tab-Custom"
      style="position: relative; display: none"
    ></div>
  </div>
</template>
<script setup>
import { useAppStore } from '~/store/app'
const appStore = useAppStore()
const { setTabBox } = appStore
</script>
