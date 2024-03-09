<template>
  <main class="projects-component">
    <div id="projects-title-container">
      <h2>Proyectos</h2>
    </div>

    <div id="projects-container">
      <div class="project-box">
        <div id="project-thumbnail-container">
          Imagen
        </div>

        <div id="project-title-container">
          <h3>Proyecto 1</h3>
        </div>
      </div>
      <div class="project-box">
        <div id="project-thumbnail-container">
          Imagen
        </div>

        <div id="project-title-container">
          <h3>Proyecto 2</h3>
        </div>
      </div>
      <div class="project-box">
        <div id="project-thumbnail-container">
          Imagen
        </div>

        <div id="project-title-container">
          <h3>Proyecto 3</h3>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
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
  /* border: 1px solid blue; */
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
  height: 60%;
  margin-bottom: 30px;
  border-radius: 5px;
  cursor: pointer;
  /* border: 1px solid #000; */
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
}
#project-thumbnail-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70%;
  width: 90%;
  border: 1px solid red;
}
#project-title-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20%;
  width: 90%;
}
</style>