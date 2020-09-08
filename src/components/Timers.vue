<template>
  <b-collapse
    id="timers-collapse">
    <b-card
      v-if="!$store.state.isTimerStarted"
      class="m-auto bg-dark-1"
      style="max-width: 70%">
      <b-tabs
        pills
        justified
        card
        active-nav-item-class="bg-dark-0">
        <b-tab
          title="Stop After"
          active>
          <b-card-text>
            <TimerStartStop
              :is-stop="true" />
          </b-card-text>
        </b-tab>
        <b-tab
          title="Start After">
          <b-card-text>
            <TimerStartStop
              :is-stop="false" />
          </b-card-text>
        </b-tab>
        <b-tab
          title="Clock Settings">
          <b-card-text>
            Tab contents 2
          </b-card-text>
        </b-tab>
      </b-tabs>
      <b-card-footer>
        <div
          class="container"
          style="display: inline-block;">
          <b-button
            v-b-toggle.timers-collapse
            class="float-left"
            :pressed="false"
            size="s"
            variant="outline-teal">
            <b>CANCEL</b>
          </b-button>
          <b-button
            :pressed="false"
            class="float-right"
            size="s"
            variant="outline-teal"
            @click="$store.commit('startTimer')">
            <b>START TIMER</b>
          </b-button>
        </div>
      </b-card-footer>
    </b-card>
  </b-collapse>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TimerStartStop from './Timers/TimerStartStop.vue';

@Component({
	components: {
		TimerStartStop
	}
})
export default class Timers extends Vue {}
</script>
