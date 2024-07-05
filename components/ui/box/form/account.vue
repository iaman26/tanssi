<template>
  <div
    class="pd"
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
      <div
        class="m_4081bf90 mantine-Group-root __m__-rosj"
        style="
          --group-gap: var(--mantine-spacing-xs);
          --group-align: start;
          --group-justify: flex-start;
          --group-wrap: nowrap;
          flex-direction: row;
        "
      >
        <div
          class="m_46b77525 mantine-InputWrapper-root __m__-rosl"
          style="position: relative"
        >
          <label
            class="m_8fdc1311 mantine-InputWrapper-label"
            for="mantine-slg3mk3ru"
            id="mantine-slg3mk3ru-label"
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
            aria-controls="mantine-xeishtn0w"
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
                  :placeholder="`${appStore.isTabsBox === 1 ? '0x987C17e98F1D5838940D63bd3B8BA9BC32B315a2' : 'Enter your sudo address'}`"
                  spellcheck="false"
                  autocomplete="off"
                  data-path="sudoAddress"
                  aria-invalid="false"
                  id="mantine-zj0hvjgq4"
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
            for="mantine-cgys132dx"
            id="mantine-cgys132dx-label"
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
              id="mantine-cgys132dx"
              type="text"
              value=""
              inputmode="numeric"
              style="background-color: rgb(9, 11, 18); color: white"
            />
            <div
              data-position="right"
              class="m_82577fc2 mantine-Input-section mantine-NumberInput-section"
            >
              <div
                class="m_4451eb3a mantine-Center-root"
                aria-haspopup="dialog"
                aria-expanded="false"
                aria-controls="mantine-9ceeljobd-dropdown"
                id="mantine-9ceeljobd-target"
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
              class="mantine-focus-auto mantine-active mantine-Button-root m_87cf2631 mantine-UnstyledButton-root"
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
</template>
<script setup>
import { useAppStore } from '~/store/app'
const appStore = useAppStore()
</script>
<style scoped>
.pd {
  padding: calc(0.9375rem * var(--mantine-scale));
}
@media (min-width: 48em) {
  .pd {
    padding: calc(1.875rem * var(--mantine-scale));
  }
}
@media (min-width: 36em) {
  .__m__-rosj {
    margin-right: 0rem;
  }
}
.__m__-rosl {
  width: 100%;
}
@media (min-width: 75em) {
  .__m__-rosl {
    width: 70%;
  }
}
</style>
