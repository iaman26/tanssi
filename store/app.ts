import { defineStore } from 'pinia'

export const useAppStore = defineStore({
  id: 'app',
  state: (): any => ({
    isModal: false,
    isModalConnect2: false,
    isTabsBox: 1,
    isStep: 1,
    windowWidth: window?.innerWidth,
    isMenu: false,
  }),

  actions: {
    setIsModal(value: boolean) {
      this.isModal = value
    },
    setIsModalConnect2(value: boolean) {
      this.isModalConnect2 = value
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
  },
})
