<style scoped>
.__m__-r1l {
  padding: calc(0.9375rem * var(--mantine-scale));
}
@media (min-width: 48em) {
  .__m__-r1l {
    padding: calc(1.875rem * var(--mantine-scale));
  }
}
</style>
<template>
  <div
    class="__m__-r1l"
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
        Appchain Details
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
        Specify your Appchain details.
      </p>
      <div
        class="m_4081bf90 mantine-Group-root"
        style="
          --group-gap: var(--mantine-spacing-md);
          --group-align: center;
          --group-justify: flex-start;
          --group-wrap: wrap;
        "
      >
        <div
          class="mantine-focus-auto m_d46a4834 mantine-Dropzone-root"
          data-variant="light"
          data-idle="true"
          data-activate-on-click="true"
          role="presentation"
          tabindex="0"
          style="
            --dropzone-radius: var(--mantine-radius-default);
            --dropzone-accept-color: var(
              --mantine-color-tanssiTeal-light-color
            );
            --dropzone-accept-bg: var(--mantine-color-tanssiTeal-light);
            --dropzone-reject-color: var(--mantine-color-red-light-color);
            --dropzone-reject-bg: var(--mantine-color-red-light);
            display: none;
          "
        >
          <input
            accept="image/jpeg,image/png,image/webp"
            type="file"
            tabindex="-1"
            style="display: none"
          />
          <div class="m_b85f7144 mantine-Dropzone-inner"></div>
        </div>
        <button
          class="mantine-focus-auto m_87cf2631 mantine-UnstyledButton-root"
          type="button"
        >
          <div
            class="m_4451eb3a mantine-Center-root"
            style="
              border-radius: 20%;
              background: var(--mantine-color-dark-6);
              width: calc(4.0625rem * var(--mantine-scale));
              height: calc(4.0625rem * var(--mantine-scale));
              position: absolute;
              top: -35px;
              right: 0rem;
            "
          >
            <img
              alt=""
              width="65"
              height="65"
              decoding="async"
              data-nimg="1"
              src="data:image/svg+xml;utf8,%3Csvg%20viewBox%3D%22-1.5%20-1.5%208%208%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22hsl(120%2095%25%2045%25)%22%3E%3Crect%20x%3D%220%22%20y%3D%222%22%20width%3D%221%22%20height%3D%221%22%2F%3E%3Crect%20x%3D%220%22%20y%3D%223%22%20width%3D%221%22%20height%3D%221%22%2F%3E%3Crect%20x%3D%220%22%20y%3D%224%22%20width%3D%221%22%20height%3D%221%22%2F%3E%3Crect%20x%3D%221%22%20y%3D%220%22%20width%3D%221%22%20height%3D%221%22%2F%3E%3Crect%20x%3D%221%22%20y%3D%221%22%20width%3D%221%22%20height%3D%221%22%2F%3E%3Crect%20x%3D%221%22%20y%3D%222%22%20width%3D%221%22%20height%3D%221%22%2F%3E%3Crect%20x%3D%221%22%20y%3D%223%22%20width%3D%221%22%20height%3D%221%22%2F%3E%3Crect%20x%3D%222%22%20y%3D%221%22%20width%3D%221%22%20height%3D%221%22%2F%3E%3Crect%20x%3D%224%22%20y%3D%222%22%20width%3D%221%22%20height%3D%221%22%2F%3E%3Crect%20x%3D%224%22%20y%3D%223%22%20width%3D%221%22%20height%3D%221%22%2F%3E%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%221%22%20height%3D%221%22%2F%3E%3Crect%20x%3D%223%22%20y%3D%220%22%20width%3D%221%22%20height%3D%221%22%2F%3E%3Crect%20x%3D%223%22%20y%3D%221%22%20width%3D%221%22%20height%3D%221%22%2F%3E%3Crect%20x%3D%223%22%20y%3D%222%22%20width%3D%221%22%20height%3D%221%22%2F%3E%3Crect%20x%3D%223%22%20y%3D%223%22%20width%3D%221%22%20height%3D%221%22%2F%3E%3C%2Fsvg%3E"
              style="color: transparent; border-radius: inherit"
            />
            <div
              class=""
              style="
                border: 3px solid var(--mantine-color-dark-8);
                border-radius: 50%;
                background: var(--mantine-color-dark-6);
                width: calc(1.5625rem * var(--mantine-scale));
                height: calc(1.5625rem * var(--mantine-scale));
                position: absolute;
                bottom: calc(-0.625rem * var(--mantine-scale));
                right: calc(-0.5rem * var(--mantine-scale));
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgba(255, 255, 255, 0.3)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="tabler-icon tabler-icon-upload"
                style="margin-left: 2px; margin-bottom: 2px"
              >
                <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path>
                <path d="M7 9l5 -5l5 5"></path>
                <path d="M12 4l0 12"></path>
              </svg>
            </div>
          </div>
        </button>
      </div>
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
          class="m_46b77525 mantine-InputWrapper-root mantine-TextInput-root"
          style="width: 100%"
        >
          <label
            class="m_8fdc1311 mantine-InputWrapper-label mantine-TextInput-label"
            for="mantine-f966wffow"
            id="mantine-f966wffow-label"
            style="color: white; font-size: 16px"
            >Name<span
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
              placeholder="Chain name"
              data-path="name"
              aria-invalid="false"
              id="mantine-f966wffow"
              value=""
              style="background-color: rgb(9, 11, 18); color: white"
            />
          </div>
        </div>
        <div
          class="m_e2f5cd4e m_46b77525 mantine-InputWrapper-root mantine-NumberInput-root"
          style="width: 100%"
        >
          <label
            class="m_8fdc1311 mantine-InputWrapper-label mantine-NumberInput-label"
            for="mantine-m5q8od5lk"
            id="mantine-m5q8od5lk-label"
            style="color: white; font-size: 16px"
            >Chain ID<span
              class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
              style="color: var(--mantine-color-red-9)"
            >
              *</span
            ></label
          >
          <div
            class="m_6c018570 mantine-Input-wrapper mantine-NumberInput-wrapper"
            data-variant="filled"
            data-with-right-section="true"
            style="
              --input-radius: var(--mantine-radius-md);
              --input-right-section-width: var(--ni-right-section-width-sm);
            "
          >
            <input
              class="m_8fb7ebe7 mantine-Input-input mantine-NumberInput-input"
              data-variant="filled"
              color="white"
              placeholder="13765"
              data-path="evmChainId"
              aria-invalid="false"
              id="mantine-m5q8od5lk"
              type="text"
              value=""
              style="background-color: rgb(9, 11, 18); color: white"
              inputmode="numeric"
            />
            <div
              data-position="right"
              class="m_82577fc2 mantine-Input-section mantine-NumberInput-section"
            >
              <div
                class="m_4451eb3a mantine-Center-root"
                aria-haspopup="dialog"
                aria-expanded="false"
                aria-controls="mantine-vjd9jwxkp-dropdown"
                id="mantine-vjd9jwxkp-target"
              >
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style="
                    width: calc(1.25rem * var(--mantine-scale));
                    height: calc(1.25rem * var(--mantine-scale));
                  "
                >
                  <circle cx="10" cy="10" r="10" fill="#202738"></circle>
                  <path
                    d="M10 14L10 10"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <circle cx="10" cy="7" r="1" fill="white"></circle>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </fieldset>
  </div>
  <style data-mantine-styles="inline">
    .__m__-r2d {
      padding: calc(0.9375rem * var(--mantine-scale));
    }
    @media (min-width: 48em) {
      .__m__-r2d {
        padding: calc(1.875rem * var(--mantine-scale));
      }
    }
  </style>
  <div
    class="__m__-r2d"
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
            for="mantine-22ud39k7e"
            id="mantine-22ud39k7e-label"
            style="color: white; font-size: 16px"
            >Token Decimals<svg
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
              <path d="M5 12l5 5l10 -10"></path></svg
          ></label>
          <div
            class="m_6c018570 mantine-Input-wrapper mantine-NumberInput-wrapper"
            data-variant="filled"
            data-disabled="true"
            style="
              --input-radius: var(--mantine-radius-md);
              --input-right-section-width: var(--ni-right-section-width-sm);
              --input-right-section-pointer-events: none;
            "
          >
            <input
              class="m_8fb7ebe7 mantine-Input-input mantine-NumberInput-input"
              data-variant="filled"
              data-disabled="true"
              color="white"
              placeholder="12"
              data-path="tokenDecimals"
              disabled=""
              aria-invalid="false"
              id="mantine-22ud39k7e"
              type="text"
              value="18"
              style="background-color: rgb(9, 11, 18); color: white"
              inputmode="numeric"
            />
          </div>
        </div>
        <div
          class="m_46b77525 mantine-InputWrapper-root mantine-TextInput-root"
          style="width: 100%"
        >
          <label
            class="m_8fdc1311 mantine-InputWrapper-label mantine-TextInput-label"
            for="mantine-90qc18pki"
            id="mantine-90qc18pki-label"
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
              id="mantine-90qc18pki"
              value=""
              style="background-color: rgb(9, 11, 18); color: white"
            />
          </div>
        </div>
      </div>
      <button
        class="mantine-focus-auto mantine-active m_77c9d27d mantine-Button-root m_87cf2631 mantine-UnstyledButton-root"
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
                for="mantine-yw2cywmp1"
                id="mantine-yw2cywmp1-label"
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
                  <path d="M5 12l5 5l10 -10"></path></svg
              ></label>
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
                  id="mantine-yw2cywmp1"
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
                for="mantine-q3jajpqpy"
                id="mantine-q3jajpqpy-label"
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
                  <path d="M5 12l5 5l10 -10"></path></svg
              ></label>
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
                  id="mantine-q3jajpqpy"
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
  <style data-mantine-styles="inline">
    .__m__-r3e {
      padding: calc(0.9375rem * var(--mantine-scale));
    }
    @media (min-width: 48em) {
      .__m__-r3e {
        padding: calc(1.875rem * var(--mantine-scale));
      }
    }
  </style>
  <div
    class="__m__-r3e"
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
        Accounts
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
        The SUDO address gives admin rights to manage your Appchain, it is used
        for conducting upgrades and changing the state of the chain at the
        protocol level.
      </p>
      <style data-mantine-styles="inline">
        @media (min-width: 36em) {
          .__m__-r3h {
            margin-right: 0rem;
          }
        }
      </style>
      <div
        class="m_4081bf90 mantine-Group-root __m__-r3h"
        style="
          --group-gap: var(--mantine-spacing-xs);
          --group-align: start;
          --group-justify: flex-start;
          --group-wrap: nowrap;
          flex-direction: column;
        "
      >
        <style data-mantine-styles="inline">
          .__m__-r3j {
            width: 100%;
          }
          @media (min-width: 75em) {
            .__m__-r3j {
              width: 70%;
            }
          }
        </style>
        <div
          class="m_46b77525 mantine-InputWrapper-root __m__-r3j"
          style="position: relative"
        >
          <label
            class="m_8fdc1311 mantine-InputWrapper-label"
            for="mantine-k5cpl39mb"
            id="mantine-k5cpl39mb-label"
            style="color: white; font-size: 16px"
            >Sudo<span
              class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
              style="color: var(--mantine-color-red-9)"
            >
              *</span
            ></label
          >
          <div
            class=""
            aria-haspopup="listbox"
            autocomplete="off"
            aria-controls="mantine-rdi57g52v"
          >
            <div
              class="m_46b77525 mantine-InputWrapper-root mantine-TextInput-root"
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
                  placeholder="0x987C17e98F1D5838940D63bd3B8BA9BC32B315a2"
                  spellcheck="false"
                  autocomplete="off"
                  data-path="sudoAddress"
                  aria-invalid="false"
                  id="mantine-5f135tkxa"
                  value=""
                  style="background-color: rgb(9, 11, 18); color: white"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          class="m_e2f5cd4e m_46b77525 mantine-InputWrapper-root mantine-NumberInput-root"
          style="flex: 1 1 0%; width: 100%"
        >
          <label
            class="m_8fdc1311 mantine-InputWrapper-label mantine-NumberInput-label"
            for="mantine-cojchluaj"
            id="mantine-cojchluaj-label"
            style="color: white; font-size: 16px"
            >Balance<span
              class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
              style="color: var(--mantine-color-red-9)"
            >
              *</span
            ></label
          >
          <div
            class="m_6c018570 mantine-Input-wrapper mantine-NumberInput-wrapper"
            data-variant="filled"
            data-with-right-section="true"
            style="
              --input-radius: var(--mantine-radius-md);
              --input-right-section-width: var(--ni-right-section-width-sm);
            "
          >
            <input
              class="m_8fb7ebe7 mantine-Input-input mantine-NumberInput-input"
              data-variant="filled"
              color="white"
              placeholder="Your balance"
              data-path="sudoBalance"
              aria-invalid="false"
              id="mantine-cojchluaj"
              type="text"
              value=""
              style="background-color: rgb(9, 11, 18); color: white"
              inputmode="numeric"
            />
            <div
              data-position="right"
              class="m_82577fc2 mantine-Input-section mantine-NumberInput-section"
            >
              <div
                class="m_4451eb3a mantine-Center-root"
                aria-haspopup="dialog"
                aria-expanded="false"
                aria-controls="mantine-2qwip0spf-dropdown"
                id="mantine-2qwip0spf-target"
              >
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style="
                    width: calc(1.25rem * var(--mantine-scale));
                    height: calc(1.25rem * var(--mantine-scale));
                  "
                >
                  <circle cx="10" cy="10" r="10" fill="#202738"></circle>
                  <path
                    d="M10 14L10 10"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <circle cx="10" cy="7" r="1" fill="white"></circle>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        class="mantine-focus-auto mantine-active m_77c9d27d mantine-Button-root m_87cf2631 mantine-UnstyledButton-root"
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
          Distribute and allocate balances to address of your gas token
        </p>
        <div
          class="m_6d731127 mantine-Stack-root"
          style="
            --stack-gap: var(--mantine-spacing-md);
            --stack-align: stretch;
            --stack-justify: flex-start;
          "
        >
          <div class="">
            <button
              class="mantine-focus-auto mantine-active m_77c9d27d mantine-Button-root m_87cf2631 mantine-UnstyledButton-root"
              data-variant="light"
              data-size="sm"
              data-with-right-section="true"
              type="button"
              style="
                color: var(--mantine-color-white);
                opacity: 1;
                --button-height: var(--button-height-sm);
                --button-padding-x: var(--button-padding-x-sm);
                --button-fz: var(--mantine-font-size-sm);
                --button-bg: var(--mantine-color-tanssiTeal-light);
                --button-hover: var(--mantine-color-tanssiTeal-light-hover);
                --button-color: var(--mantine-color-tanssiTeal-light-color);
                --button-bd: calc(0.0625rem * var(--mantine-scale)) solid
                  transparent;
                font-weight: 400;
              "
            >
              <span class="m_80f1301b mantine-Button-inner"
                ><span class="m_811560b9 mantine-Button-label">Add address</span
                ><span
                  class="m_a74036a mantine-Button-section"
                  data-position="right"
                  style="margin-left: 5px"
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
                    class="tabler-icon tabler-icon-plus"
                  >
                    <path d="M12 5l0 14"></path>
                    <path d="M5 12l14 0"></path></svg></span
              ></span>
            </button>
          </div>
        </div>
      </div>
    </fieldset>
  </div>
  <style data-mantine-styles="inline">
    .__m__-r4h {
      padding: calc(0.9375rem * var(--mantine-scale));
    }
    @media (min-width: 48em) {
      .__m__-r4h {
        padding: calc(1.875rem * var(--mantine-scale));
      }
    }
  </style>
  <div
    class="__m__-r4h"
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
        Genesis Smart Contracts
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
        Set up your contracts at genesis, the following contracts are added by
        default.
      </p>
      <div
        class="m_6d731127 mantine-Stack-root"
        style="
          --stack-gap: var(--mantine-spacing-md);
          --stack-align: stretch;
          --stack-justify: flex-start;
        "
      >
        <div class="">
          <button
            class="mantine-focus-auto mantine-active m_77c9d27d mantine-Button-root m_87cf2631 mantine-UnstyledButton-root"
            data-variant="light"
            data-size="sm"
            data-with-right-section="true"
            type="button"
            style="
              color: var(--mantine-color-white);
              opacity: 1;
              --button-height: var(--button-height-sm);
              --button-padding-x: var(--button-padding-x-sm);
              --button-fz: var(--mantine-font-size-sm);
              --button-bg: var(--mantine-color-tanssiTeal-light);
              --button-hover: var(--mantine-color-tanssiTeal-light-hover);
              --button-color: var(--mantine-color-tanssiTeal-light-color);
              --button-bd: calc(0.0625rem * var(--mantine-scale)) solid
                transparent;
              margin-top: var(--mantine-spacing-xs);
              font-weight: 400;
            "
          >
            <span class="m_80f1301b mantine-Button-inner"
              ><span class="m_811560b9 mantine-Button-label">Add contract</span
              ><span
                class="m_a74036a mantine-Button-section"
                data-position="right"
                style="margin-left: 5px"
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
                  class="tabler-icon tabler-icon-plus"
                >
                  <path d="M12 5l0 14"></path>
                  <path d="M5 12l14 0"></path></svg></span
            ></span>
          </button>
        </div>
      </div>
    </fieldset>
  </div>
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
      class="mantine-focus-auto mantine-active m_77c9d27d mantine-Button-root m_87cf2631 mantine-UnstyledButton-root"
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
        --button-bd: calc(0.0625rem * var(--mantine-scale)) solid transparent;
        font-weight: 500;
      "
    >
      <span class="m_80f1301b mantine-Button-inner"
        ><span class="m_a74036a mantine-Button-section" data-position="left"
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
      class="mantine-focus-auto ActionButton_button__aljz0 m_77c9d27d mantine-Button-root m_87cf2631 mantine-UnstyledButton-root"
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
        --button-bd: calc(0.0625rem * var(--mantine-scale)) solid transparent;
        font-weight: 500;
        min-width: calc(7.75rem * var(--mantine-scale));
      "
    >
      <span class="m_80f1301b mantine-Button-inner"
        ><span class="m_811560b9 mantine-Button-label">Continue</span
        ><span class="m_a74036a mantine-Button-section" data-position="right"
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
</template>
