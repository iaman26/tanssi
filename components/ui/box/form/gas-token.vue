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
        <div
          class="m_e2f5cd4e m_46b77525 mantine-InputWrapper-root mantine-NumberInput-root"
          style="width: 100%"
        >
          <label
            class="m_8fdc1311 mantine-InputWrapper-label mantine-NumberInput-label"
            for="mantine-fe9x67be4"
            id="mantine-fe9x67be4-label"
            style="
              color: white;
              font-size: 16px;
              display: flex;
              align-items: center;
            "
            >Token Decimals
            <svg
              v-if="appStore.isTabsBox === 1"
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--mantine-color-tanssiTeal-9)"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="tabler-icon tabler-icon-check"
              style="margin-left: 3px"
            >
              <path d="M5 12l5 5l10 -10"></path>
            </svg>
            <span
              class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
              style="color: var(--mantine-color-red-9)"
              v-else-if="appStore.isTabsBox === 2"
            >
              *</span
            >
          </label>
          <div
            class="m_6c018570 mantine-Input-wrapper mantine-NumberInput-wrapper"
            data-variant="filled"
            style="
              --input-radius: var(--mantine-radius-md);
              --input-right-section-width: var(--ni-right-section-width-sm);
            "
          >
            <input
              class="m_8fb7ebe7 mantine-Input-input mantine-NumberInput-input"
              data-variant="filled"
              color="white"
              placeholder="12"
              data-path="tokenDecimals"
              aria-invalid="false"
              id="mantine-fe9x67be4"
              type="text"
              value=""
              inputmode="numeric"
              style="background-color: rgb(9, 11, 18); color: white"
            />
          </div>
        </div>
        <div
          class="m_46b77525 mantine-InputWrapper-root mantine-TextInput-root"
          style="width: 100%"
        >
          <label
            class="m_8fdc1311 mantine-InputWrapper-label mantine-TextInput-label"
            for="mantine-k9upgnek8"
            id="mantine-k9upgnek8-label"
            style="color: white; font-size: 16px"
            >Token Symbol<span
              class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
              style="color: var(--mantine-color-red-9)"
            >
              *</span
            ></label
          >
          <div
            class="m_6c018570 mantine-Input-wrapper mantine-TextInput-wrapper"
            data-variant="filled"
            style="--input-radius: var(--mantine-radius-md)"
          >
            <input
              class="m_8fb7ebe7 mantine-Input-input mantine-TextInput-input"
              data-variant="filled"
              color="white"
              placeholder="DOT"
              data-path="tokenSymbol"
              aria-invalid="false"
              id="mantine-k9upgnek8"
              value=""
              style="background-color: rgb(9, 11, 18); color: white"
            />
          </div>
        </div>
        <div
          v-if="appStore.isTabsBox === 2"
          class="m_e2f5cd4e m_46b77525 mantine-InputWrapper-root mantine-NumberInput-root"
          style="width: 100%"
        >
          <label
            class="m_8fdc1311 mantine-InputWrapper-label mantine-NumberInput-label"
            data-required="true"
            for="mantine-eh22jkpu6"
            id="mantine-eh22jkpu6-label"
            style="color: white; font-size: 16px"
            >ss58Format<span
              class="m_78a94662 mantine-InputWrapper-required mantine-NumberInput-required"
              aria-hidden="true"
            >
              *</span
            ></label
          >
          <div
            class="m_6c018570 mantine-Input-wrapper mantine-NumberInput-wrapper"
            data-variant="filled"
            style="
              --input-radius: var(--mantine-radius-md);
              --input-right-section-width: var(--ni-right-section-width-sm);
            "
          >
            <input
              class="m_8fb7ebe7 mantine-Input-input mantine-NumberInput-input"
              data-variant="filled"
              color="white"
              placeholder="42"
              data-path="ss58Format"
              aria-invalid="false"
              id="mantine-eh22jkpu6"
              type="text"
              value=""
              inputmode="numeric"
              style="background-color: rgb(9, 11, 18); color: white"
            />
          </div>
        </div>
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
      >
        <span class="m_80f1301b mantine-Button-inner"
          ><span class="m_811560b9 mantine-Button-label">Advanced</span
          ><span class="m_a74036a mantine-Button-section" data-position="right"
            ><div
              class="m_4451eb3a mantine-Center-root"
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
      <div class="" style="display: none">
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
            <div
              class="m_e2f5cd4e m_46b77525 mantine-InputWrapper-root mantine-NumberInput-root"
            >
              <label
                class="m_8fdc1311 mantine-InputWrapper-label mantine-NumberInput-label"
                for="mantine-x6679jfqv"
                id="mantine-x6679jfqv-label"
                style="color: white; font-size: 16px"
                >Min base fee (Gwei)<svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--mantine-color-tanssiTeal-9)"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="tabler-icon tabler-icon-check"
                  style="margin-left: 3px"
                >
                  <path d="M5 12l5 5l10 -10"></path>
                </svg>
              </label>
              <div
                class="m_6c018570 mantine-Input-wrapper mantine-NumberInput-wrapper"
                data-variant="filled"
                style="
                  --input-radius: var(--mantine-radius-md);
                  --input-right-section-width: var(--ni-right-section-width-sm);
                "
              >
                <input
                  class="m_8fb7ebe7 mantine-Input-input mantine-NumberInput-input"
                  data-variant="filled"
                  color="white"
                  placeholder="1"
                  data-path="baseFeePerGas"
                  aria-invalid="false"
                  id="mantine-x6679jfqv"
                  type="text"
                  value="1"
                  inputmode="numeric"
                  style="background-color: rgb(9, 11, 18); color: white"
                />
              </div>
            </div>
            <div
              class="m_e2f5cd4e m_46b77525 mantine-InputWrapper-root mantine-NumberInput-root"
            >
              <label
                class="m_8fdc1311 mantine-InputWrapper-label mantine-NumberInput-label"
                for="mantine-kh77kiahm"
                id="mantine-kh77kiahm-label"
                style="color: white; font-size: 16px"
                >Max base fee change (%)<svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--mantine-color-tanssiTeal-9)"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="tabler-icon tabler-icon-check"
                  style="margin-left: 3px"
                >
                  <path d="M5 12l5 5l10 -10"></path>
                </svg>
              </label>
              <div
                class="m_6c018570 mantine-Input-wrapper mantine-NumberInput-wrapper"
                data-variant="filled"
                style="
                  --input-radius: var(--mantine-radius-md);
                  --input-right-section-width: var(--ni-right-section-width-sm);
                "
              >
                <input
                  class="m_8fb7ebe7 mantine-Input-input mantine-NumberInput-input"
                  data-variant="filled"
                  color="white"
                  placeholder="12.5"
                  data-path="elasticity"
                  aria-invalid="false"
                  id="mantine-kh77kiahm"
                  type="text"
                  value="12.5"
                  inputmode="numeric"
                  style="background-color: rgb(9, 11, 18); color: white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </fieldset>
  </div>
</template>
<script setup>
import { useAppStore } from '~/store/app'
const appStore = useAppStore()
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
