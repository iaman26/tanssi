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
        <UiTextForm
          :title="'Sudo'"
          class="xl:w-[70%]"
          :placeholder="`${appStore.isTabsBox === 1 ? '0x987C17e98F1D5838940D63bd3B8BA9BC32B315a2' : 'Enter your sudo address'}`"
          :isRequire="true"
          v-model="form.sudo"
          type="number"
        />
        <UiTextForm
          :title="'Balance'"
          class="xl:w-[30%]"
          :placeholder="'Your balance'"
          :isRequire="true"
          v-model="form.balance"
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
          Distribute and allocate balances to address of your gas token
        </p>
        <UiAddressItem
          v-for="(item, idx) in listAddress"
          :address="item.address"
          :balance="item.balance"
          :idx="idx"
          :key="idx"
          @onInputAddress="onInputAddress"
          @onInputBalance="onInputBalance"
          @deleteItem="deleteItem"
        />
        <div
          class="m_6d731127 mantine-Stack-root"
          style="
            --stack-gap: var(--mantine-spacing-md);
            --stack-align: stretch;
            --stack-justify: flex-start;
          "
        >
          <div class="mt-4">
            <button
              class="mantine-focus-auto mantine-active mantine-Button-root m_87cf2631 mantine-UnstyledButton-root rounded-xl bg-[#1b2b34] p-2"
              data-variant="light"
              data-size="sm"
              data-with-right-section="true"
              type="button"
              style="
                color: var(--mantine-color-white);
                opacity: 1;
                font-weight: 400;
              "
              @click="addAddress()"
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
let form = ref({
  sudo: '',
  balance: '',
})
const listAddress = ref([])
const addressItem = ref({
  address: '',
  balance: '',
})
function addAddress() {
  listAddress.value.push(addressItem.value)
}
let isAdvanced = ref(false)
function onAdvanced() {
  isAdvanced.value = !isAdvanced.value
}
function onInputAddress(value, idx) {
  const cloneAdrArray = JSON.parse(JSON.stringify(listAddress.value))
  let itemAdr = cloneAdrArray[idx]
  itemAdr.address = value
  listAddress.value = cloneAdrArray
}
function onInputBalance(value, idx) {
  const cloneAdrArray = JSON.parse(JSON.stringify(listAddress.value))
  let itemBalance = cloneAdrArray[idx]
  itemBalance.balance = value
  listAddress.value = cloneAdrArray
}
function deleteItem(idx) {
  listAddress.value.splice(idx, 1)
}
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
.__m__-r5c {
  margin-block: var(--mantine-spacing-xs);
}
@media (min-width: 75em) {
  .__m__-r5c {
    margin-block: 0rem;
  }
}
.__m__-r5f {
  width: 100%;
}
@media (min-width: 75em) {
  .__m__-r5f {
    width: 70%;
  }
}
</style>
