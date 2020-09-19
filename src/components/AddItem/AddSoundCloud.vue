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
    <b-alert
      v-if="!isSoundValid && url !== ''"
      show
      variant="danger">
      This url is not valid.
    </b-alert>
    <img
      :src="imageSrc"
      class="img-fluid p-3"
      alt="">
    <SoundCloud
      :id="widgetId"
      ref="scValidation"
      :url="url"
      style="display:none" />
  </b-card-text>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { SOUND_TYPE } from '@/SoundSources/audioStore';
import SoundCloud from '../SoundCloud/SoundCloud.vue';

@Component({
	components: {
		SoundCloud
	}
})
export default class AddSoundCloud extends Vue {
    url = '';
    imageSrc = '';
    isSoundValid = false;
    widgetId = 'scValidation';
    author = '';

    mounted (): void {
    	this.getWidget().bind(this.getWidgetEvents().READY, () => {
    		this.updateInfo();
		  });
    }

    addSource (): void {
    	if (!this.isSoundValid) {
    		return;
    	}

    	this.getWidget().play();
    	this.$store.state.audios.audios.push({
    		id: Math.random().toString(36).substring(7),
    		author: this.author,
    		soundIcon: 'mdi mdi-soundcloud',
    		soundPath: this.url,
    		source: 'SoundCloud',
    		sourceLink: this.url,
    		isNewItem: true,
    		soundType: SOUND_TYPE.SOUNDCLOUD
    	});
    	this.$bvModal.hide('AddNewItemModal');
    }

    updateInfo (): void {
    	// eslint-disable-next-line
    	this.getWidget().getCurrentSound((sound: any) => {
    		if (sound) {
    			this.isSoundValid = true;
    			this.author = sound.label_name;
    			this.imageSrc = sound.artwork_url;
    		} else {
    			this.isSoundValid = false;
    			this.imageSrc = '';
    		}
    	});
    }

    @Watch('url')
    onUrlChange (): void {
    	this.getWidget().load(this.url);
    	this.getWidget().bind(this.getWidgetEvents().READY, () => {
    		this.updateInfo();
		  });
    }

    // eslint-disable-next-line
    getWidget (): any {
    	// eslint-disable-next-line
      return (window as any).SC.Widget(this.widgetId);
    }

    	// eslint-disable-next-line
	  getWidgetEvents (): any {
    	// eslint-disable-next-line
		  return (window as any).SC.Widget.Events;
    }
}
</script>
