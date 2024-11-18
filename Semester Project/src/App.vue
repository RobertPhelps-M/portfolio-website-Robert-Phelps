<template>
  <div id="app">
    <nav>
      <router-link to="/HomePage">Home</router-link>
      <router-link to="/PortfolioPage">Portfolio</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>

</style>
