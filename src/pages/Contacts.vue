<template>
  <div id="contacts">
    <h1>{{ title }}</h1>   
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'My contacts.', 
    }
  }
}
</script>

<style scoped>
#contacts {
  font-family: 'Avenir', Arial, sans-serif;
  height: calc(100vh - 100px);
  display: flex;
  justify-content: center;
  align-items: center;
}

h1, h2 {
  font-weight: normal;
  text-align: center;
}
</style>