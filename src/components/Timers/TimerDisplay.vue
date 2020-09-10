<template>
  <div
    class="pomodoro">
    <div
      class="p-4 m-auto">
      <b-container
        class="bg-dark-0 rounded-lg"
        style="width: max-content;">
        <h1> {{ timerRemain }} </h1>
      </b-container>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class TimerDisplay extends Vue {
	mounted (): void {
		this.updateTimer();
		setInterval(this.updateTimer, 1000);
	}

  timerRemain = '';

  updateTimer (): void 	{
  	const distance = this.$store.getters.timeToStop - (new Date().getTime());

  	if (distance < 0) {
  		this.$store.commit('stopTimer');
  		return;
  	}

  	const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  	const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  	const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  	this.timerRemain = ('0' + hours).slice(-2) + ':' + ('0' + minutes).slice(-2) + ':' + ('0' + seconds).slice(-2);
  }
}
</script>

<style scoped>
.time-input {
  width: 4rem !important;
}
</style>
