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
        <UiContractItem
          v-for="(item, idx) in listContract"
          :contract="item.contract"
          :bytecode="item.bytecode"
          :idx="idx"
          :key="idx"
          @onInputContract="onInputContract"
          @onInputBytecode="onInputBytecode"
          @deleteItem="deleteItem"
        />
        <div class="">
          <button
            class="mantine-focus-auto mantine-active mantine-Button-root m_87cf2631 mantine-UnstyledButton-root rounded-xl bg-[#1b2b34] p-2 text-white"
            data-variant="light"
            data-size="sm"
            data-with-right-section="true"
            type="button"
            @click="addContract()"
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
<script setup>
import { useAppStore } from '~/store/app'
const appStore = useAppStore()
const listContract = ref([])
const contractItem = ref({
  contract: '',
  bytecode: '',
})
function addContract() {
  listContract.value.push(contractItem.value)
}
let isAdvanced = ref(false)
function onAdvanced() {
  isAdvanced.value = !isAdvanced.value
}
function onInputContract(value, idx) {
  const cloneContractArray = JSON.parse(JSON.stringify(listContract.value))
  let itemAdr = cloneContractArray[idx]
  itemAdr.contract = value
  listContract.value = cloneContractArray
}
function onInputBalance(value, idx) {
  const cloneContractArray = JSON.parse(JSON.stringify(listContract.value))
  let itemBalance = cloneContractArray[idx]
  itemBalance.balance = value
  listContract.value = cloneContractArray
}
function deleteItem(idx) {
  listContract.value.splice(idx, 1)
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
</style>
