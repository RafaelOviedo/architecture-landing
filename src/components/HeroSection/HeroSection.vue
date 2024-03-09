<script setup>
</script>

<template>
  <main class="hero-section-component">
    <div id="hero-section-title-container">
      <div id="background-image-container"></div>
      <h2 id="hero-section-title">Tú la imaginas,<br>nosotros la<br>creamos</h2>
      <h4 id="hero-section-subtitle">Crea tu casa con nosotros<br> y redefine tu estilo de vida</h4>
    </div>
  </main>
</template>

<style>
.hero-section-component {
  width: 100%;
  height: 35%;
}
#hero-section-title-container {
  width: 100%;
  height: 100%;
}
#background-image-container {
  width: 100%;
  height: 100%;
  background-image: url("../../assets/images/building.jpg");
  background-size: cover;
  background-position: center;
  filter: brightness(60%);
}
#hero-section-title {
  position: absolute;
  top: 15%;
  left: 5%;
  font-size: 50px;
  color: #fff;
  line-height: 65px;
}
#hero-section-subtitle {
  position: absolute;
  top: 55%;
  left: 5%;
  font-size: 25px;
  color: #fff;
}
</style>