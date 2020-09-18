<template>
  <b-card-text>
    <label>Type URL:</label>
    <b-form @submit.prevent="addSource()">
      <b-input-group
        class="mt-3">
        <b-form-input
          v-model="url"
          class="border-teal"
          type="url" />
        <b-input-group-append>
          <b-button
            :pressed="false"
            size="s"
            variant="teal"
            type="submit">
            <b>ADD SOURCE</b>
          </b-button>
        </b-input-group-append>
      </b-input-group>
    </b-form>
  </b-card-text>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { SOUND_TYPE } from '@/SoundSources/audioStore';

@Component
export default class AddSoundCloud extends Vue {
    url = '';

    addSource (): void {
    	this.$store.state.audios.audios.push({
    		id: Date.now(),
    		soundIcon: 'mdi mdi-link-variant',
    		soundPath: this.url,
    		source: 'Direct SoundCloud',
    		isNewItem: true,
    		soundType: SOUND_TYPE.SOUNDCLOUD
    	});
    	this.$bvModal.hide('AddNewItemModal');
    }
}
</script>
