
import {
    Chains,
    createWeb3Auth
} from '@kolirt/vue-web3-auth'
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(
      createWeb3Auth({
        projectId: '3c5c8069ff37304cc62e07ae8cb592a8', 
        chains: [Chains.bsc, Chains.mainnet, Chains.polygon]
      })
    )
  })