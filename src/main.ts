import Vue from 'vue';
import Vuex from 'vuex';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import '@mdi/font/css/materialdesignicons.css'; // Ensure you are using css-loader

import { audioStore } from './SoundSources/audioStore';

Vue.use(Vuex);

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

const store = new Vuex.Store({
	modules: {
		audios: audioStore
	},
	state: {
		isPlaying: false,
		globalVolume: 100,
		isVolumeRandom: false,
		isTimerStarted: false,
		timeStart: new Date().getTime(),
		timeDuration: 0,
		isTimeToStop: false
	},
	mutations: {
		togglePlay (state): void {
			state.isPlaying = !state.isPlaying;
		},
		updateGlobalVolume (state, value): void {
			state.globalVolume = value;
		},
		toggleVolumeRandom (state): void {
			state.isVolumeRandom = !state.isVolumeRandom;
		},
		startTimer (state): void {
			state.timeStart = new Date().getTime();
			state.isTimerStarted = true;
			state.isPlaying = state.isTimeToStop;
		},
		stopTimer (state): void {
			state.isTimerStarted = false;
			state.isPlaying = !state.isTimeToStop;
		}
	},
	getters: {
		timeToStop (state) : number {
			return state.timeStart + state.timeDuration;
		}
	}
});

new Vue({
	store,
	render: (h) => h(App)
}).$mount('#app');
