<template>
  <div class="wrapper mx-auto">
    <div class="container bg-dark-1 rounded-lg p-4 d-flex">
      <div class="m-2 text-center">
        <div
          class="mx-auto p-2"
          style="max-width: 30%; min-width: 15rem; display: inline-block;"
          v-for="audio in $store.state.audios.audios"
          :key="audio.soundIcon"
        >
          <SoundItem
            :soundIcon="audio.soundIcon"
            :soundPath="audio.soundPath"
            :source="audio.source"
            :sourceLink="audio.sourceLink"
            :author="audio.author"
            :license="audio.licenseIcon"
            :licenseLink="audio.licenseLink"
            :volumeInit="audio.volume"
          />
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
    SoundItem,
  },
})
export default class ContentWrapper extends Vue {}
</script>
