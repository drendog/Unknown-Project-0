import { Player } from './Player';

export default class SoundCloudPlayer implements Player {
	url: string;
	volume: number;
	isComponentReady = false;
	playerId = '';
	scFrame = 'kakka';

	constructor (url: string, volume: number) {
		this.url = url;
		this.volume = volume * 100;
		this.playerId = Math.random().toString(36).substring(7);
		console.log('ops');
	}

	onComponentReady (arg: string): void {
		console.log('pirlotto' + arg);
		this.scFrame = arg;
		console.log('pirlotto2' + this.scFrame);

		this.isComponentReady = true;
		// eslint-disable-next-line
		(window as any).SC.Widget(this.scFrame);
		console.log('sc ready');
	}

	isReady (): boolean {
		return true;
	}

	play (): void {
		console.log(this.scFrame);
		// eslint-disable-next-line
		(window as any).SC.Widget((this.scFrame?.toString())).play();
		// (this.scFrame as any).play();
		this.setVolume(this.volume);
		console.log('sc play');
	}

	pause (): void {
		// eslint-disable-next-line
		(window as any).SC.Widget(this.scFrame).pause();
	}

	setVolume (value: number): void {
		this.volume = value * 100;
		// eslint-disable-next-line
		(window as any).SC.Widget(this.scFrame).setVolume(this.volume);
	}
}
