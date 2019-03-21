<template>
  <div id="app">
    <search></search>
    <items></items>
  </div>
</template>

<script>

import Search from './components/Search'
import Items from './components/Items'

export default {
  name: 'app',
  components: {
    Search,
    Items
  }
}
</script>

<style>
body {
  background: #7b4397; /* fallback for old browsers */
  background: -webkit-linear-gradient(to left, #7b4397 , #dc2430); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to left, #7b4397 , #dc2430); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
