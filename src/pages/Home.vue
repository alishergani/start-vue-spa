<template>
  <div id="home">
    <h1>{{ title }}</h1>
    <div id="div"></div>
  </div>
</template>

<script>
  import anime from "animejs"
  export default {
    data() {
      return {
        title: "Home page"
      }
    },
    created() {
      anime({
        targets: '#div',
        translateX: [
          { value: 100, duration: 1200 },
          { value: 0, duration: 800 }
        ],
        rotate: '1turn',
        backgroundColor: '#444',
        duration: 2000,
        loop: true
      });
    }
  }
</script>

<style>
#div {
  width: 20px;
  height: 20px;
  background-color: #000;
}
#home {
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
