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
      v-if="isVideoValid === false"
      show
      variant="danger">
      This video is not valid.
    </b-alert>
    <img
      :src="imageSrc"
      class="img-fluid p-3"
      alt="">
  </b-card-text>
</template>

<script lang="ts">
import { SOUND_TYPE } from '@/SoundSources/audioStore';
import { Component, Vue, Watch } from 'vue-property-decorator';
import { getIdFromURL } from 'vue-youtube-embed';

@Component
export default class AddYouTube extends Vue {
    url = '';
    videoInfo: JSON | null = null;
    author = '';
    imageSrc = '';
    isVideoValid: boolean | undefined;

    get videoId (): string {
    	return getIdFromURL(this.url);
    }

    ready (event: Event): void {
    	console.log(event);
    }

    addSource (): void {
    	if (!this.isVideoValid) {
    		return;
    	}

    	this.$store.state.audios.audios.push({
    		id: Math.random().toString(36).substring(7),
    		soundIcon: 'mdi mdi-youtube',
    		soundPath: this.videoId,
    		source: 'YouTube',
    		sourceLink: this.url,
    		author: this.author,
    		isNewItem: true,
    		soundType: SOUND_TYPE.YOUTUBE
    	});
    	this.$bvModal.hide('AddNewItemModal');
    }

  @Watch('videoId')
    onVideoIdChange (): void {
    	if (this.url.length === 0) {
    		return;
    	}
    	const CORSBypass = 'https://cors-anywhere.herokuapp.com/';
    	const urlCheckVideo = CORSBypass +
        'https://www.youtube.com/oembed?url=http://www.youtube.com/watch?v=' +
        this.videoId;

  	  this.axios.get(urlCheckVideo).then(response => {
    		this.videoInfo = response.data;
    		this.author = response.data.author_name;
    		this.imageSrc = response.data.thumbnail_url;
    		this.isVideoValid = true;
    		}).catch(() => {
    		this.isVideoValid = false;
    		this.author = '';
    		this.imageSrc = '';
    	});
    }
}
</script>
