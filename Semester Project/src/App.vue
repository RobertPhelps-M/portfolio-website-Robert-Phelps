<template>
  <div id="app">
    <div class="banner"></div>
    <nav>
      <ul>
        <li><router-link to="/" class="nav-link">Home Page</router-link></li>
        <li><a href="#about">About</a></li>
        <li><router-link to="PortfolioPage" class="nav-link">Portfolio</router-link></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
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
.banner {
  background-image: url('Banner_Image.jpg'); 
  background-size: cover; 
  background-position: center; 
  height: 200px;
  width: 100%;
}

nav {
  background-color: #4CAF50;
  overflow: hidden;
  text-align: center;
}
nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: inline-block;
}
nav ul li {
  float: left;
}
nav ul li .nav-link {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 20px;
  text-decoration: none;
}
nav ul li .nav-link:hover {
  background-color: #388E3C;
}
nav::after {
  content: "";
  display: table;
  clear: both;
}
</style>
