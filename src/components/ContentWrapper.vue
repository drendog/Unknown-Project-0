<template>
  <div class="wrapper mx-auto">
    <div class="container bg-dark-1 rounded-lg p-4 d-flex">
      <div class="m-2 text-center">
        <div
          v-for="audio in $store.state.audios.audios"
          :key="audio.soundIcon"
          class="item mx-auto p-2">
          <b-container class="bg-dark-2 m-auto p-4 rounded">
            <SoundItem
              v-if="audio.soundType == direct"
              :sound-item="audio" />
            <YouTubeItem
              v-else-if="audio.soundType == youtube"
              :sound-item="audio" />
          </b-container>
        </div>
        <div class="item mx-auto p-2">
          <b-container class="m-auto p-4">
            <b-button
              v-b-modal.AddNewItemModal
              v-b-tooltip.hover
              :pressed="false"
              title="Add a new sound source"
              class="btn-xs"
              variant="outline-teal">
              <span class="mdi mdi-plus icon-add" />
            </b-button>
          </b-container>
        </div>
      </div>
    </div>
    <AddNewItem />
  </div>
</template>

<style scoped>
.item {
  max-width: 30%;
  min-width: 15rem;
  display: inline-flex;
}

.icon-add {
  font-size: 7em;
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SoundItem from './SoundItem.vue';
import YouTubeItem from './YouTubeItem.vue';
import AddNewItem from './AddNewItem.vue';
import { SOUND_TYPE } from '@/SoundSources/audioStore';

@Component({
	components: {
		SoundItem,
		AddNewItem,
		YouTubeItem
	}
})
export default class ContentWrapper extends Vue {
  direct = SOUND_TYPE.DIRECT;
  youtube = SOUND_TYPE.YOUTUBE;
}
</script>
