import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createHead } from '@vueuse/head'; // ← 追加

const app = createApp(App);

const head = createHead(); // ← 追加

app.use(router);
app.use(head);             // ← head を use に追加

app.mount('#app');
