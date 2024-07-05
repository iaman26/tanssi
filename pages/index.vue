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
      class="m_6d731127 mantine-Stack-root pd-inline"
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
      <UiBanner />
      <div
        class="m_6d731127 mantine-Stack-root"
        style="
          --stack-gap: var(--mantine-spacing-md);
          --stack-align: stretch;
          --stack-justify: flex-start;
        "
      >
        <UiDeploy />
        <UiDocs />
      </div>
    </div>
  </div>
</template>
<style scoped>
.pd-inline {
  padding-inline: var(--mantine-spacing-md);
}
@media (min-width: 62em) {
  .pd-inline {
    padding-inline: var(--mantine-spacing-xl);
  }
}
</style>
