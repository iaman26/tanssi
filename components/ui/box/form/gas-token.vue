<template>
  <div
    class="__m__-rorf"
    style="border-radius: 20px; background: var(--mantine-color-dark-8)"
  >
    <fieldset
      class="m_eda993d3 m_e9408a47 mantine-Fieldset-root"
      data-variant="unstyled"
      style="position: relative"
    >
      <legend
        class="m_74ca27fe m_90794832 mantine-Fieldset-legend"
        style="
          margin-bottom: 0px;
          font-size: 24px;
          font-weight: 700;
          color: white;
        "
      >
        Gas Token
      </legend>
      <p
        class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
        data-size="sm"
        style="
          --text-fz: var(--mantine-font-size-sm);
          --text-lh: var(--mantine-line-height-sm);
          margin-bottom: var(--mantine-spacing-lg);
          color: var(--mantine-color-gray-6);
          font-style: italic;
        "
      >
        Set up your token details for your chain and dynamics.
      </p>
      <div
        class="m_4081bf90 mantine-Group-root"
        style="
          --group-gap: var(--mantine-spacing-xs);
          --group-align: start;
          --group-justify: flex-start;
          --group-wrap: nowrap;
          flex-direction: row;
        "
      >
        <UiTextForm
          :title="'Token Decimals'"
          :placeholder="'18'"
          :isRequire="true"
          :maxLength="6"
          :minLength="3"
          v-model="form.tokenDecimals"
          type="number"
        />
        <UiTextForm
          :title="'Token Symbol'"
          :placeholder="'DOT'"
          :isRequire="true"
          :maxLength="10"
          :minLength="2"
          v-model="form.tokenSymbol"
        />
        <UiTextForm
          v-if="appStore.isTabsBox === 2"
          :title="'ss58Format'"
          :placeholder="'42'"
          :isRequire="true"
          :maxLength="10"
          :minLength="2"
          v-model="form.tokenSymbol"
          type="number"
        />
      </div>
      <button
        class="mantine-focus-auto mantine-active mantine-Button-root m_87cf2631 mantine-UnstyledButton-root"
        data-variant="transparent"
        data-size="md"
        data-with-right-section="true"
        type="button"
        style="
          color: var(--mantine-color-white);
          opacity: 1;
          --button-height: var(--button-height-md);
          --button-padding-x: var(--button-padding-x-md);
          --button-fz: var(--mantine-font-size-md);
          --button-bg: transparent;
          --button-hover: transparent;
          --button-color: var(--mantine-color-tanssiTeal-light-color);
          --button-bd: calc(0.0625rem * var(--mantine-scale)) solid transparent;
          margin-top: var(--mantine-spacing-md);
          padding-inline: 0rem;
          font-weight: 700;
        "
        @click="onAdvanced()"
      >
        <span class="m_80f1301b mantine-Button-inner"
          ><span class="m_811560b9 mantine-Button-label">Advanced</span
          ><span class="m_a74036a mantine-Button-section" data-position="right"
            ><div
              class="m_4451eb3a mantine-Center-root duration-100"
              :class="isAdvanced ? '-rotate-180' : 0"
              style="
                border-radius: 5px;
                padding: calc(0.125rem * var(--mantine-scale));
                background: var(--mantine-color-dark-6);
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="tabler-icon tabler-icon-chevron-down"
              >
                <path d="M6 9l6 6l6 -6"></path>
              </svg></div></span
        ></span>
      </button>
      <div
        v-if="isAdvanced"
        style="
          transition-property: transform, opacity;
          transition-duration: 100ms;
          transition-timing-function: ease;
          transform-origin: center top;
          opacity: 1;
          transform: scaleY(1);
        "
      >
        <p
          class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
          data-size="sm"
          style="
            --text-fz: var(--mantine-font-size-sm);
            --text-lh: var(--mantine-line-height-sm);
            margin-bottom: var(--mantine-spacing-lg);
            color: var(--mantine-color-gray-6);
            font-style: italic;
          "
        >
          Configure EIP-1559 dynamics
        </p>
        <div
          class="m_6d731127 mantine-Stack-root"
          style="
            --stack-gap: var(--mantine-spacing-md);
            --stack-align: stretch;
            --stack-justify: flex-start;
          "
        >
          <div
            class="m_4081bf90 mantine-Group-root"
            data-grow="true"
            style="
              --group-child-width: calc(
                50% -
                  (var(--mantine-spacing-md) - var(--mantine-spacing-md) / 2)
              );
              --group-gap: var(--mantine-spacing-md);
              --group-align: start;
              --group-justify: flex-start;
              --group-wrap: wrap;
            "
          >
            <UiTextForm
              :title="'Min base fee (Gwei)'"
              :placeholder="'1'"
              v-model="form.minBase"
            />
            <UiTextForm
              :title="'Max base fee change (%)'"
              :placeholder="'12.5'"
              v-model="form.maxBase"
            />
          </div>
        </div>
      </div>
    </fieldset>
  </div>
</template>
<script setup>
import { useAppStore } from '~/store/app'
const appStore = useAppStore()
let form = ref({
  tokenDecimals: '',
  tokenSymbol: '',
  minBase: '',
  maxBase: '',
})
let isAdvanced = ref(false)
function onAdvanced() {
  isAdvanced.value = !isAdvanced.value
}
</script>

<style scoped>
.__m__-rorf {
  padding: calc(0.9375rem * var(--mantine-scale));
}
@media (min-width: 48em) {
  .__m__-rorf {
    padding: calc(1.875rem * var(--mantine-scale));
  }
}
</style>
