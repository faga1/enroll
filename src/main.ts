import { createApp } from 'vue';
import './registerServiceWorker';
import router from './router';
import App from './App.vue';
import 'element-plus/es/components/message/style/index';

const app = createApp(App);
app.use(router);
app.mount('#app');
