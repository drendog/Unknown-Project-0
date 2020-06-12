<template>
  <div id="app">
    <div class="background">
      <header>
        <Navbar />
        <HeaderComp />
      </header>
      <main role="main">
        <ContentWrapper />
      </main>
      <footer></footer>
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
    ContentWrapper,
  },
})
export default class App extends Vue {}
</script>

<style>
body,
html {
  height: 100%;
}

#app {
  background-color: black;
  height: 100%;
}

a,
a:hover {
  color: white !important;
}

.background {
  background-image: url('https://i.imgur.com/iX9snKI.jpg');
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow-y: auto;
}

.btn-teal {
  color: #fff !important;
  background-color: mediumseagreen !important;
}

.bg-black {
  background: #000000 !important;
}

.bg-dark-transparent {
  background: #000000b3 !important;
}

.custom-range::-moz-range-thumb {
  background-color: white !important;
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
