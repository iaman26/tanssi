<template>
  <UiModal>
    <div class="m_60c222c7 m_1f958f16 mantine-Modal-inner">
      <section
        class="m_fd1ab0aa m_54c44539 mantine-Modal-content m_1b7284a3 mantine-Paper-root"
        data-modal-content="true"
        role="dialog"
        tabindex="-1"
        aria-modal="true"
        aria-describedby="mantine-crsx3zise-body"
        style="
          border-radius: calc(1rem * var(--mantine-scale));
          background-color: rgb(14, 18, 28);
          --paper-radius: var(--mantine-radius-lg);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition-property: opacity, transform;
          transition-duration: 200ms;
          transition-timing-function: ease;
          opacity: 1;
          transform: translateY(0px);
        "
        v-outside="closeModal"
      >
        <div class="m_5df29311 mantine-Modal-body" id="mantine-crsx3zise-body">
          <div
            class="m_89d60db1 mantine-Tabs-root"
            data-variant="default"
            data-orientation="horizontal"
            id="mantine-q9b24u2lg"
            style="
              --tabs-radius: var(--mantine-radius-default);
              --tabs-color: var(--mantine-color-tanssiTeal-filled);
            "
          >
            <div
              class="m_b0c91715 mantine-Tabs-panel"
              data-orientation="horizontal"
              role="tabpanel"
              id="mantine-q9b24u2lg-panel-extensions"
              aria-labelledby="mantine-q9b24u2lg-tab-extensions"
            >
              <div
                class="m_6d731127 mantine-Stack-root"
                style="
                  --stack-gap: var(--mantine-spacing-md);
                  --stack-align: stretch;
                  --stack-justify: flex-start;
                "
              >
                <div class="m_4451eb3a mantine-Center-root">
                  <img
                    alt="Tanssi"
                    fetchpriority="high"
                    width="110"
                    height="34"
                    decoding="async"
                    data-nimg="1"
                    src="../../../assets/img/logo.webp"
                    style="color: transparent"
                  />
                </div>
                <p
                  class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
                  data-size="xs"
                  style="
                    --text-fz: var(--mantine-font-size-xs);
                    --text-lh: var(--mantine-line-height-xs);
                    color: var(--mantine-color-gray-6);
                    text-align: center;
                  "
                >
                  Enjoy the easiest way to deploy Appchains
                </p>
                <div class="" style="margin-inline: var(--mantine-spacing-xs)">
                  <div
                    class="m_3eebeb36 mantine-Divider-root"
                    data-orientation="horizontal"
                    role="separator"
                    style="color: var(--mantine-color-white); opacity: 0.1"
                  ></div>
                </div>
                <div
                  class="m_6d731127 mantine-Stack-root"
                  style="
                    --stack-gap: var(--mantine-spacing-xs);
                    --stack-align: stretch;
                    --stack-justify: flex-start;
                  "
                >
                  <button
                    class="mantine-focus-auto ExtensionButton_button__lfkkt m_87cf2631 mantine-UnstyledButton-root"
                    type="button"
                    data-selected="false"
                    data-testid="polkadot-js"
                    data-installed="false"
                    style="--button-color: 255, 140, 0"
                    @click="isConnectMetamask()"
                  >
                    <div
                      class="m_410352e9 mantine-Grid-root __m__-rf3"
                      style="--grid-align: center"
                    >
                      <div class="m_dee7bd2f mantine-Grid-inner">
                        <div class="m_96bdd299 mantine-Grid-col __m__-rf5">
                          <img
                            alt="Polkadot{.js}"
                            data-disabled="true"
                            loading="lazy"
                            width="140"
                            height="140"
                            decoding="async"
                            data-nimg="1"
                            class="m_9e117634 mantine-Image-root"
                            src="../../../assets/img/logo_metamask.svg"
                            style="
                              color: transparent;
                              --image-object-fit: scale-down;
                              height: 30px;
                            "
                          />
                        </div>

                        <div class="m_96bdd299 mantine-Grid-col __m__-rf8">
                          <p
                            class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
                            style="
                              color: var(--mantine-color-white);
                              font-weight: 500;
                            "
                          >
                            MetaMask
                          </p>
                        </div>

                        <div
                          class="m_96bdd299 mantine-Grid-col __m__-rfb"
                          style="text-align: center"
                        >
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 448 512"
                            height="10"
                            width="10"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </button>
                  <button
                    class="mantine-focus-auto ExtensionButton_button__lfkkt m_87cf2631 mantine-UnstyledButton-root"
                    type="button"
                    data-selected="false"
                    data-testid="talisman"
                    data-installed="false"
                    style="--button-color: 253, 72, 72"
                  >
                    <div
                      class="m_410352e9 mantine-Grid-root __m__-re2"
                      style="--grid-align: center"
                    >
                      <div class="m_dee7bd2f mantine-Grid-inner">
                        <div class="m_96bdd299 mantine-Grid-col __m__-re4">
                          <img
                            alt="Talisman"
                            data-disabled="true"
                            loading="lazy"
                            width="64"
                            height="64"
                            decoding="async"
                            data-nimg="1"
                            class="m_9e117634 mantine-Image-root"
                            src="../../../assets/icon/talisman.svg"
                            style="
                              color: transparent;
                              --image-object-fit: scale-down;
                              height: 30px;
                            "
                          />
                        </div>
                        <div class="m_96bdd299 mantine-Grid-col __m__-re7">
                          <p
                            class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
                            style="
                              color: var(--mantine-color-white);
                              font-weight: 500;
                            "
                          >
                            Talisman
                          </p>
                        </div>
                        <div
                          class="m_96bdd299 mantine-Grid-col __m__-rea"
                          style="text-align: center"
                        >
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 448 512"
                            height="10"
                            width="10"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div></button
                  ><button
                    class="mantine-focus-auto ExtensionButton_button__lfkkt m_87cf2631 mantine-UnstyledButton-root"
                    type="button"
                    data-selected="false"
                    data-testid="subwallet-js"
                    data-installed="false"
                    style="--button-color: 3, 78, 255"
                  >
                    <div
                      class="m_410352e9 mantine-Grid-root __m__-red"
                      style="--grid-align: center"
                    >
                      <div class="m_dee7bd2f mantine-Grid-inner">
                        <div class="m_96bdd299 mantine-Grid-col __m__-ref">
                          <img
                            alt="SubWallet"
                            data-disabled="true"
                            loading="lazy"
                            width="384"
                            height="576"
                            decoding="async"
                            data-nimg="1"
                            class="m_9e117634 mantine-Image-root"
                            src="../../../assets/icon/subwallet.webp"
                            style="
                              color: transparent;
                              --image-object-fit: scale-down;
                              height: 30px;
                            "
                          />
                        </div>

                        <div class="m_96bdd299 mantine-Grid-col __m__-rei">
                          <p
                            class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
                            style="
                              color: var(--mantine-color-white);
                              font-weight: 500;
                            "
                          >
                            SubWallet
                          </p>
                        </div>

                        <div
                          class="m_96bdd299 mantine-Grid-col __m__-rel"
                          style="text-align: center"
                        >
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 448 512"
                            height="10"
                            width="10"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div></button
                  ><button
                    class="mantine-focus-auto ExtensionButton_button__lfkkt m_87cf2631 mantine-UnstyledButton-root"
                    type="button"
                    data-selected="false"
                    data-testid="enkrypt"
                    data-installed="false"
                    style="--button-color: 144, 75, 255"
                  >
                    <div
                      class="m_410352e9 mantine-Grid-root __m__-reo"
                      style="--grid-align: center"
                    >
                      <div class="m_dee7bd2f mantine-Grid-inner">
                        <div class="m_96bdd299 mantine-Grid-col __m__-req">
                          <img
                            alt="Enkrypt"
                            data-disabled="true"
                            loading="lazy"
                            width="250"
                            height="251"
                            decoding="async"
                            data-nimg="1"
                            class="m_9e117634 mantine-Image-root"
                            src="../../../assets/icon/Fenkrypt.webp"
                            style="
                              color: transparent;
                              --image-object-fit: scale-down;
                              height: 30px;
                            "
                          />
                        </div>

                        <div class="m_96bdd299 mantine-Grid-col __m__-ret">
                          <p
                            class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
                            style="
                              color: var(--mantine-color-white);
                              font-weight: 500;
                            "
                          >
                            Enkrypt
                          </p>
                        </div>

                        <div
                          class="m_96bdd299 mantine-Grid-col __m__-rf0"
                          style="text-align: center"
                        >
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 448 512"
                            height="10"
                            width="10"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div></button
                  ><button
                    class="mantine-focus-auto ExtensionButton_button__lfkkt m_87cf2631 mantine-UnstyledButton-root"
                    type="button"
                    data-selected="false"
                    data-testid="polkadot-js"
                    data-installed="false"
                    style="--button-color: 255, 140, 0"
                  >
                    <div
                      class="m_410352e9 mantine-Grid-root __m__-rf3"
                      style="--grid-align: center"
                    >
                      <div class="m_dee7bd2f mantine-Grid-inner">
                        <div class="m_96bdd299 mantine-Grid-col __m__-rf5">
                          <img
                            alt="Polkadot{.js}"
                            data-disabled="true"
                            loading="lazy"
                            width="140"
                            height="140"
                            decoding="async"
                            data-nimg="1"
                            class="m_9e117634 mantine-Image-root"
                            src="../../../assets/icon/polkadot.svg"
                            style="
                              color: transparent;
                              --image-object-fit: scale-down;
                              height: 30px;
                            "
                          />
                        </div>

                        <div class="m_96bdd299 mantine-Grid-col __m__-rf8">
                          <p
                            class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
                            style="
                              color: var(--mantine-color-white);
                              font-weight: 500;
                            "
                          >
                            Polkadot{.js}
                          </p>
                        </div>

                        <div
                          class="m_96bdd299 mantine-Grid-col __m__-rfb"
                          style="text-align: center"
                        >
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 448 512"
                            height="10"
                            width="10"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div
              class="m_b0c91715 mantine-Tabs-panel"
              data-orientation="horizontal"
              role="tabpanel"
              id="mantine-q9b24u2lg-panel-accounts"
              aria-labelledby="mantine-q9b24u2lg-tab-accounts"
              style="display: none"
            ></div>
          </div>
        </div>
      </section>
    </div>
  </UiModal>
</template>
<style scoped>
.__m__-re2 {
  --grid-gutter: var(--mantine-spacing-md);
}
.__m__-re4 {
  --col-flex-grow: auto;
  --col-flex-basis: 16.666666666666668%;
  --col-max-width: 16.666666666666668%;
}
.__m__-re7 {
  --col-flex-grow: auto;
  --col-flex-basis: 66.66666666666667%;
  --col-max-width: 66.66666666666667%;
}
.__m__-rea {
  --col-flex-grow: auto;
  --col-flex-basis: 16.666666666666668%;
  --col-max-width: 16.666666666666668%;
}
.__m__-red {
  --grid-gutter: var(--mantine-spacing-md);
}
.__m__-ref {
  --col-flex-grow: auto;
  --col-flex-basis: 16.666666666666668%;
  --col-max-width: 16.666666666666668%;
}
.__m__-rei {
  --col-flex-grow: auto;
  --col-flex-basis: 66.66666666666667%;
  --col-max-width: 66.66666666666667%;
}
.__m__-rel {
  --col-flex-grow: auto;
  --col-flex-basis: 16.666666666666668%;
  --col-max-width: 16.666666666666668%;
}
.__m__-reo {
  --grid-gutter: var(--mantine-spacing-md);
}
.__m__-req {
  --col-flex-grow: auto;
  --col-flex-basis: 16.666666666666668%;
  --col-max-width: 16.666666666666668%;
}
.__m__-ret {
  --col-flex-grow: auto;
  --col-flex-basis: 66.66666666666667%;
  --col-max-width: 66.66666666666667%;
}
.__m__-rf0 {
  --col-flex-grow: auto;
  --col-flex-basis: 16.666666666666668%;
  --col-max-width: 16.666666666666668%;
}
.__m__-rf3 {
  --grid-gutter: var(--mantine-spacing-md);
}
.__m__-rf5 {
  --col-flex-grow: auto;
  --col-flex-basis: 16.666666666666668%;
  --col-max-width: 16.666666666666668%;
}
.__m__-rf8 {
  --col-flex-grow: auto;
  --col-flex-basis: 66.66666666666667%;
  --col-max-width: 66.66666666666667%;
}
.__m__-rfb {
  --col-flex-grow: auto;
  --col-flex-basis: 16.666666666666668%;
  --col-max-width: 16.666666666666668%;
}
</style>
<script setup>
import outside from '@venegrad/vue3-click-outside'
import {
  $off,
  $on,
  Events,
  account,
  accountDetails,
  chain,
  getAvailableChains,
  connect,
  disconnect,
  switchChain,
  selectChain,
} from '@kolirt/vue-web3-auth'
import { useAppStore } from '~/store/app'
const emit = defineEmits({
  closeModal: false,
})
const appStore = useAppStore()
const { setIsModal } = appStore
const loading = reactive({
  connecting: false,
  connectingTo: {} || any,
  switchingTo: {} || any,
  logouting: false,
})
async function isConnectMetamask(chain) {
  const handler = (state) => {
    if (!state) {
      if (chain) {
        loading.connectingTo[chain.id] = false
      } else {
        loading.connecting = false
      }
      $off(Events.ModalStateChanged, handler)
    }
  }
  $on(Events.ModalStateChanged, handler)
  if (chain) {
    loading.connectingTo[chain.id] = true
  } else {
    setIsModal(false)
    loading.connecting = true
  }
  await connect(chain)
}

function closeModal() {
  emit('closeModal')
}
</script>
