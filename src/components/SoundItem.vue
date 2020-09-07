<template>
  <div class="container bg-dark-2 mx-auto p-4 h-100 rounded">
    <b-row>
      <div class="mx-auto">
        <span v-bind:class="soundIcon" class="icon-sound-item"></span>
      </div>
    </b-row>
    <b-row>
      <div class="m-auto d-flex">
        <b-form-input
          class="mx-2 my-auto"
          v-model="volumeInput"
          type="range"
          min="0"
          max="100"
        ></b-form-input>
        <b-button :pressed.sync="isMuted" variant="outline-teal" size="xs">
          <b-icon-volume-mute-fill></b-icon-volume-mute-fill>
        </b-button>
      </div>
    </b-row>
    <b-row>
      <div class="container text-center m-1 audio-info">
        <h6>
          <hr style="margin: 0.25rem; border: 1px solid mediumseagreen" />
          Author: {{ author }} <br />Source:
          <a :href="sourceLink">{{ source }}</a>
          <br />
          <a :href="licenseLink">
            <span :class="license" class="text-white"></span>
          </a>
        </h6>
      </div>
    </b-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';

@Component
export default class SoundItem extends Vue {
  @Prop() private soundIcon!: string;
  @Prop() private soundPath!: string;
  @Prop() private source!: string;
  @Prop() private author!: string;
  @Prop() private sourceLink!: string;
  @Prop() private license!: string;
  @Prop() private licenseLink!: string;
  @Prop() private volumeInit!: number;

  volumeInput = 0;
  audio: HTMLAudioElement;
  constructor() {
    super();
    this.audio = new Audio(this.soundPath);
  }

  created(): void {
    this.volumeInput = this.volumeInit;
    this.audio.volume = this.volumeInput / 100;

    setInterval(this.randomVolume, 200);
  }

  randomVolume(): void {
    if (
      this.$store.state.isVolumeRandom &&
      this.$store.state.isPlaying &&
      !this.isMuted
    ) {
      this.volumeInput += Math.random() * (2 + 2) - 2;
      if (this.volumeInput > 100) {
        this.volumeInput = 100;
      }

      if (this.volumeInput <= 0) {
        this.volumeInput = 1;
      }
    }
  }

  get isMuted(): boolean {
    return this.volumeInput <= 0;
  }

  set isMuted(value: boolean) {
    this.volumeInput = value ? 0 : 100;
  }

  get currentVolume(): number {
    const volume = (this.volumeInput * this.$store.state.globalVolume) / 10000;
    if (volume) {
      return volume;
    }
    return 0;
  }

  @Watch('currentVolume')
  onGlobalVolumeChanged(value: number): void {
    this.audio.volume = value;
  }

  @Watch('$store.state.isPlaying')
  onPlayingChanged(value: boolean): void {
    if (!this.soundPath) {
      return;
    }
    if (value) {
      this.audio.play();
      this.audio.loop = true;
    } else {
      this.audio.pause();
    }
  }
}
</script>

<style>
.icon-sound-item {
  color: mediumseagreen;
  font-size: 7rem;
}

.audio-info {
  color: mediumseagreen;
}
</style>
