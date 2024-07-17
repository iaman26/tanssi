<template>
  <div
    class="m_4081bf90 mantine-Group-root"
    style="
      --group-gap: var(--mantine-spacing-xs);
      --group-align: center;
      --group-justify: flex-start;
      --group-wrap: nowrap;
    "
  >
    <div
      class="m_6d731127 mantine-Stack-root"
      style="
        --stack-gap: var(--mantine-spacing-xs);
        --stack-align: stretch;
        --stack-justify: flex-start;
        width: 95%;
      "
    >
      <div class="m_46b77525 mantine-InputWrapper-root mantine-TextInput-root">
        <label
          class="m_8fdc1311 mantine-InputWrapper-label mantine-TextInput-label"
          for="mantine-e6k8jm6h4"
          id="mantine-e6k8jm6h4-label"
          style="color: white; font-size: 16px"
          >Contract Address</label
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
            data-path="precompiles.0.address"
            aria-invalid="false"
            id="mantine-e6k8jm6h4"
            :value="props.contract"
            @input="handleInputContract"
            style="background-color: rgb(9, 11, 18); color: white"
          />
        </div>
      </div>
      <div
        class="m_46b77525 mantine-InputWrapper-root mantine-TextInput-root"
        style="max-width: 100%"
      >
        <label
          class="m_8fdc1311 mantine-InputWrapper-label mantine-TextInput-label"
          for="mantine-1kozh6ai2"
          id="mantine-1kozh6ai2-label"
          style="color: white; font-size: 16px"
          >Bytecode</label
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
            placeholder="0"
            data-path="precompiles.0.bytecode"
            aria-invalid="false"
            id="mantine-1kozh6ai2"
            :value="props.bytecode"
            @input="handleInputBytecode"
            style="background-color: rgb(9, 11, 18); color: white"
          />
        </div>
      </div>
    </div>
    <button
      class="mantine-focus-auto mantine-active m_8d3f4000 mantine-ActionIcon-root m_87cf2631 mantine-UnstyledButton-root"
      data-variant="transparent"
      type="button"
      title="Remove"
      style="
        --ai-bg: transparent;
        --ai-hover: transparent;
        --ai-color: var(--mantine-color-tanssiTeal-light-color);
        --ai-bd: calc(0.0625rem * var(--mantine-scale)) solid transparent;
        border-radius: 7px;
        margin-top: calc(1.25rem * var(--mantine-scale));
        background: var(--mantine-color-dark-6);
        color: var(--mantine-color-white);
        max-width: calc(0.625rem * var(--mantine-scale));
      "
      @click="deleteItem()"
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
  contract: {
    type: String,
    required: true,
  },
  bytecode: {
    type: String,
    required: true,
  },
  idx: {
    type: Number,
    required: true,
  },
})
const emit = defineEmits({
  onInputContract: false,
  onInputBytecode: false,
  deleteItem: false,
})
function handleInputContract(e) {
  emit('onInputContract', e.target.value, props.idx)
}
function handleInputBytecode(e) {
  emit('onInputBytecode', e.target.value, props.idx)
}
function deleteItem() {
  emit('deleteItem', props.idx)
}
</script>
