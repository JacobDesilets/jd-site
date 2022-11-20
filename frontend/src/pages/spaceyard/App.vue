<template>
  <h1>This is a test of ThreeJS</h1>
  <ThreeTest/>
</template>

<script>
import ThreeTest from 'src/components/ThreeTest.vue'

export default {
  name: 'App',
  components: {
  ThreeTest,
  },
  data() {
    return {

    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
