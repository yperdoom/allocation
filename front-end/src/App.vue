<template>
  <div id="App">
    <MenuView />
  </div>
</template>

<script>
import MenuView from './components/menu/MenuView.vue';

export default {
  name: 'App',
  components: {
    MenuView,
  },
};
</script>

<style>
* { margin: 0; padding: 0; }
</style>