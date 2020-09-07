<template>
  <b-modal
    id="MDEModal"
    header-bg-variant="dark-0"
    header-text-variant="light"
    body-bg-variant="dark-0"
    body-text-variant="light"
    footer-bg-variant="dark-0"
    footer-text-variant="light"
    size="xl"
    title="Unknown Markdown Editor"
  >
    <div class="editor">
      <b-form-textarea
        id="textarea-auto-height"
        class="md-textarea"
        v-model="text"
      ></b-form-textarea>
      <div class="compiled-md">
        <div v-html="compiledMarkdown"></div>
      </div>
    </div>
    <template v-slot:modal-footer="{ cancel }">
      <b-button size="sm" variant="outline-teal" v-on:click="saveMD()">
        Save as Markdown
      </b-button>
      <b-button size="sm" variant="outline-teal" v-on:click="savePage()">
        Save as HTML
      </b-button>
      <!-- Button with custom close trigger value -->
      <b-button size="sm" variant="outline-teal" @click="cancel()">
        Cancel
      </b-button>
    </template>
  </b-modal>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import marked from 'marked';
@Component
export default class MDEditor extends Vue {
  text = '# Markdown editor\n\n## Welcome to Markdown editor\n\nHave fun!';

  get compiledMarkdown(): string {
    return marked(this.text);
  }

  saveMD() {
    this.download('MD_Notes.md', this.text);
  }

  savePage() {
    this.download('Page_Notes.html', this.compiledMarkdown);
  }

  download(filename: string, text: string) {
    const element = document.createElement('a');
    element.setAttribute(
      'href',
      'data:text/plain;charset=utf-8,' + encodeURIComponent(text)
    );
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }
}
</script>

<style scoped>
.editor {
  display: flex;
}

.md-textarea {
  display: inline-block;
  height: 70vh;
  width: 50%;
  resize: horizontal;
  background-color: #f6f6f6;
  font-size: 14px;
  font-family: 'Monaco', courier, monospace;
  padding: 20px;
}

.compiled-md {
  display: inline-block;
  height: 70vh !important;
  overflow: auto;
  flex: 1;
  padding: 20px;
}

code {
  color: #f66;
}
</style>
