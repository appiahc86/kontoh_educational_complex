import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './styles/main.css'
import App from './App.vue'
import router from './router'

import reveal from './directives/reveal'

const app = createApp(App)
app.directive('reveal', reveal)
app.use(router).mount('#app')
