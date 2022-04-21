import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from "bootstrap-vue-3"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import "element-plus/dist/index.css"
import Element from "element-plus"

createApp(App).use(router).use(BootstrapVue).use(Element).mount('#app')
