import "./assets/main.scss";

import { createApp } from "vue";
import App from "./App.vue";
import { createManager } from "@vue-youtube/core";

const manager = createManager({
	deferLoading: {
		enabled: true,
		autoLoad: true,
	},
});

createApp(App)
.use(manager)
.mount("#app");
