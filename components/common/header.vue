<template>
  <div
    class="m_3b16f56b header mantine-AppShell-header right-scroll-bar-position"
    style="
      --app-shell-header-z-index: 100;
      padding-inline: var(--mantine-spacing-lg);
      background: var(--mantine-color-dark-9);
      height: var(--header-height);
      right: 0rem;
    "
    :data-with-border="appStore.windowWidth <= 990"
  >
    <div
      class="m_4081bf90 mantine-Group-root"
      style="
        --group-gap: var(--mantine-spacing-md);
        --group-align: center;
        --group-justify: space-between;
        --group-wrap: nowrap;
        height: 100%;
      "
    >
      <button
        class="mantine-focus-auto m_fea6bf1a mantine-Burger-root m_87cf2631 mantine-UnstyledButton-root mantine-hidden-from-md"
        type="button"
        @click="setIsMenu(true)"
      >
        <div
          class="m_d4fb9cad mantine-Burger-burger"
          data-reduce-motion="true"
        ></div>
      </button>
      <div
        class="m_4081bf90 mantine-Group-root"
        style="
          --group-gap: var(--mantine-spacing-md);
          --group-align: center;
          --group-justify: end;
          --group-wrap: wrap;
          width: 100%;
          height: 100%;
        "
      >
        <button
          class="mantine-focus-auto mantine-active m_77c9d27d mantine-Button-root m_87cf2631 mantine-UnstyledButton-root __m__-r2b"
          data-size="md"
          data-with-left-section="true"
          data-with-right-section="true"
          type="button"
          data-testid="connect-wallet-button"
          style="
            border: 1px solid rgba(255, 255, 255, 0.2);
            color: var(--mantine-color-white);
            opacity: 1;
            --button-height: var(--button-height-md);
            --button-padding-x: var(--button-padding-x-md);
            --button-fz: var(--mantine-font-size-md);
            --button-color: var(--mantine-color-white);
            font-weight: 500;
            height: calc(2.5rem * var(--mantine-scale));
          "
          v-if="!account.connected"
          @click.stop="onModalConnect()"
        >
          <span class="m_80f1301b mantine-Button-inner"
            ><span class="m_a74036a mantine-Button-section" data-position="left"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="tabler-icon tabler-icon-wallet"
              >
                <path
                  d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12"
                ></path>
                <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4"></path></svg></span
            ><span class="m_811560b9 mantine-Button-label">Connect Wallet</span
            ><span
              class="m_a74036a mantine-Button-section"
              data-position="right"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="tabler-icon tabler-icon-chevron-down"
              >
                <path d="M6 9l6 6l6 -6"></path></svg></span
          ></span>
        </button>
        <div v-else class="wallet relative">
          <img class="h-10 w-10" src="../../assets/img/avatar.svg" alt="" />
          <div
            class="absolute right-0 top-0 z-10 inline-flex w-[285px] flex-col items-start justify-start gap-4 rounded-xl bg-gray-900 p-4"
          >
            <div class="flex">
              <img
                class="h-10 w-10"
                src="../../assets/img/avatar1.svg"
                alt=""
              />
              <div class="ml-4">
                <div class="mb-1 text-xs font-normal leading-none">
                  {{ account.shortAddress }}
                </div>
                <div class="text-sm font-semibold leading-normal text-blue-500">
                  View Profile
                </div>
              </div>
            </div>
            <div
              class="inline-flex w-full flex-col items-center justify-start gap-2 rounded-xl bg-gray-800 px-4 pb-3 pt-4"
            >
              <div
                class="inline-flex items-center justify-between self-stretch"
              >
                <div class="flex items-center justify-start gap-1">
                  <img class="h-6 w-6" src="../../img/busd.svg" alt="" />
                  <div class="text-sm font-semibold leading-normal">BUSD</div>
                </div>
                <div class="text-right text-sm font-semibold leading-normal">
                  10,2 BUSD
                </div>
              </div>
              <div
                class="inline-flex items-center justify-center gap-2 self-stretch rounded-xl py-2"
              >
                <div class="text-sm font-bold leading-normal text-blue-500">
                  Add funds with card
                </div>
              </div>
            </div>
            <div class="w-full">
              <div class="mb-3 flex py-2">
                <img
                  class="mr-2 h-5 w-5"
                  src="../../assets/img/mynft.svg"
                  alt=""
                />
                <div class="w-[209px] text-sm font-normal leading-normal">
                  My NFTs
                </div>
              </div>
              <div class="mb-3 flex py-2">
                <img
                  class="mr-2 h-5 w-5"
                  src="../../assets/img/Collection.svg"
                  alt=""
                />
                <div class="w-[209px] text-sm font-normal leading-normal">
                  My Collection
                </div>
              </div>
              <div class="mb-3 flex py-2">
                <img
                  class="mr-2 h-5 w-5"
                  src="../../assets/img/Coupon.svg"
                  alt=""
                />
                <div class="w-[209px] text-sm font-normal leading-normal">
                  My Coupon
                </div>
              </div>
              <div class="mb-3 flex py-2">
                <img
                  class="mr-2 h-5 w-5"
                  src="../../assets/img/setting.svg"
                  alt=""
                />
                <div class="w-[209px] text-sm font-normal leading-normal">
                  Setting
                </div>
              </div>
            </div>
            <button
              type="button"
              @click="onLogout"
              class="mt-4 w-full py-2 text-center text-sm font-bold leading-normal text-blue-500"
            >
              {{ loading.logouting ? 'Logouting...' : 'Logout' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useAppStore } from '~/store/app'
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
const appStore = useAppStore()
const { setIsModal, setIsMenu } = appStore
const props = defineProps(['windowWidth'])
function onModalConnect() {
  setIsModal(true)
}
</script>
<style data-mantine-styles="inline">
.__m__-r2b {
  padding-inline: var(--mantine-spacing-sm);
}
@media (min-width: 48em) {
  .__m__-r2b {
    padding-inline: var(--mantine-spacing-lg);
  }
}
</style>
