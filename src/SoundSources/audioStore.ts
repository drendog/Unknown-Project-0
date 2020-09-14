export enum SOUND_TYPE {
	DIRECT,
	YOUTUBE,
	SOUNDCLOUD
}

export interface IAudioStore {
    audios: {
		id: number;
        soundIcon: string;
        soundPath: string;
        source: string;
        author?: string;
        sourceLink?: string;
        licenseIcon?: string;
        licenseLink?: string;
		volume?: number;
		isNewItem?: boolean;
		soundType: SOUND_TYPE;
    }[];
}

export const audioStore = {
	namespaced: true,
	state: (): IAudioStore => ({
		audios: [
			{
				id: Math.random(),
				soundIcon: 'mdi mdi-weather-pouring',
				soundPath:
          'https://freesound.org/data/previews/346/346562_3509815-lq.mp3',
				source: 'freesounds.org',
				author: 'lebaston100',
				sourceLink: 'https://freesound.org/people/lebaston100/sounds/346562/',
				licenseIcon: 'mdi mdi-creative-commons',
				licenseLink: 'https://creativecommons.org/licenses/by/3.0/',
				volume: 70,
				soundType: SOUND_TYPE.DIRECT
			},
			{
				id: Date.now(),
				soundIcon: 'mdi mdi-weather-lightning',
				soundPath:
          'https://freesound.org/data/previews/102/102806_649468-lq.mp3',
				source: 'freesounds.org',
				author: 'juskiddink',
				sourceLink: 'https://freesound.org/people/juskiddink/sounds/102806/',
				licenseIcon: 'mdi mdi-creative-commons',
				licenseLink: 'https://creativecommons.org/licenses/by/3.0/',
				volume: 70,
				soundType: SOUND_TYPE.DIRECT
			},
			{
				id: Date.now(),
				soundIcon: 'mdi mdi-weather-windy',
				soundPath:
          'https://freesound.org/data/previews/117/117307_2095945-lq.mp3',
				source: 'freesounds.org',
				author: 'Bucolic',
				sourceLink: 'https://freesound.org/people/Bucolic/sounds/117307/',
				licenseIcon: '',
				licenseLink: '',
				volume: 70,
				soundType: SOUND_TYPE.DIRECT
			},
			{
				id: Date.now(),
				soundIcon: 'mdi mdi-spin mdi-fan',
				soundPath:
          'https://freesound.org/data/previews/324/324220_3722909-lq.mp3',
				source: 'freesounds.org',
				author: 'SavvahSjuhengof',
				sourceLink:
          'https://freesound.org/people/SavvahSjuhengof/sounds/324220/',
				licenseIcon: 'mdi mdi-creative-commons',
				licenseLink: 'https://creativecommons.org/licenses/by/3.0/',
				volume: 0,
				soundType: SOUND_TYPE.DIRECT
			},
			{
				id: Date.now(),
				soundIcon: 'mdi mdi-spin mdi-loading',
				soundPath: '',
				source: 'Coming Soon',
				author: 'Coming Soon',
				sourceLink: '#',
				volume: 0,
				soundType: SOUND_TYPE.DIRECT
			}
		]
	}),
	mutations: {
		removeSoundItem (state: IAudioStore, value: IAudioStore['audios'][0]): void {
			state.audios = state.audios.filter((item) => item !== value);
			console.log('removed ' + value.soundPath);
		}
	}

};
