import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap-reboot.min.css'
import '@/assets/styles/tokens.css'
import '@/assets/styles/base.css'
import '@/assets/styles/layout.css'
import '@/assets/styles/sections.css'

store.commit('SET_LOCALE', store.state.locale)

createApp(App).use(store).use(router).mount('#app')
