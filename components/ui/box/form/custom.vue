<template>
  <div
    class="m_66836ed3 mantine-Alert-root"
    id="mantine-v9n42suzw"
    role="alert"
    aria-describedby="mantine-v9n42suzw-body"
    aria-labelledby="mantine-v9n42suzw-title"
    style="
      border: 1px solid rgba(225, 53, 53, 0.5);
      --alert-bg: rgba(225, 53, 53, 0.1);
      --alert-color: #e13535;
      --alert-bd: calc(0.0625rem * var(--mantine-scale)) solid transparent;
    "
  >
    <div class="m_a5d60502 mantine-Alert-wrapper">
      <div class="m_667f2a6a mantine-Alert-icon">
        <div
          class=""
          style="
            width: calc(1.25rem * var(--mantine-scale));
            height: calc(1.25rem * var(--mantine-scale));
          "
        >
          <div
            class="m_4451eb3a mantine-Center-root"
            style="
              margin-top: -10px;
              margin-left: -10px;
              background: rgb(200, 75, 75);
              width: calc(1.25rem * var(--mantine-scale));
              height: calc(1.25rem * var(--mantine-scale));
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="75%"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="tabler-icon tabler-icon-exclamation-mark"
            >
              <path d="M12 19v.01"></path>
              <path d="M12 15v-10"></path>
            </svg>
          </div>
        </div>
      </div>
      <div class="m_667c2793 mantine-Alert-body">
        <div
          class="m_6a03f287 mantine-Alert-title"
          style="
            color: var(--mantine-color-white);
            font-weight: 500;
            font-size: 16px;
          "
        >
          <span
            id="mantine-v9n42suzw-title"
            class="m_698f4f23 mantine-Alert-label"
            >Warning</span
          >
        </div>
        <div
          id="mantine-v9n42suzw-body"
          class="m_7fa78076 mantine-Alert-message"
        >
          Please keep in mind that uploading a customized runtime is still in
          Beta. Certain parameters in the runtime you upload need to be
          configured to match Tanssi specifications which you can find in the
          <a
            class="mantine-focus-auto m_849cf0da m_b6d8b162 mantine-Text-root mantine-Anchor-root"
            data-size="sm"
            data-underline="hover"
            href="https://docs.tanssi.network/builders/deploy-manage/dapp/deploy/#custom"
            rel="noopener noreferrer"
            target="_blank"
            tabindex="0"
            style="
              --text-fz: var(--mantine-font-size-sm);
              --text-lh: var(--mantine-line-height-sm);
              color: rgb(72, 166, 167);
            "
            >Tanssi Documentation page</a
          >.
        </div>
      </div>
    </div>
  </div>
  <div class="UploadTemplate_dropBox__Li66Y">
    <div
      class="mantine-focus-auto UploadTemplate_body__RWfmK m_d46a4834 mantine-Dropzone-root"
      data-variant="light"
      data-idle="true"
      data-activate-on-click="true"
      role="presentation"
      tabindex="0"
      style="
        --dropzone-radius: var(--mantine-radius-default);
        --dropzone-accept-color: var(--mantine-color-tanssiTeal-light-color);
        --dropzone-accept-bg: var(--mantine-color-tanssiTeal-light);
        --dropzone-reject-color: var(--mantine-color-red-light-color);
        --dropzone-reject-bg: var(--mantine-color-red-light);
        background: var(--mantine-color-dark-7);
      "
    >
      <input
        accept="application/json"
        multiple=""
        type="file"
        tabindex="-1"
        style="display: none"
      />
      <div class="m_b85f7144 mantine-Dropzone-inner">
        <div
          class="UploadTemplate_inner__DApRc m_4081bf90 mantine-Group-root"
          style="
            --group-gap: var(--mantine-spacing-lg);
            --group-align: center;
            --group-justify: center;
            --group-wrap: wrap;
          "
        >
          <img
            alt="json-icon"
            loading="lazy"
            width="50"
            height="50"
            decoding="async"
            data-nimg="1"
            src="../../../../assets/icon/json-dark-icon.svg"
            style="color: transparent"
          />
          <div>
            <p
              class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
              data-size="xl"
              data-inline="true"
              style="
                --text-fz: var(--mantine-font-size-xl);
                --text-lh: var(--mantine-line-height-xl);
                color: var(--mantine-color-bright);
              "
            >
              Drag here or click to select
            </p>
            <p
              class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
              data-size="sm"
              data-inline="true"
              style="
                --text-fz: var(--mantine-font-size-sm);
                --text-lh: var(--mantine-line-height-sm);
                margin-top: calc(0.4375rem * var(--mantine-scale));
                color: var(--mantine-color-bright);
              "
            >
              Attach json raw spec file, it should not exceed 2MB
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.UploadTemplate_dropBox__Li66Y {
  height: 300px;
}
</style>
