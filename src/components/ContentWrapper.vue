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
              :sound-icon="audio.soundIcon"
              :sound-path="audio.soundPath"
              :source="audio.source"
              :source-link="audio.sourceLink"
              :author="audio.author"
              :license="audio.licenseIcon"
              :license-link="audio.licenseLink"
              :volume-init="audio.volume" />
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
import AddNewItem from './AddNewItem.vue';

@Component({
	components: {
		SoundItem,
		AddNewItem
	}
})
export default class ContentWrapper extends Vue {}
</script>
