import Vue from 'vue';
import Vuex from 'vuex';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import '@mdi/font/css/materialdesignicons.css'; // Ensure you are using css-loader

Vue.use(Vuex);

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

const audioStore = {
	state: () => ({
		audios: [
			{
				soundIcon: 'mdi mdi-weather-pouring',
				soundPath:
          'https://freesound.org/data/previews/346/346562_3509815-lq.mp3',
				source: 'freesounds.org',
				author: 'lebaston100',
				sourceLink: 'https://freesound.org/people/lebaston100/sounds/346562/',
				licenseIcon: 'mdi mdi-creative-commons',
				licenseLink: 'https://creativecommons.org/licenses/by/3.0/',
				volume: 70
			},
			{
				soundIcon: 'mdi mdi-weather-lightning',
				soundPath:
          'https://freesound.org/data/previews/102/102806_649468-lq.mp3',
				source: 'freesounds.org',
				author: 'juskiddink',
				sourceLink: 'https://freesound.org/people/juskiddink/sounds/102806/',
				licenseIcon: 'mdi mdi-creative-commons',
				licenseLink: 'https://creativecommons.org/licenses/by/3.0/',
				volume: 70
			},
			{
				soundIcon: 'mdi mdi-weather-windy',
				soundPath:
          'https://freesound.org/data/previews/117/117307_2095945-lq.mp3',
				source: 'freesounds.org',
				author: 'Bucolic',
				sourceLink: 'https://freesound.org/people/Bucolic/sounds/117307/',
				licenseIcon: '',
				licenseLink: '',
				volume: 70
			},
			{
				soundIcon: 'mdi mdi-spin mdi-fan',
				soundPath:
          'https://freesound.org/data/previews/324/324220_3722909-lq.mp3',
				source: 'freesounds.org',
				author: 'SavvahSjuhengof',
				sourceLink:
          'https://freesound.org/people/SavvahSjuhengof/sounds/324220/',
				licenseIcon: 'mdi mdi-creative-commons',
				licenseLink: 'https://creativecommons.org/licenses/by/3.0/',
				volume: 0
			},
			{
				soundIcon: 'mdi mdi-spin mdi-loading',
				soundPath: '',
				source: 'Coming Soon',
				author: 'Coming Soon',
				sourceLink: '#',
				licenseIcon: '',
				licenseLink: '',
				volume: 0
			}
		]
	})
};

const store = new Vuex.Store({
	modules: {
		audios: audioStore
	},
	state: {
		isPlaying: false,
		globalVolume: 100,
		isVolumeRandom: false,
		isTimerStarted: false,
		timeStart: new Date().getTime()
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
			state.isPlaying = true;
		},
		stopTimer (state): void {
			state.isTimerStarted = false;
			state.isPlaying = false;
		}
	}
});

new Vue({
	store,
	render: (h) => h(App)
}).$mount('#app');
