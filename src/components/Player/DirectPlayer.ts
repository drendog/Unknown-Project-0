import { Player } from './Player';

export default class DirectPlayer implements Player {
    url: string;
    volume: number;
    audio = new Audio();
    constructor (url: string, volume: number) {
    	this.url = url;
    	this.volume = volume / 100;
    	this.audio.src = this.url;
    	this.audio.volume = this.volume;
    }

    isReady (): boolean {
    	if (this.audio.networkState === 3) {
    		return false;
    	}
    	return true;
    }

    play (): void {
    	this.audio.play();
    	this.audio.loop = true;
    }

    pause (): void {
    	this.audio.pause();
    	this.audio.loop = true;
    }

    setVolume (value: number): void {
    	this.audio.volume = this.volume = value;
    }

    onComponentReady (event: Event): void {
    	console.log('Component Ready on Direct?');
    	console.log(event.target);
    }

    onStateChange (state: unknown): void {
    	console.log('error get state ' + state);
    }
}
