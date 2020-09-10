<template>
  <div
    id="app">
    <div
      class="background bg-dark-0">
      <header>
        <Navbar />
        <HeaderComp />
      </header>
      <main
        role="main">
        <ContentWrapper />
      </main>
      <footer />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HeaderComp from './components/HeaderComp.vue';
import Navbar from './components/Navbar.vue';
import ContentWrapper from './components/ContentWrapper.vue';

@Component({
	components: {
		HeaderComp,
		Navbar,
		ContentWrapper
	}
})
export default class App extends Vue {}
</script>

<style>
body,
html {
  height: 100%;
}

#app {
  background-color: #424242;
  height: 100%;
}

a,
a:hover {
  color: white !important;
}

.background {
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow-y: auto;
}

.bg-dark {
  background-color: #424242 !important;
}

.bg-dark-0 {
  background-color: #212121 !important;
}

.bg-dark-1 {
  background-color: #484848 !important;
}

.bg-dark-2 {
  background-color: #212121 !important;
}

.btn-teal {
  color: #fff !important;
  background-color: mediumseagreen !important;
}

.bg-black {
  background: #424242 !important;
}

.bg-dark-transparent {
  background: #212121b3 !important;
}

.custom-range::-moz-range-thumb {
  background-color: #73e6a0 !important;
}

.custom-range::-moz-range-track {
  background-color: mediumseagreen !important;
}

.border-left-teal {
  border-left: 2px solid mediumseagreen !important;
}

.custom-range {
  max-width: 8rem;
}

.btn-xs,
.btn-group-xs > .btn {
  padding: 0.15rem 0.5rem !important;
  font-size: 1rem !important;
  line-height: 1.5;
  border-radius: 0.2rem;
  border: 2px solid transparent !important;
}

.btn-outline-teal {
  color: mediumseagreen !important;
  border-color: mediumseagreen !important;
}

.btn-outline-teal:hover,
.btn-outline-teal:not(:disabled):not(.disabled).active,
.show > .btn-outline-tail.dropdown-toggle {
  color: black !important;
  background-color: mediumseagreen !important;
  border-color: mediumseagreen !important;
}
</style>
