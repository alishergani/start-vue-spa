<template>
  <div id="post">
    <span class="post-id">Current post ID: {{ post.id }}</span>
    <h2 class="post-title" >{{ post.title }}</h2>
    <p class="post-body" >{{ post.body }}</p>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        post: {}
      }
    }, 
    created() {
      var localId = this.$route.params.id;
      this.$http.get('https://jsonplaceholder.typicode.com/posts/'+localId)
        .then(res => {
          this.post = res.body;
        }, res => { /* err */ });

    }
  }
</script>

<style>
#post {
  min-height: calc(100vh - 100px)
}
.post-id {
  display: block;
  margin: 10px;
  opacity: .4;
}
.post-title {
  text-transform: uppercase;
  padding: 20px 0;
}
.post-body {
  padding: 30px 5%;
}
</style>
