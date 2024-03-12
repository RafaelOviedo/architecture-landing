<template>
  <main id="about-us-section-component">
    <div id="about-us-section-container">
      <div id="about-us-info-container">
        <h1 id="about-us-section-title"><span>Conoce</span> sobre <br> <span>nosotros</span></h1>
        <br>
        <p id="about-us-info-text">
          Somos una empresa constructora, con más de 15 años de experiencia en el desarrollo de proyectos a nivel nacional. 
          Nos apoyamos con las metodologías innovadoras que fomentan un diseño arquitectónico, amigable con el ambiente y con propuestas de construcción sustentable. 
          Orientamos todo nuestro esfuerzo para lograr la máxima calidad del proceso constructivo, haciendo especial énfasis en el servicio al cliente, 
          esto lo cumplimos dada la personalización de cada diseño y las fases operativas hasta su materialización.
        </p>
        <br>
        <div id="contact-button-container">
          <button id="contact-button">
            <span><a href="https://wa.me/+56964597112" style="text-decoration: none; color: #000;">Ponte en contacto</a></span>
            <i class="pi pi-arrow-right"></i>
          </button>
        </div>
      </div>

      <div id="image-container">
        <img id="image-content" src="/images/projects/BuinPS/22.jpg" alt="">
      </div>
    </div>
  </main>
</template>

<script setup>
</script>

<style scoped>
#about-us-section-component {
  width: 100%;
  height: 28%;
}
#about-us-section-container {
  width: 100%;
  height: 100%;
}
#about-us-info-container {
  width: 100%;
  height: 45%;
  padding: 15px;
}
#about-us-section-title span {
  font-weight: bold;
}
#about-us-info-text {
  line-height: 25px;
}
#contact-button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10%;
}
#contact-button {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;
  height: 100%;
  border: none;
  background: #F6D565;
  cursor: pointer;
  border-radius: 5px;
}
#contact-button span a {
  font-weight: bold;
  font-size: 16px;
}
#image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 55%;
}
#image-content {
  width: 80%; 
  height: 95%;
}

@media screen and (width > 768px) {
  #about-us-section-component {
    height: 18%;
  }
  #about-us-section-container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  #about-us-info-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100%;
    padding: 40px;
  }
  #about-us-section-title {
    font-size: 45px;
  }
  #about-us-info-text {
    font-size: 20px;
  }
  #contact-button-container {
    width: 50%;
    justify-content: flex-start;
  }
  #contact-button span a {
    font-weight: bold;
    font-size: 18px;
  }
  #image-container {
    height: 100%;
  }
  #image-content {
    width: 60%;
  }
}
</style>