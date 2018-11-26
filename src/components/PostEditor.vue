<template>
  <div class="editor">
    <editor-menu-bar :editor="editor">
      <div 
        slot-scope="{ commands, isActive }" 
        class="menubar"
      >
        <button
          :class="{ 'is-active': isActive.bold() }"
          class="menubar__button"
          @click="commands.bold"
        >
          Bold
        </button>

        <button
          :class="{ 'is-active': isActive.italic() }"
          class="menubar__button"
          @click="commands.italic"
        >
          Italic
        </button>

        <button
          :class="{ 'is-active': isActive.strike() }"
          class="menubar__button"
          @click="commands.strike"
        >
          Strike
        </button>

        <button
          :class="{ 'is-active': isActive.underline() }"
          class="menubar__button"
          @click="commands.underline"
        >
          Underline
        </button>

        <button
          :class="{ 'is-active': isActive.code() }"
          class="menubar__button"
          @click="commands.code"
        >
          Code
        </button>
         
        <button
          :class="{ 'is-active': isActive.paragraph() }"
          class="menubar__button"
          @click="commands.paragraph"
        >
          Paragraph
        </button>

        <button
          :class="{ 'is-active': isActive.heading({ level: 1 }) }"
          class="menubar__button"
          @click="commands.heading({ level: 1 })"
        >
          H1
        </button>

        <button
          :class="{ 'is-active': isActive.heading({ level: 2 }) }"
          class="menubar__button"
          @click="commands.heading({ level: 2 })"
        >
          H2
        </button>

        <button
          :class="{ 'is-active': isActive.heading({ level: 3 }) }"
          class="menubar__button"
          @click="commands.heading({ level: 3 })"
        >
          H3
        </button>

        <button
          :class="{ 'is-active': isActive.bullet_list() }"
          class="menubar__button"
          @click="commands.bullet_list"
        >
          UL
        </button>

        <button
          :class="{ 'is-active': isActive.ordered_list() }"
          class="menubar__button"
          @click="commands.ordered_list"
        >
          OL
        </button>

        <button
          class="menubar__button"
          @click="showImagePrompt(commands.image)"
        >
          Image
        </button>

        <button
          :class="{ 'is-active': isActive.blockquote() }"
          class="menubar__button"
          @click="commands.blockquote"
        >
          Quote
        </button>

        <button
          :class="{ 'is-active': isActive.code_block() }"
          class="menubar__button"
          @click="commands.code_block"
        >
          Code Block
        </button>

        <button
          class="menubar__button"
          @click="commands.undo"
        >
          Undo
        </button>

        <button
          class="menubar__button"
          @click="commands.redo"
        >
          Redo
        </button>
      </div>
    </editor-menu-bar>

    <editor-content 
      :editor="editor"
      class="editor__content" 
    />
  </div>
</template>
<script>
import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History,
  Image
} from 'tiptap-extensions'
export default {
  
  components: {
    EditorContent,
    EditorMenuBar,
  },
  data() {
    return {
      editor: new Editor({
        extensions: [
          new Blockquote(),
          new BulletList(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new ListItem(),
          new OrderedList(),
          new TodoItem(),
          new TodoList(),
          new Bold(),
          new Code(),
          new Italic(),
          new Link(),
          new Strike(),
          new Underline(),
          new History(),
          new Image()
        ],
        onUpdate: ({ getJSON, getHTML }) => {
          this.content.json = getJSON()
          this.content.html = getHTML()
        }
      }),
      content: {
        json: {},
        html: ''
      }
    }
  },
  methods: {
    showImagePrompt(command) {
      const src = prompt('Enter the url of your image here')
      if (src !== null) {
        command({ src })
      }
    },
  },
}
</script>

<style>

</style>
