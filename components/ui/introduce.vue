<template>
  <div
    class="mantine-focus-auto m_849cf0da m_b6d8b162 mantine-Text-root mantine-Anchor-root"
    data-underline="hover"
    target="_blank"
    style="
      position: relative;
      display: block;
      width: 100%;
      color: var(--mantine-color-anchor);
    "
  >
    <img
      alt="Let's Forkin Dance banner"
      fetchpriority="high"
      width="1536"
      height="1024"
      decoding="async"
      data-nimg="1"
      class="m_9e117634 mantine-Image-root"
      src="~/assets/img/banner_2.webp"
      style="color: transparent; width: 100%; height: auto"
      v-if="appStore.windowWidth > 990"
    />
    <img
      v-else
      alt="Let's Forkin Dance banner"
      fetchpriority="high"
      width="1536"
      height="1024"
      decoding="async"
      data-nimg="1"
      class="m_9e117634 mantine-Image-root"
      src="~/assets/img/banner_3.webp"
      style="color: transparent; width: 100%; height: auto"
    />

    <button
      class="mantine-focus-auto mantine-active m_8d3f4000 mantine-ActionIcon-root m_87cf2631 mantine-UnstyledButton-root"
      type="button"
      style="
        --ai-color: var(--mantine-color-white);
        position: absolute;
        top: 3%;
        right: 2%;
        background-color: transparent;
      "
      @click="CloseIntroduce()"
    >
      <span class="m_8d3afb97 mantine-ActionIcon-icon">
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 512 512"
          height="20"
          width="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z"
          ></path>
        </svg>
      </span>
    </button>
    <div
      style="
        position: absolute;
        bottom: 3%;
        right: 2%;
        background-color: transparent;
        color: rgb(255, 255, 255);
      "
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 512 512"
        height="20"
        width="20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="none"
          stroke-linecap="square"
          stroke-miterlimit="10"
          stroke-width="48"
          d="m268 112 144 144-144 144m124-144H100"
        ></path>
      </svg>
    </div>
  </div>
</template>
<script setup>
const introduce = useCookie('introduce')
import { useAppStore } from '~/store/app'
const appStore = useAppStore()
const emit = defineEmits({
  CloseIntroduce: false,
})
function CloseIntroduce() {
  emit('CloseIntroduce')
}
</script>
