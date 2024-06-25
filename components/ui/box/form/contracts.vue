<template>
  <div
    class="__m__-rotj"
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
</template>
<style scoped>
.__m__-rotj {
  padding: calc(0.9375rem * var(--mantine-scale));
}
@media (min-width: 48em) {
  .__m__-rotj {
    padding: calc(1.875rem * var(--mantine-scale));
  }
}
</style>
