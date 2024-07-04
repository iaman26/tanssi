<template>
  <div
    class="m_46b77525 mantine-InputWrapper-root mantine-TextInput-root"
    style="width: 100%"
  >
    <label
      class="m_8fdc1311 mantine-InputWrapper-label mantine-TextInput-label flex"
      for="mantine-nn9dul00f"
      id="mantine-nn9dul00f-label"
      style="color: white; font-size: 16px"
    >
      {{ props.title }}
      <span
        class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
        style="color: var(--mantine-color-red-9)"
        v-if="!props.modelValue || (requireError && !onInput)"
      >
        *</span
      >
      <svg
        v-else
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
        <path d="M5 12l5 5l10 -10"></path>
      </svg>
    </label>
    <div
      class="m_6c018570 mantine-Input-wrapper mantine-TextInput-wrapper"
      data-variant="filled"
      style="--input-radius: var(--mantine-radius-md)"
    >
      <input
        class="m_8fb7ebe7 mantine-Input-input mantine-TextInput-input border-2 border-rose-600"
        data-variant="filled"
        color="white"
        :placeholder="props.placeholder"
        data-path="name"
        aria-invalid="false"
        id="mantine-nn9dul00f"
        :value="props.modelValue"
        @input="emit('update:modelValue', $event.target.value)"
        :style="{
          'background-color': 'rgb(9, 11, 18)',
          color: requireError ? 'red' : 'white',
        }"
        @blur="handleBlur()"
        @focus="focusInput()"
      />
    </div>
    <p v-if="requireError" class="mt-2 text-sm text-red-600">
      String must contain at least 3 character(s)
    </p>
  </div>
</template>
<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: true,
  },
  modelValue: {
    type: String,
    required: false,
  },
  isRequire: {
    type: Boolean,
    required: false,
  },
})
const emit = defineEmits(['update:modelValue'])
let requireError = ref(false)
let onInput = ref(false)
watch(
  () => props.modelValue,
  (first, second) => {
    if (first) {
      requireError.value = false
    }
  }
)
function focusInput() {
  onInput.value = true
}
function handleBlur() {
  onInput.value = false
  if (props.modelValue.length < 3) {
    requireError.value = true
  }
}
</script>
