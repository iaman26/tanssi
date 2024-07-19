import { defineStore } from 'pinia'

export const useAppStore = defineStore({
  id: 'app',
  state: (): any => ({
    isModal: false,
    isModalTermsConditions: false,
    isTabsBox: 1,
    isStep: 1,
    windowWidth: 1140,
    isMenu: false,
    isAccount: {},
  }),

  actions: {
    setIsModal(value: boolean) {
      this.isModal = value
    },
    setIsModalTermsConditions(value: boolean) {
      this.isModalTermsConditions = value
    },
    setTabBox(value: Number) {
      this.isTabsBox = value
    },
    setIsStep(value: Number) {
      this.isStep = value
    },
    setIsWindowWidth(value: Number) {
      this.windowWidth = value
    },
    setIsMenu(value: boolean) {
      this.isMenu = value
    },
    setAccount(value: string) {
      this.isAccount = value
    },
  },
})
