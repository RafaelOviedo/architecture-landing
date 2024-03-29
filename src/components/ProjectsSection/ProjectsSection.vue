<template>
  <main id="projects-section-component">
    <div id="projects-section-container">
      <div id="projects-section-title-container">
        <h1 id="projects-section-title">A Preview of Our Work</h1>
      </div>
      <div id="project-images-container">
        <div id="images-first-container">
          <img id="image1" class="project-image" src="/images/projects/ChicureoJR/38.jpeg" alt="project image">
          <img id="image2" class="project-image" src="/images/projects/MaculJV/56.jpeg" alt="project image">
        </div>
        <div id="images-second-container">
          <img id="image3" class="project-image" src="/images/projects/OakwoodEstates/18.jpg" alt="project image">
          <img id="image4" class="project-image" src="/images/projects/HeritageHomes/10.jpg" alt="project image">

          <img id="image5" class="project-image" src="/images/projects/MaculJV/43.jpeg" alt="project image">
          <img id="image6" class="project-image" src="/images/projects/ChicureoJR/18.jpg" alt="project image">
        </div>
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

<script setup>
</script>

<style scoped>
#projects-section-component {
  width: 100%;
  height: 30%;
}
#projects-section-container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #24578C;
}
#projects-section-title-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5%;
  padding-top: 20px;
}
#projects-section-title {
  color: #fff;
}
#project-images-container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 85%;
}
#images-first-container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 50%;
}
#images-second-container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 50%;
  border-top: 1px solid #fff;
}
.project-image {
  width: 80%;
  height: 40%;
}
#image1 {
  border-radius: 50px 0 0 0;
}
#image2 {
  border-radius: 0 0 50px 0;
}
#image3 {
  border-radius: 50px 0 0 0;
}
#image4 {
  border-radius: 0 0 50px 0;
}
#image5, #image6 {
  display: none;
}

#button-to-projects-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10%;
  text-decoration: none;
  padding-bottom: 20px;
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
  height: 40%;
  cursor: pointer;
}
#button-to-projects:hover {
  background: lightgray;
}
@media screen and (width > 768px) {
  #projects-section-component {
    height: 25%;
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
    width: 90%;
    height: 70%;
  }
  #images-first-container {
    height: 100%;
  }
  #images-second-container {
    flex-direction: row;
    height: 100%;
    border: none;
  }
  #image1 {
    border-radius: 100px 0 0 0;
    width: 95%;
    height: 45%;
  }
  #image2 {
    border-radius: 0;
    width: 95%;
    height: 45%;
  }
  #image3, #image4 {
    display: none;
  }
  #image5 {
    display: block;
    width: 45%;
    height: 93%;
    border-radius: 0;
  }
  #image6 {
    display: block;
    width: 45%;
    height: 93%;
    border-radius: 0 0 100px 0;
  }
  #projects-section-title-container {
    height: 5%;
  }
  #button-to-projects-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    height: 10%;
  }
  #button-to-projects {
    height: 60%;
  }
}
</style>