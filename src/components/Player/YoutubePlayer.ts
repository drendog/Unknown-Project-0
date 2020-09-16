import { Player } from './Player';
import { getIdFromURL } from 'vue-youtube-embed';

export default class YoutubePlayer implements Player {
	url: string;
	volume: number;
	videoId = '';
	isComponentReady = false;
	playerId = '';

	constructor (url: string, volume: number) {
		this.url = url;
		this.volume = volume * 100;
		this.videoId = getIdFromURL(this.url);
		this.playerId = Math.random().toString(36).substring(7);
		console.log(this.playerId);
	}

	onComponentReady (event: Event): void {
		this.isComponentReady = true;
		// eslint-disable-next-line
		(window as any)[this.playerId] = event.target;
	}

	isReady (): boolean {
		return this.isComponentReady;
	}

	play (): void {
		// eslint-disable-next-line
		(window as any)[this.playerId].playVideo();
		this.setVolume(this.volume);
	}

	pause (): void {
		// eslint-disable-next-line
		(window as any)[this.playerId].pauseVideo();
	}

	setVolume (value: number): void {
		this.volume = value * 100;
		// eslint-disable-next-line
		(window as any)[this.playerId].setVolume(this.volume);
	}
}
