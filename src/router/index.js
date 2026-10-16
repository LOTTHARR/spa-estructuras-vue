import { createRouter, createWebHashHistory } from 'vue-router'
import VIfView from '../views/VIfView.vue'
import VShowView from '../views/VShowView.vue'
import VForView from '../views/VForView.vue'
import VKeyView from '../views/VKeyView.vue'

const routes = [
  { path: '/', redirect: '/v-if' },
  { path: '/v-if', name: 'VIf', component: VIfView },
  { path: '/v-show', name: 'VShow', component: VShowView },
  { path: '/v-for', name: 'VFor', component: VForView },
  { path: '/v-key', name: 'VKey', component: VKeyView }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router