import { createApp } from 'vue';

import { setupPinia } from '@/plugins/pinia';
import { setupRouter } from '@/plugins/router';

import App from './App.vue';

import '@/assets/scss/tailwind-base.scss';
import 'ant-design-vue/dist/antd.less';
import '@/assets/scss/tailwind.scss';
import '@/assets/scss/all.scss';

const app = createApp(App);

setupPinia(app);
setupRouter(app);

app.mount('#app');
