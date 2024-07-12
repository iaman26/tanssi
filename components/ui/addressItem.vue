<template>
  <div
    class="m_4081bf90 mantine-Group-root __m__-r5c items-end"
    data-grow="true"
    style="
      --group-gap: var(--mantine-spacing-xs);
      --group-align: center;
      --group-justify: flex-start;
      --group-wrap: nowrap;
      margin-top: 12px;
    "
  >
    <div
      class="m_4081bf90 mantine-Group-root"
      style="
        --group-gap: var(--mantine-spacing-xs);
        --group-align: center;
        --group-justify: flex-start;
        --group-wrap: nowrap;
        flex-direction: row;
      "
    >
      <div
        class="m_46b77525 mantine-InputWrapper-root mantine-TextInput-root __m__-r5f"
      >
        <label
          v-if="props.idx === 0"
          class="m_8fdc1311 mantine-InputWrapper-label mantine-TextInput-label mb-1"
          for="mantine-iulmm99cr"
          id="mantine-iulmm99cr-label"
          style="color: white; font-size: 16px"
          >Address</label
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
            data-testid="account-address-0"
            data-path="balances.0.address"
            aria-invalid="false"
            id="mantine-iulmm99cr"
            :value="props.address"
            @input="handleInputAdr"
            style="background-color: rgb(9, 11, 18); color: white"
          />
        </div>
      </div>
      <div
        class="m_e2f5cd4e m_46b77525 mantine-InputWrapper-root mantine-NumberInput-root"
        style="flex: 1 1 0%; width: 100%"
      >
        <label
          v-if="props.idx === 0"
          class="m_8fdc1311 mantine-InputWrapper-label mantine-NumberInput-label mb-1"
          for="mantine-rxz4cezcp"
          id="mantine-rxz4cezcp-label"
          style="color: white; font-size: 16px"
          >Balance</label
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
            class="m_8fb7ebe7 mantine-Input-input mantine-NumberInput-input rounded-lg"
            data-variant="filled"
            color="white"
            placeholder="100000000000"
            data-testid="account-balance-0"
            data-path="balances.0.balance"
            aria-invalid="false"
            id="mantine-rxz4cezcp"
            type="text"
            :value="props.balance"
            @input="handleInputBalance"
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
              aria-controls="mantine-5mkeej6yk-dropdown"
              id="mantine-5mkeej6yk-target"
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
      class="mantine-focus-auto mantine-active m_8d3f4000 mantine-ActionIcon-root m_87cf2631 mantine-UnstyledButton-root mb-1 pb-1"
      data-variant="transparent"
      type="button"
      title="Remove"
      data-testid="account-remove-0"
      style="
        --ai-bg: transparent;
        --ai-hover: transparent;
        --ai-color: var(--mantine-color-tanssiTeal-light-color);
        --ai-bd: calc(0.0625rem * var(--mantine-scale)) solid transparent;
        border-radius: 7px;
        background: var(--mantine-color-dark-6);
        color: var(--mantine-color-white);
        max-width: calc(0.625rem * var(--mantine-scale));
      "
      @click="deleteItem"
    >
      <span class="m_8d3afb97 mantine-ActionIcon-icon"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="tabler-icon tabler-icon-trash"
        >
          <path d="M4 7l16 0"></path>
          <path d="M10 11l0 6"></path>
          <path d="M14 11l0 6"></path>
          <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
          <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
        </svg>
      </span>
    </button>
  </div>
</template>
<script setup>
const props = defineProps({
  address: {
    type: String,
    required: true,
  },
  balance: {
    type: String,
    required: true,
  },
  idx: {
    type: Number,
    required: true,
  },
})
const emit = defineEmits({
  onInputAddress: false,
  onInputBalance: false,
  deleteItem: false,
})
function handleInputAdr(e) {
  emit('onInputAddress', e.target.value, props.idx)
}
function handleInputBalance(e) {
  emit('onInputBalance', e.target.value, props.idx)
}
function deleteItem() {
  emit('deleteItem', props.idx)
}
</script>
<style scoped>
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
