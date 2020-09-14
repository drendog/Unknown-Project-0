<template>
  <div id="soundItem">
    <b-row
      class="float-right">
      <b-button-close
        v-b-tooltip.hover
        title="Remove"
        @click="remove()" />
    </b-row>
    <b-row>
      <div class="mx-auto">
        <span
          :class="soundItem.soundIcon"
          class="icon-sound-item" />
      </div>
    </b-row>
    <b-row>
      <div class="m-auto d-flex">
        <b-form-input
          v-model="volumeInput"
          class="mx-2 my-auto"
          type="range"
          min="0"
          max="100" />
        <b-button
          :pressed.sync="isMuted"
          variant="outline-teal"
          size="xs">
          <b-icon-volume-mute-fill />
        </b-button>
      </div>
    </b-row>
    <b-row>
      <b-container class="text-center m-1 audio-info">
        <h6>
          <hr style="margin: 0.25rem; border: 1px solid mediumseagreen">
          <span
            v-b-tooltip.hover
            class="mdi mdi-account-music"
            title="Author" />: {{ soundItem.author }}
          <br><span
            v-b-tooltip.hover
            class="mdi mdi-web"
            title="Source" />:
          <a :href="soundItem.sourceLink">{{ soundItem.source }}</a>
          <br>
          <a :href="soundItem.licenseLink">
            <span
              :class="soundItem.licenseIcon"
              class="text-white" />
          </a>
        </h6>
      </b-container>
    </b-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import { IAudioStore } from '../SoundSources/audioStore';

@Component
export default class SoundItem extends Vue {
  @Prop() protected soundItem!: IAudioStore['audios'][0];

  volumeInput = 70;
  audio = new Audio();
  state = 0;

  mounted (): void {
  	this.audio = new Audio(this.soundItem.soundPath);
  	this.state = this.audio.networkState;

  	if (this.soundItem.volume !== undefined) {
  		this.volumeInput = this.soundItem.volume;
  	}

  	this.audio.volume = this.volumeInput / 100;
  	setInterval(this.randomVolume, 200);
  }

  remove (): void {
  	this.$store.commit('removeSoundItem', this.soundItem);
  }

  showAudioError (): void {
  	this.$bvToast.toast(`Cannot load ${this.soundItem.soundPath}`, {
  		title: 'Audio Error',
  		variant: 'danger',
  		autoHideDelay: 5000,
  		appendToast: true
  	});
  }

  randomVolume (): void {
  	if (this.$store.state.isVolumeRandom &&
      this.$store.state.isPlaying &&
      !this.isMuted) {
  		this.volumeInput += Math.random() * (2 + 2) - 2;
  		if (this.volumeInput > 100) {
  			this.volumeInput = 100;
  		}

  		if (this.volumeInput <= 0) {
  			this.volumeInput = 1;
  		}
  	}
  }

  get isMuted (): boolean {
  	return this.volumeInput <= 0;
  }

  set isMuted (value: boolean) {
  	this.volumeInput = value ? 0 : 100;
  }

  get currentVolume (): number {
  	const volume = (this.volumeInput * this.$store.state.globalVolume) / 10000;
  	if (volume) {
  		return volume;
  	}
  	return 0;
  }

  @Watch('currentVolume')
  onGlobalVolumeChanged (value: number): void {
  	this.audio.volume = value;
  }

  @Watch('$store.state.isPlaying')
  onPlayingChanged (value: boolean): void {
  	if (!this.soundItem.soundPath) {
  		return;
  	}
  	if (value) {
  		if (this.audio.networkState === 3) {
  			this.showAudioError();
  			return;
  		}
  		this.audio.play();
  		this.audio.loop = true;
  	} else {
  		this.audio.pause();
  	}
  }
}
</script>

<style scoped>
.icon-sound-item {
  color: mediumseagreen;
  font-size: 7rem;
}

.audio-info {
  color: mediumseagreen;
}
</style>
