<template>
  <div v-if="$store.state.isPlaying">
    <b-icon-pause-fill
      class="play"
      @click="$store.commit('togglePlay')"
    ></b-icon-pause-fill>
  </div>
  <div v-else>
    <b-icon-play-fill
      class="play"
      @click="$store.commit('togglePlay')"
    ></b-icon-play-fill>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class PlayBtn extends Vue {}
</script>

<style>
.play {
  color: mediumseagreen;
  font-size: 7rem;
}

.play:hover {
  color: white;
  font-size: 7rem;
  cursor: pointer;
}
</style>
