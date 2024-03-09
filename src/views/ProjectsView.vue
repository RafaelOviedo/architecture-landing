<template>
  <main class="projects-component">
    <div id="projects-title-container">
      <h2>Proyectos</h2>
    </div>

    <div id="projects-container">
      <div class="project-box">
        <div id="project-thumbnail-container">
          <img class="project-thumb" src="../assets/images/projects/PaineCC/1.jpeg" alt="project picture" />
        </div>

        <div id="project-title-container">
          <!-- <router-link :to="{ name: 'project_detail', params: { id: project.id } }"> -->
            <h3>Paine CC</h3>
          <!-- </router-link> -->
        </div>
      </div>

      <div v-for="project in projectsData.projects" :key="project.id" class="project-box">
        <div id="project-thumbnail-container">
          <img class="project-thumb" :src="project.thumbnail_image" alt="project picture" />
        </div>

        <div id="project-title-container">
          <router-link :to="{ name: 'project_detail', params: { id: project.id } }">
            <h3>{{ project.name }}</h3>
          </router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import projectsData from '../assets/json_data/projects.json';
</script>

<style>
.projects-component {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 93vh;
}
#projects-title-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10%;
  width: 100%;
}
#projects-container {
  height: 90%;
  width: 100%;
  overflow: scroll;
  overflow-x: hidden;
  padding-left: 10%;
}
.project-box {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  height: 50%;
  margin-bottom: 30px;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
}
#project-thumbnail-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70%;
  width: 90%;
}
.project-thumb {
  width: 100%;
  height: 100%;
}
#project-title-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20%;
  width: 90%;
}
</style>