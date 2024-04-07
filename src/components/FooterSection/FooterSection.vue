<template>
  <main id="footer-section-component">
    <div id="footer-section-container">
      <div id="personalInfoContainer">
        <h1>LOGO</h1>
        <h3 style="text-align: center;">You imagine it,<br/> We create it</h3>
        <span><i class="pi pi-map-marker"></i> Buenos Aires, Argentina</span>
        <span><i class="pi pi-phone"></i> +5491133355144</span>
        <span><i class="pi pi-envelope"></i> oviedo.rp@gmail.com</span>
      </div>
      <div id="servicesInfoContainer">
        <h3 style="text-align: center; font-weight: 500;">Services</h3>
  
        <RouterLink class="nav-item" to="/">Home</RouterLink>
        <RouterLink class="nav-item" to="/projects">Projects</RouterLink>
        <RouterLink class="nav-item" to="/contact">Contact</RouterLink>
        <RouterLink class="nav-item" to="/calculator">M2 Calculator</RouterLink>
      </div>
      <div id="socialMediaContainer">
        <a href="https://www.linkedin.com/in/rafael-oviedo/?locale=en_US" target="_blank"><i class="pi pi-linkedin icon"></i></a>
        <a href="https://github.com/RafaelOviedo" target="_blank"><i class="pi pi-github icon"></i></a>
        <a href="https://www.instagram.com/" target="_blank"><i class="pi pi-instagram icon"></i></a>
      </div>
    </div>
    <span id="allRightsReserved">All rights reserved</span>
  </main>
</template>

<script setup>
</script>

<style scoped>
#footer-section-component {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20%;
}
#footer-section-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

#personalInfoContainer {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 95%;
  height: 33%;
  border-top: 1px solid #000;
  font-size: 18px;
}
#servicesInfoContainer {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 95%;
  height: 33%;
  font-size: 19px;
  border-top: 1px solid #000;
}
.nav-item {
  text-decoration: none;
  color: #000;
  border-bottom: 1px solid #000;
}
#socialMediaContainer {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 95%;
  height: 33%;
  border-top: 1px solid #000;
}
.icon {
  font-size: 30px;
  color: #000;
}
#allRightsReserved {
  width: 95%;
  text-align: center;
  padding: 10px;
  border-top: 1px solid #000;
}

@media screen and (width > 768px) {
  #footer-section-component {
    height: 14%;
    flex-direction: column;
  }
  #footer-section-container {
    height: 90%;
    flex-direction: row;
  }
  #personalInfoContainer {
    height: 90%;
    border-top: 1px solid #000;
  }
  #servicesInfoContainer {
    height: 90%;
    border-top: 1px solid #000;
  }
  #socialMediaContainer {
    height: 90%;
    border-top: 1px solid #000;
  }
  .icon {
    font-size: 40px;
  }
}
</style>