<template>
  <b-card-text>
    <label>Type URL:</label>
    <b-input-group
      class="mt-3">
      <b-form-input
        v-model="url"
        type="url" />
      <b-input-group-append>
        <b-button
          :pressed="false"
          size="s"
          variant="outline-teal"
          @click="addSource()">
          <b>ADD SOURCE</b>
        </b-button>
      </b-input-group-append>
    </b-input-group>
  </b-card-text>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class AddDirect extends Vue {
    url = '';

    addSource (): void {
    	this.$store.state.audios.audios.push({
    		soundIcon: 'mdi mdi-link-variant',
    		soundPath: this.url,
    		source: 'freesounds.org'
    	});
    }
}
</script>
