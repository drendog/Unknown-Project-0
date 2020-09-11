<template>
  <b-modal
    id="AddNewItemModal"
    header-bg-variant="dark-0"
    header-text-variant="light"
    body-bg-variant="dark-0"
    body-text-variant="light"
    footer-bg-variant="dark-0"
    footer-text-variant="light"
    title="Add a new audio source"
    hide-footer>
    <b-tabs
      pills
      justified
      card
      active-nav-item-class="bg-dark-1">
      <b-tab
        title="Direct Link"
        lazy
        active>
        <AddDirect />
      </b-tab>
      <b-tab
        title="YouTube"
        lazy>
        <b-card-text>
          <b-button
            size="s"
            variant="outline-teal">
            <b-spinner small />
            Coming soon...
          </b-button>
        </b-card-text>
      </b-tab>
      <b-tab
        title="SoundCloud">
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
  </b-modal>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AddDirect from './AddItem/AddDirect.vue';
@Component({
	components: {
		AddDirect
	}
})
export default class AddNewItem extends Vue {}
</script>

<style scoped>
.icon-add {
  font-size: 7em;
}
</style>
