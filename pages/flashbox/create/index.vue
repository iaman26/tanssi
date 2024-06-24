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
      class="m_6d731127 mantine-Stack-root __m__-rv"
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
          <div class="" style="text-align: left; width: 100%">
            <h1
              class="m_8a5d1357 mantine-Title-root"
              data-order="1"
              style="
                --title-fw: var(--mantine-h1-font-weight);
                --title-lh: var(--mantine-h1-line-height);
                --title-fz: calc(4rem * var(--mantine-scale));
                font-family: Kilimanjaro, sans-serif;
                color: var(--mantine-color-white);
                font-weight: 500;
              "
            >
              Template Configuration
            </h1>
            <p
              class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
              data-size="xl"
              style="
                --text-fz: var(--mantine-font-size-xl);
                --text-lh: var(--mantine-line-height-xl);
                color: var(--mantine-color-white);
              "
            >
              Select and configure the type of Appchain you want.
            </p>
          </div>
          <div
            class="m_89d60db1 mantine-Tabs-root"
            data-variant="pills"
            data-orientation="vertical"
            data-placement="left"
            id="mantine-b71j25sju"
            style="
              --tabs-radius: var(--mantine-radius-default);
              --tabs-color: var(--mantine-color-dark-7);
              margin-top: var(--mantine-spacing-xl);
              padding: 0rem;
              width: 100%;
            "
          >
            <style data-mantine-styles="inline">
              .__m__-r17 {
                margin-bottom: calc(1.875rem * var(--mantine-scale));
              }
              @media (min-width: 48em) {
                .__m__-r17 {
                  margin-right: calc(1.875rem * var(--mantine-scale));
                }
              }
              @media (min-width: 62em) {
                .__m__-r17 {
                  margin-bottom: 0rem;
                }
              }
            </style>
            <div
              class="m_89d33d6d mantine-Tabs-list __m__-r17"
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
                data-active="true"
                data-orientation="vertical"
                data-placement="left"
                type="button"
                data-testid="template-tab-Evm"
                role="tab"
                id="mantine-b71j25sju-tab-Evm"
                aria-selected="true"
                tabindex="0"
                aria-controls="mantine-b71j25sju-panel-Evm"
                style="
                  background-color: rgb(255, 80, 45);
                  flex-grow: 0;
                  background-image: url('/images/logo_ethereum_light.svg');
                  background-repeat: no-repeat;
                  background-position: 85% center;
                  padding-top:;
                  padding-right:;
                  padding-bottom:;
                  padding-left: var(--mantine-spacing-md);
                  color: var(--mantine-color-white);
                  width: calc(17.8125rem * var(--mantine-scale));
                "
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
                id="mantine-b71j25sju-tab-Substrate"
                aria-selected="false"
                tabindex="-1"
                aria-controls="mantine-b71j25sju-panel-Substrate"
                style="
                  background-color: rgb(72, 166, 167);
                  flex-grow: 0;
                  background-image: url('/images/logo_substrate_light.svg');
                  background-repeat: no-repeat;
                  background-position: 85% center;
                  padding-top:;
                  padding-right:;
                  padding-bottom:;
                  padding-left: var(--mantine-spacing-md);
                  color: var(--mantine-color-white);
                  width: calc(17.8125rem * var(--mantine-scale));
                "
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
                id="mantine-b71j25sju-tab-Custom"
                aria-selected="false"
                tabindex="-1"
                aria-controls="mantine-b71j25sju-panel-Custom"
                style="
                  background-color: rgb(255, 161, 19);
                  flex-grow: 0;
                  background-image: url('/images//icons/json-light-icon.svg');
                  background-repeat: no-repeat;
                  background-position: 85% center;
                  padding-top:;
                  padding-right:;
                  padding-bottom:;
                  padding-left: var(--mantine-spacing-md);
                  color: var(--mantine-color-white);
                  width: calc(17.8125rem * var(--mantine-scale));
                "
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
            <div
              class="m_b0c91715 mantine-Tabs-panel"
              data-orientation="vertical"
              role="tabpanel"
              id="mantine-b71j25sju-panel-Evm"
              aria-labelledby="mantine-b71j25sju-tab-Evm"
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
                  <UiBoxAppchainDetails />
                </div>
              </form>
            </div>
            <div
              class="m_b0c91715 mantine-Tabs-panel"
              data-orientation="vertical"
              role="tabpanel"
              id="mantine-b71j25sju-panel-Substrate"
              aria-labelledby="mantine-b71j25sju-tab-Substrate"
              style="position: relative; display: none"
            ></div>
            <div
              class="m_b0c91715 mantine-Tabs-panel"
              data-orientation="vertical"
              role="tabpanel"
              id="mantine-b71j25sju-panel-Custom"
              aria-labelledby="mantine-b71j25sju-tab-Custom"
              style="position: relative; display: none"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.__m__-rv {
  padding-inline: var(--mantine-spacing-md);
}
@media (min-width: 62em) {
  .__m__-rv {
    padding-inline: var(--mantine-spacing-xl);
  }
}
</style>
