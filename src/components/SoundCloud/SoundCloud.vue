<template>
  <iframe
    :id="id"
    :ref="id"
    :src="scr"
    width="100%"
    height="465"
    scrolling="no"
    frameborder="no" />
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
	components: {
	}
})
export default class SoundCloud extends Vue {
    @Prop() url!: string;
    @Prop() id!: string;
    scr = 'https://w.soundcloud.com/player/?url=' + this.url + '&single_active=false';

    iframeRef: HTMLIFrameElement | undefined;

    mounted (): void {
    	this.iframeRef = this.$refs[this.id] as HTMLIFrameElement;
    	this.$emit('compReady', this.iframeRef.id);
    }

    // eslint-disable-next-line
    getWidget (): any {
    	// eslint-disable-next-line
      return (window as any).SC.Widget(this.iframeRef?.id);
    }

    // eslint-disable-next-line
    getWidgetEvents (): any {
    	// eslint-disable-next-line
    	return (window as any).SC.Widget.Events;
    }
}

</script>
