import Vue from 'vue'
// global css style
import './helper/style/reset.css'
import './helper/style/main.css'
import './helper/style/global.css'
import './helper/style/transitions.css'
// components
import App from './App.vue'

export const bus = new Vue()

Vue.config.productionTip = false
new Vue({ render: h => h(App) }).$mount('#app')
