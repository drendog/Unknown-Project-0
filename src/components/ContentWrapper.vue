<template>
  <div class="wrapper mx-auto">
    <div class="container bg-dark-1 rounded-lg p-4 d-flex">
      <div class="m-2 text-center">
        <div
          v-for="audio in $store.state.audios.audios"
          :key="audio.soundIcon"
          class="mx-auto p-2"
          style="max-width: 30%; min-width: 15rem; display: inline-block">
          <SoundItem
            :sound-icon="audio.soundIcon"
            :sound-path="audio.soundPath"
            :source="audio.source"
            :source-link="audio.sourceLink"
            :author="audio.author"
            :license="audio.licenseIcon"
            :license-link="audio.licenseLink"
            :volume-init="audio.volume" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SoundItem from './SoundItem.vue';

@Component({
	components: {
		SoundItem
	}
})
export default class ContentWrapper extends Vue {}
</script>
