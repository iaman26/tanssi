<template>
  <div
    class="__m__-roqn"
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
              src="data:image/svg+xml;utf8,%3Csvg%20viewBox%3D%22-1.5%20-1.5%208%208%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22hsl(280%2095%25%2045%25)%22%3E%3Crect%20x%3D%221%22%20y%3D%220%22%20width%3D%221%22%20height%3D%221%22%2F%3E%3Crect%20x%3D%221%22%20y%3D%221%22%20width%3D%221%22%20height%3D%221%22%2F%3E%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%221%22%20height%3D%221%22%2F%3E%3Crect%20x%3D%223%22%20y%3D%220%22%20width%3D%221%22%20height%3D%221%22%2F%3E%3Crect%20x%3D%223%22%20y%3D%221%22%20width%3D%221%22%20height%3D%221%22%2F%3E%3C%2Fsvg%3E"
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
        <UiTextForm
          :title="'name'"
          :placeholder="'Chain name'"
          :isRequire="true"
          :maxLength="6"
          :minLength="3"
          v-model="form.name"
        />
        <UiTextForm
          v-if="appStore.isTabsBox === 1"
          :title="'Chain ID'"
          :placeholder="'1234'"
          :isRequire="true"
          :minLength="1"
          :maxLength="11"
          v-model="form.chainID"
        />
      </div>
    </fieldset>
  </div>
</template>
<script setup>
import { useAppStore } from '~/store/app'
const appStore = useAppStore()
let form = ref({
  name: '',
  chainID: '',
})
</script>

<style scoped>
.__m__-roqn {
  padding: calc(0.9375rem * var(--mantine-scale));
}
@media (min-width: 48em) {
  .__m__-roqn {
    padding: calc(1.875rem * var(--mantine-scale));
  }
}
</style>
