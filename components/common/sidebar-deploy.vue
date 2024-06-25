<template>
  <div
    class="m_45252eee mantine-AppShell-navbar Nav_nav__W3s5_"
    style="--app-shell-navbar-z-index: calc(100 + 1)"
  >
    <button
      class="mantine-focus-auto m_fea6bf1a mantine-Burger-root m_87cf2631 mantine-UnstyledButton-root mantine-hidden-from-md"
      data-size="md"
      type="button"
      style="
        --burger-size: var(--burger-size-md);
        position: absolute;
        top: 30px;
        left: calc(1.25rem * var(--mantine-scale));
      "
    >
      <div
        class="m_d4fb9cad mantine-Burger-burger"
        data-reduce-motion="true"
      ></div></button
    ><a href="/"
      ><img
        alt="Tanssi"
        fetchpriority="high"
        width="140"
        height="44"
        decoding="async"
        data-nimg="1"
        src="~/assets/img/logo.webp"
        style="color: transparent"
    /></a>
    <div
      class="m_6d731127 mantine-Stack-root"
      style="
        --stack-gap: var(--mantine-spacing-md);
        --stack-align: stretch;
        --stack-justify: space-between;
        flex: 1 1 0%;
        width: 100%;
      "
    >
      <div class="">
        <button
          class="mantine-focus-auto mantine-active NavCreateAppchain_backToMenu__DlfVj mantine-Button-root m_87cf2631 mantine-UnstyledButton-root"
          data-variant="subtle"
          data-size="md"
          data-with-left-section="true"
          type="button"
          style="
            color: var(--mantine-color-white);
            opacity: 1;
            --button-height: var(--button-height-md);
            --button-padding-x: var(--button-padding-x-md);
            --button-fz: var(--mantine-font-size-md);
            --button-bg: transparent;
            --button-hover: var(--mantine-color-tanssiTeal-light-hover);
            --button-color: var(--mantine-color-tanssiTeal-light-color);
            --button-bd: calc(0.0625rem * var(--mantine-scale)) solid
              transparent;
            margin-bottom: var(--mantine-spacing-lg);
            margin-right: var(--mantine-spacing-sm);
            font-weight: 500;
          "
          @click="goBack()"
        >
          <span class="m_80f1301b mantine-Button-inner"
            ><span class="m_a74036a mantine-Button-section" data-position="left"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
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
            ><span class="m_811560b9 mantine-Button-label"
              >Deploy Appchain</span
            ></span
          >
        </button>
        <div
          class="m_cbb4ea7e mantine-Stepper-root"
          style="--stepper-icon-size: calc(3.4375rem * var(--mantine-scale))"
        >
          <div
            class="m_aaf89d0b mantine-Stepper-steps"
            data-orientation="vertical"
            data-icon-position="left"
          >
            <button
              class="mantine-focus-auto m_833edb7e NavCreateAppchain_step__dZnTE m_cbb57068 mantine-Stepper-step m_87cf2631 mantine-UnstyledButton-root"
              data-icon-position="left"
              type="button"
              data-progress="true"
              tabindex="-1"
            >
              <span class="m_818e70b mantine-Stepper-stepWrapper"
                ><span
                  class="NavCreateAppchain_stepIcon__mGFAr m_1959ad01 mantine-Stepper-stepIcon"
                  data-progress="true"
                  >1</span
                ><span
                  class="NavCreateAppchain_verticalSeparator__2oJX4 m_6496b3f3 mantine-Stepper-verticalSeparator"
                ></span></span
              ><span
                class="m_1956aa2a mantine-Stepper-stepBody"
                data-orientation="vertical"
                data-icon-position="left"
                ><span
                  class="NavCreateAppchain_stepLabel__5NnG2 m_12051f6c mantine-Stepper-stepLabel"
                  >Template</span
                ><span
                  class="NavCreateAppchain_stepDescription__Zl7sA m_164eea74 mantine-Stepper-stepDescription"
                  >Pick and modify template</span
                ></span
              ></button
            ><button
              class="mantine-focus-auto m_833edb7e NavCreateAppchain_step__dZnTE m_cbb57068 mantine-Stepper-step m_87cf2631 mantine-UnstyledButton-root"
              data-icon-position="left"
              type="button"
              tabindex="-1"
            >
              <span class="m_818e70b mantine-Stepper-stepWrapper"
                ><span
                  class="NavCreateAppchain_stepIcon__mGFAr m_1959ad01 mantine-Stepper-stepIcon"
                  >2</span
                ><span
                  class="NavCreateAppchain_verticalSeparator__2oJX4 m_6496b3f3 mantine-Stepper-verticalSeparator"
                ></span></span
              ><span
                class="m_1956aa2a mantine-Stepper-stepBody"
                data-orientation="vertical"
                data-icon-position="left"
                ><span
                  class="NavCreateAppchain_stepLabel__5NnG2 m_12051f6c mantine-Stepper-stepLabel"
                  >Balances</span
                ><span
                  class="NavCreateAppchain_stepDescription__Zl7sA m_164eea74 mantine-Stepper-stepDescription"
                  >Verify balances</span
                ></span
              ></button
            ><button
              class="mantine-focus-auto m_833edb7e NavCreateAppchain_step__dZnTE m_cbb57068 mantine-Stepper-step m_87cf2631 mantine-UnstyledButton-root"
              data-icon-position="left"
              type="button"
              tabindex="-1"
            >
              <span class="m_818e70b mantine-Stepper-stepWrapper"
                ><span
                  class="NavCreateAppchain_stepIcon__mGFAr m_1959ad01 mantine-Stepper-stepIcon"
                  >3</span
                ><span
                  class="NavCreateAppchain_verticalSeparator__2oJX4 m_6496b3f3 mantine-Stepper-verticalSeparator"
                ></span></span
              ><span
                class="m_1956aa2a mantine-Stepper-stepBody"
                data-orientation="vertical"
                data-icon-position="left"
                ><span
                  class="NavCreateAppchain_stepLabel__5NnG2 m_12051f6c mantine-Stepper-stepLabel"
                  >Appchain ID</span
                ><span
                  class="NavCreateAppchain_stepDescription__Zl7sA m_164eea74 mantine-Stepper-stepDescription"
                  >Reserve appchain ID</span
                ></span
              ></button
            ><button
              class="mantine-focus-auto m_833edb7e NavCreateAppchain_step__dZnTE m_cbb57068 mantine-Stepper-step m_87cf2631 mantine-UnstyledButton-root"
              data-icon-position="left"
              type="button"
              tabindex="-1"
            >
              <span class="m_818e70b mantine-Stepper-stepWrapper"
                ><span
                  class="NavCreateAppchain_stepIcon__mGFAr m_1959ad01 mantine-Stepper-stepIcon"
                  >4</span
                ><span
                  class="NavCreateAppchain_verticalSeparator__2oJX4 m_6496b3f3 mantine-Stepper-verticalSeparator"
                ></span></span
              ><span
                class="m_1956aa2a mantine-Stepper-stepBody"
                data-orientation="vertical"
                data-icon-position="left"
                ><span
                  class="NavCreateAppchain_stepLabel__5NnG2 m_12051f6c mantine-Stepper-stepLabel"
                  >Appchain Data</span
                ><span
                  class="NavCreateAppchain_stepDescription__Zl7sA m_164eea74 mantine-Stepper-stepDescription"
                  >Generate appchain data</span
                ></span
              ></button
            ><button
              class="mantine-focus-auto m_833edb7e NavCreateAppchain_step__dZnTE m_cbb57068 mantine-Stepper-step m_87cf2631 mantine-UnstyledButton-root"
              data-icon-position="left"
              type="button"
              tabindex="-1"
            >
              <span class="m_818e70b mantine-Stepper-stepWrapper"
                ><span
                  class="NavCreateAppchain_stepIcon__mGFAr m_1959ad01 mantine-Stepper-stepIcon"
                  >5</span
                ><span
                  class="NavCreateAppchain_verticalSeparator__2oJX4 m_6496b3f3 mantine-Stepper-verticalSeparator"
                ></span></span
              ><span
                class="m_1956aa2a mantine-Stepper-stepBody"
                data-orientation="vertical"
                data-icon-position="left"
                ><span
                  class="NavCreateAppchain_stepLabel__5NnG2 m_12051f6c mantine-Stepper-stepLabel"
                  >Register</span
                ><span
                  class="NavCreateAppchain_stepDescription__Zl7sA m_164eea74 mantine-Stepper-stepDescription"
                  >Register appchain</span
                ></span
              >
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
function goBack() {
  router.go(-1)
}
</script>

<style scoped>
.mantine-Stack-root {
  margin-top: 26px;
}
</style>
