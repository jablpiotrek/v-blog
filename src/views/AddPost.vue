<template>
  <div>
    <h2>
      Add post
    </h2>
    <PostEditor />
  </div>

</template>

<script>
import PostEditor from '../components/PostEditor.vue'
export default {
  name: "AddPost",
  components: {
    PostEditor
  }
}
</script>
