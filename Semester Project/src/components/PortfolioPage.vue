<template>
    <div>
      <div class="content-container">
        <div class="text-box">
      <h1>Portfolio Page</h1>
      <p>I'm a dedicated IT professional currently working as a Field Service Technician for Idemia, where I manage equipment repairs across the state of Nebraska. 
        I am pursuing my education in Information Technology with a focus on coding, aiming to deepen my skills in the field.
      </p>
      <p>
        Work Experience:
        Field Service Technician 2 | Idemia | 2024 - Present
        Responsible for servicing and maintaining equipment across Nebraska, ensuring operational functionality and timely repairs.
      </p>
      <p>
        Skills:
        Proficient in Python, Java, C++, and HTML
        Experienced with SQL Server
        Strong problem-solving and troubleshooting skills</p>
      <p>
        Education:
        Diploma | Central Community College
        Certificate of Achievement | Central Community College
      </p>
        </div>
        <h1 class="repos-heading">My GitHub Repositories</h1>
        <div class="repos-container">

        <div v-if="loading" class="loading">Loading repositories...</div>

        <div v-if="error" class="error">Failed to load repositories. Please try again later.</div>

        <ul v-if="!loading && !error">
          <li v-for="repo in repos" :key="repo.id" class="repo-item">
            <a :href="repo.html_url" target="_blank" class="repo-link">{{ repo.name }}</a>
            <p>{{ repo.description || 'No description available' }}</p>
          </li>
        </ul>
        </div>
      </div>
    </div>
  </template>
  <script>
  import axios from 'axios';
  
  export default {
    name: 'PortfolioPage',
    data() {
      return {
        repos: [],
        loading: true,
        error: null, 
      };
    },
    mounted() {
      this.fetchRepos();
    },
    methods: {
      async fetchRepos() {
        try {
          const response = await axios.get('https://api.github.com/users/RobertPhelps-M/repos');
          this.repos = response.data;
          this.loading = false;
        } catch (err) {
          this.error = 'Error fetching repositories. Please try again later.';
          this.loading = false;
        }
      },
    },
  };
  </script>
  <style>
  body {
  text-align: center;
  background-color: #e8f5e9;
}
p {
  font-family: Arial, sans-serif;
  font-size: 16px;
  line-height: 1.6;
}
.text-box {
  flex: 1;
  background-color: #f9f9f9;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-right: 20px;
}
.content-container {
  margin: 20px;
  display: block;
}
.repos-container {
  margin-top: 20px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 5px;
  border: 1px solid #ddd;
}
.repo-item {
  list-style: none;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
  text-align: left;
}
.repo-item:hover {
  background-color: #e8f5e9;
}
.repo-link {
  color: #4CAF50;
  text-decoration: none;
  font-size: 1.1em;
}
.repo-link:hover {
  text-decoration: underline;
}
.repos-heading {
  font-size: 2em; 
  color: #4CAF50; 
  margin-top: 40px;
  margin-bottom: 20px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
}
</style>