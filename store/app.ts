import { defineStore } from 'pinia'

export const useAppStore = defineStore({
  id: 'app',
  state: (): any => ({
    isModal: false
  }),

  actions: {
    setIsModal(value: boolean) {
        this.isModal = value
      },
  },
})