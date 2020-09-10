<template>
  <div
    class="pomodoro">
    <div
      class="p-4 m-auto d-flex">
      <b-input-group
        class="ml-auto p-2"
        style="width: auto; flex-wrap: nowrap">
        <b-form-input
          v-model="hours"
          class="time-input"
          type="number"
          min="0" />
        <b-input-group-append>
          <b-input-group-text>
            Hours
          </b-input-group-text>
        </b-input-group-append>
      </b-input-group>
      <b-input-group
        class="mr-auto p-2"
        style="width: auto; flex-wrap: nowrap">
        <b-form-input
          v-model="minutes"
          class="time-input"
          type="number"
          min="0" />
        <b-input-group-append>
          <b-input-group-text>
            Minutes
          </b-input-group-text>
        </b-input-group-append>
      </b-input-group>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';

@Component
export default class TimerStartStop extends Vue {
    @Prop() isTimeToStop!: boolean;
    hours = 0;
    minutes = this.isTimeToStop ? 50 : 5;

    mounted (): void {
    	this.$store.state.timeDuration = this.timeDuration;
    	this.$store.state.isTimeToStop = this.isTimeToStop;
    }

    get timeDuration (): number {
    	return this.hours * 3.6 * Math.pow(10, 6) + this.minutes * 60 * Math.pow(10, 3);
    }

    @Watch('timeDuration')
    onGlobalVolumeChanged (): void {
  	  this.$store.state.timeDuration = this.timeDuration;
    }
}
</script>

<style scoped>
.time-input {
  width: 4rem !important;
}
</style>
