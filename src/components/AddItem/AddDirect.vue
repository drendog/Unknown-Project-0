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
export default class AddDirect extends Vue {
    url = '';

    addSource (): void {
    	this.$store.state.audios.audios.push({
    		id: Math.random().toString(36).substring(7),
    		soundIcon: 'mdi mdi-link-variant',
    		soundPath: this.url,
    		source: 'Direct Link',
    		isNewItem: true,
    		soundType: SOUND_TYPE.DIRECT
    	});
    	this.$bvModal.hide('AddNewItemModal');
    }
}
</script>
