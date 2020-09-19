import { Player } from './Player';

export default class SoundCloudPlayer implements Player {
	url: string;
	volume: number;
	scFrameId: string | undefined;
	scWidget: unknown;
	isWidgetReady: boolean | undefined;

	constructor (url: string, volume: number) {
		this.url = url;
		this.volume = volume * 100;
	}

	onComponentReady (frameId: string): void {
		this.scFrameId = frameId;
		// eslint-disable-next-line
		this.setWidget((window as any).SC.Widget(this.scFrameId));
		this.bindUIState();
		console.log('sc ready');
	}

	bindUIState (): void {
		// loop
		this.getWidget().bind(this.getWidgetEvents().FINISH, () => {
    		this.getWidget().play();
		});
		this.getWidget().bind(this.getWidgetEvents().READY, () => {
    		this.isWidgetReady = true;
		});
		this.getWidget().bind(this.getWidgetEvents().ERROR, () => {
    		this.isWidgetReady = false;
		});
	}

	// eslint-disable-next-line
	getWidget (): any {
		return this.scWidget;
	}

	setWidget (widget: unknown): void {
		this.scWidget = widget;
	}

	// eslint-disable-next-line
	getWidgetEvents (): any {
		// eslint-disable-next-line
		return (window as any).SC.Widget.Events;
	}

	isReady (): boolean | undefined {
		return this.isWidgetReady;
	}

	play (): void {
		this.getWidget().play();
		this.setVolume(this.volume);
		console.log('sc play');
	}

	pause (): void {
		this.getWidget().pause();
	}

	setVolume (value: number): void {
		this.volume = value * 100;
		this.getWidget().setVolume(this.volume);
	}
}
