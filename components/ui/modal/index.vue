<template>
  <div
    class="m_9df02822 mantine-Modal-root"
    data-centered="true"
    style="
      --modal-radius: var(--mantine-radius-lg);
      --modal-y-offset: 5dvh;
      --mb-z-index: 201;
      --mb-padding: var(--mantine-spacing-xl);
      --modal-size: calc(25rem * var(--mantine-scale));
    "
  >
    <div
      class="mantine-Modal-overlay m_9814e45f mantine-Overlay-root"
      data-fixed="true"
      style="
        --overlay-bg: rgba(0, 0, 0, 0.9);
        --overlay-z-index: 201;
        transition-property: opacity;
        transition-duration: 200ms;
        transition-timing-function: ease;
        opacity: 1;
      "
    ></div>
    <slot />
  </div>
</template>
