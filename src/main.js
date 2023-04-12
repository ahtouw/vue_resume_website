/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from "./App.vue";

import { createRouter, createWebHistory } from "vue-router";
// Views
import Resume from "@/views/Resume.vue";
import Projects from "@/views/Projects.vue";
import NotFound from "@/views/NotFound.vue";

// Composables
import { createApp } from "vue";

// Plugins
import { registerPlugins } from "@/plugins";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", alias: ["/resume"], name: "Resume", component: Resume },
    { path: "/projects/:title", name: "Projects", component: Projects },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
  ],
});

const app = createApp(App);
app.use(router);

registerPlugins(app);

app.mount("#app");
