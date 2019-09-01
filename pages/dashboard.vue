<template>
  <div>{{ posts }}</div>
</template>
<script>
export default {
  data() {
    return {
      posts: []
    }
  },
  async asyncData(context) {
    return {
      posts: await context.app.$todoRepository.index()
    }
  }
}
</script>
