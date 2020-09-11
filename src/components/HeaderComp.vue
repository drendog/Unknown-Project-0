<template>
  <div class="jumb">
    <div class="header py-4 text-light">
      <div class="container p-4 rounded-lg text-center bg-dark-1">
        <h1 class="display-4">
          Ambient Sounds Mixer
        </h1>
        <p>
          Immersive sounds to help you study, focus, increase concentration,
          calm your mind.
        </p>
        <div
          class="container p-3 bg-dark-2 rounded"
          style="max-width: 90%">
          <div class="container d-flex">
            <div
              class="m-auto"
              style="display: inline-block">
              <b-button
                v-b-tooltip.hover
                pill
                :pressed.sync="$store.state.isVolumeRandom"
                title="Random sounds volume"
                class="btn-xs"
                variant="outline-teal">
                <span
                  class="mdi mdi-waveform"
                  style="font-size: 24px" />
              </b-button>
            </div>
            <div
              class="m-auto"
              style="display: inline-block">
              <PlayBtn />
            </div>
            <div
              class="m-auto"
              style="display: inline-block">
              <b-button
                v-b-tooltip.hover
                v-b-modal.MDEModal
                pill
                title="Markdown Editor"
                :pressed="false"
                class="btn-xs"
                variant="outline-teal">
                <span
                  class="mdi mdi-language-markdown-outline"
                  style="font-size: 24px" />
              </b-button>
            </div>
          </div>
          <b-container
            class="p-3"
            style="width: 70%">
            <b-row>
              <b-col>
                <b-button
                  v-b-toggle.timers-collapse
                  v-b-tooltip.hover
                  :pressed="false"
                  title="Coming Soon..."
                  size="xs"
                  variant="outline-teal">
                  <b>TIMERS</b>
                </b-button>
              </b-col>
              <b-col>
                <b-button
                  v-b-tooltip.hover
                  :pressed="false"
                  title="Coming Soon..."
                  size="xs"
                  variant="outline-teal">
                  <b>LOAD/SAVE MIX</b>
                </b-button>
              </b-col>
              <b-col>
                <b-button
                  v-b-tooltip.hover
                  :pressed="false"
                  title="Coming Soon..."
                  size="xs"
                  variant="outline-teal">
                  <b>SHARE</b>
                </b-button>
              </b-col>
            </b-row>
          </b-container>
          <Timers />
        </div>
      </div>
    </div>
    <MDEditor />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PlayBtn from './PlayBtn.vue';
import MDEditor from './MDEditor.vue';
import Timers from './Timers.vue';

@Component({
	components: {
		PlayBtn,
		MDEditor,
		Timers
	}
})
export default class HeaderComp extends Vue {}
</script>
