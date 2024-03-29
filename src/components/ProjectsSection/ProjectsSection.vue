<script setup>
</script>

<template>
  <main id="projects-section-component">
    <div id="projects-section-container">
      <div id="projects-section-title-container">
        <h1 id="projects-section-title">Our Work</h1>
      </div>
      <div id="project-images-container">
        <img class="project-image" src="/images/projects/ChicureoJR/38.jpeg" alt="project image">
        <img class="project-image" src="/images/projects/OakwoodEstates/18.jpg" alt="project image">
        <img class="project-image" src="/images/projects/HeritageHomes/10.jpg" alt="project image">
      </div>
      <RouterLink id="button-to-projects-container" to="/projects">
        <button id="button-to-projects">
          <h2>Go to Projects</h2>
          <i class="pi pi-arrow-right"></i>
        </button>
      </RouterLink>
    </div>
  </main>
</template>

<style scoped>
#projects-section-component {
  width: 100%;
  height: 20%;
}
#projects-section-container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
  background-image: url("../../assets/images/white-background-2.jpg");
  background-size: cover;
  background-position: center;
}
#projects-section-title-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10%;
}
#projects-section-title {
  color: #000;
}
#project-images-container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 80%;
}
.project-image {
  width: 80%;
  height: 30%;
}
#button-to-projects-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10%;
  text-decoration: none;
}
#button-to-projects {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: none;
  color: #000;
  background: #fff;
  border-radius: 5px;
  width: 50%;
  height: 60%;
  cursor: pointer;
}
#button-to-projects:hover {
  background: lightgray;
}
@media screen and (width > 768px) {
  #projects-section-component {
    height: 14%;
  }
  #projects-section-title-container {
    height: 15%;
  }
  .project-image {
    width: 30%;
    height: 80%;
  }
  #project-images-container {
    flex-direction: row;
    height: 70%;
  }
  #button-to-projects-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    height: 15%;
  }
}
</style>