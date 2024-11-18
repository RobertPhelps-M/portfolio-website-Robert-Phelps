<template>
  <div>
    <div class="content-container">
      <div class="text-box">
        <h2>About Me</h2>
        <p>My name is Robert Phelps, age 30. I work a hybrid job for Idemia which has me fixing equipment all over the state of Nebraska. Currently in school for IT with an emphasis on coding.</p>
      </div>

      <div class="image-box">
        <img src="Professional_Picture.jpg" alt="Robert Phelps">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutMe',
  data() {
    return {
    };
  },
};
</script>

<style scoped>
body {
  text-align: center;
  background-color: #e8f5e9;
}
p {
  font-family: Arial, sans-serif;
  font-size: 16px;
  line-height: 1.6;
}
nav {
  background-color: #4CAF50;
  overflow: hidden;
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
.content-container {
  display: flex; 
  justify-content: space-between;
  margin: 20px;
}
.text-box {
  flex: 1;
  background-color: #f9f9f9;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-right: 20px;
}
.image-box {
  flex: 0 0 40%;
  max-width: 100%;
}
.image-box img {
  width: 100%;
  height: auto;
  border-radius: 5px;
}
</style>