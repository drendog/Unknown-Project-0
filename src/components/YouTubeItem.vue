<template>
  <SoundItem />
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import { IAudioStore } from '../SoundSources/audioStore';
import SoundItem from './SoundItem.vue';
import { getIdFromURL } from 'vue-youtube-embed';

@Component
export default class YouTubeItem extends SoundItem {
	get videoId (): string {
		return getIdFromURL(this.soundItem.soundPath);
	}
}
</script>
