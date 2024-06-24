import { defineStore } from 'pinia'

export const useAppStore = defineStore({
  id: 'connectWallets',
  state: (): any => ({
    isModal: false
  }),

  actions: {
    setIsModal(value: boolean) {
        this.isModal = value
      },
  },
})
