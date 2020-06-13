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
        <div class="container p-3 bg-dark-2 rounded" style="max-width: 90%;">
          <div class="container d-flex">
            <div class="m-auto" style="display: inline-block;">
              <b-button
                pill
                :pressed.sync="$store.state.isVolumeRandom"
                v-b-tooltip.hover
                title="Random sounds volume"
                class="btn-xs"
                variant="outline-teal"
              >
                <span class="mdi mdi-waveform" style="font-size: 24px;"></span>
              </b-button>
            </div>
            <div class="m-auto" style="display: inline-block;">
              <PlayBtn />
            </div>
            <div class="m-auto" style="display: inline-block;">
              <b-button
                pill
                v-b-tooltip.hover
                title="Markdown Editor Coming Soon..."
                :pressed="false"
                class="btn-xs"
                variant="outline-teal"
              >
                <span
                  class="mdi mdi-language-markdown-outline"
                  style="font-size: 24px;"
                ></span>
              </b-button>
            </div>
          </div>
          <div class="container p-3" style="width: 70%;">
            <b-row>
              <b-col>
                <b-button
                  :pressed="false"
                  v-b-tooltip.hover
                  title="Coming Soon..."
                  size="xs"
                  variant="outline-teal"
                >
                  <b>TIMERS</b>
                </b-button>
              </b-col>
              <b-col>
                <b-button
                  :pressed="false"
                  v-b-tooltip.hover
                  title="Coming Soon..."
                  size="xs"
                  variant="outline-teal"
                >
                  <b>LOAD/SAVE MIX</b>
                </b-button>
              </b-col>
              <b-col>
                <b-button
                  :pressed="false"
                  v-b-tooltip.hover
                  title="Coming Soon..."
                  size="xs"
                  variant="outline-teal"
                >
                  <b>SHARE</b>
                </b-button>
              </b-col>
            </b-row>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PlayBtn from './PlayBtn.vue';

@Component({
  components: {
    PlayBtn,
  },
})
export default class HeaderComp extends Vue {}
</script>
