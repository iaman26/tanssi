import { defineStore } from 'pinia'

export const useAppStore = defineStore({
  id: 'app',
  state: (): any => ({
    isModal: false,
    isTabsBox: 1,
  }),

  actions: {
    setIsModal(value: boolean) {
      this.isModal = value
    },
    setTabBox(value: boolean) {
      this.isTabsBox = value
    },
  },
})
