<template>
  <b-collapse
    id="timers-collapse">
    <b-card
      class="m-auto bg-dark-1"
      style="max-width: 70%">
      <TimerDisplay v-if="$store.state.isTimerStarted" />
      <b-tabs
        v-else
        pills
        justified
        card
        active-nav-item-class="bg-dark-0">
        <b-tab
          title="Stop After"
          lazy
          active>
          <b-card-text>
            <TimerStartStop :is-time-to-stop="true" />
          </b-card-text>
        </b-tab>
        <b-tab
          title="Start After"
          lazy>
          <b-card-text>
            <TimerStartStop :is-time-to-stop="false" />
          </b-card-text>
        </b-tab>
        <b-tab
          title="Clock Settings">
          <b-card-text>
            <b-button
              size="s"
              variant="outline-teal">
              <b-spinner small />
              Coming soon...
            </b-button>
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
            v-if="$store.state.isTimerStarted"
            :pressed="false"
            class="float-right"
            size="s"
            variant="outline-teal"
            @click="$store.commit('stopTimer')">
            <b>STOP TIMER</b>
          </b-button>
          <b-button
            v-else
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
import TimerDisplay from './Timers/TimerDisplay.vue';

@Component({
	components: {
		TimerStartStop,
		TimerDisplay
	}
})
export default class Timers extends Vue {}
</script>
