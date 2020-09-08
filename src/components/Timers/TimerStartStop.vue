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
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class TimerStartStop extends Vue {
    @Prop() private isStop!: boolean;

    hours = 0;
    minutes = this.isStop ? 50 : 5;
}
</script>

<style scoped>
.time-input {
  width: 4rem !important;
}
</style>
