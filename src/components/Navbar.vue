<template>
  <b-navbar type="dark" class="bg-dark-transparent" sticky>
    <b-row class="d-flex w-100">
      <b-col>
        <div class="d-flex float-left">
          <b-form-input
            class="mx-2 my-auto"
            v-model="globalVolume"
            type="range"
            min="0"
            max="100"
          ></b-form-input>
          <b-button :pressed.sync="isMuted" variant="outline-teal" size="xs">
            <b-icon-volume-mute-fill></b-icon-volume-mute-fill>
          </b-button>
        </div>
      </b-col>
      <b-col>
        <div class="float-right">
          <b-button v-b-toggle.sidebar-right variant="outline-teal" size="xs">
            <b-icon-person></b-icon-person>
          </b-button>
        </div>
      </b-col>
    </b-row>
    <b-sidebar
      id="sidebar-right"
      title="User Panel"
      bg-variant="dark"
      text-variant="light"
      right
      sidebar-class="border-left-teal"
      backdrop-variant="dark"
      backdrop
    >
      <div class="px-3 py-2">
        <p>
          Coming Soon...
        </p>
        <b-img :src="require(`@/assets/Doge.webp`)" fluid thumbnail> </b-img>
      </div>
    </b-sidebar>
  </b-navbar>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Navbar extends Vue {
  get globalVolume(): number {
    return this.$store.state.globalVolume;
  }

  set globalVolume(value: number) {
    this.$store.commit('updateGlobalVolume', value);
  }

  get isMuted() {
    return this.globalVolume <= 0;
  }

  set isMuted(value: boolean) {
    this.globalVolume = value ? 0 : 100;
  }
}
</script>
