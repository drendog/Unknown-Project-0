<template>
  <iframe
    id="peppo"
    ref="iframe"
    src="https://w.soundcloud.com/player/?url=https://api.soundcloud.com/users/1539950/favorites"
    width="100%"
    height="465"
    scrolling="no"
    frameborder="no" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
	components: {
	}
})
export default class SoundCloud extends Vue {
    iframeRef: HTMLIFrameElement | undefined;

    mounted (): void {
    	this.iframeRef = this.$refs.iframe as HTMLIFrameElement;
    	this.$emit('ready', this.iframeRef.id);
    	console.log('ready id:' + this.iframeRef.id);
    }
}

</script>
