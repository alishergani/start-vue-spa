<template>
  <div id="posts">
    <ul class="posts-wrapper">
      <li v-for="(post, index) in photos">
        <p>{{ post.id }}: {{ post.title }}</p>
        <img :src="post.url" style="width: 100%">
        <!-- <router-link class="more" :to="{name: 'post', params: {id : index + 1}}">More...</router-link>  -->
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        photos : []
      }
    }, 
    created() {
      this.$http.get('https://jsonplaceholder.typicode.com/photos')
        .then(res => {
          this.photos = res.body;
        }, res => {
          // error callback
        });
    }
  }
</script>

<style>
#posts {
  min-height: calc(100vh - 100px);
  font-family: 'Avenir', Arial, sans-serif;
}
/*::-webkit-scrollbar { 
    display: none; 
}*/
.posts-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.posts-wrapper li {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex-basis: 25%;
  padding: 10px;
  margin: 10px;
  border: 2px solid rgba(57, 73, 171, .2);
  border-radius: 5px;
}
.more {
  padding: 2px 5px;
  margin: 5px;
  border: 2px solid #000;
  border-radius: 3px;
}
.more:hover{
  border: 2px solid transparent;
  background-color: rgba(57, 73, 171, 1);
  color: #fff;
}

h1, h2 {
  font-weight: normal;
  text-align: center;
}
</style>
