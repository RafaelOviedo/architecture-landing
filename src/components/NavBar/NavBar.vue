<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="nav-container">
    <div>
      <h3>Logo</h3>
    </div>
    <RouterLink class="link-name" to="/">Inicio</RouterLink>
    <RouterLink class="link-name" to="/about">Nosotros</RouterLink>
    <button class="menu-bars-container">
      <i class="pi pi-bars"></i>
    </button>
    <!-- <i class="pi pi-times"></i> -->
  </nav>
</template>

<style scoped>
.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky ;
  top: 0;
  width: 100%;
  height: 7vh;
  border: 1px solid red;
  padding-left: 10px;
  padding-right: 10px;
}
.menu-bars-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
  height: 70%;
  border: 1px solid black;
  border-radius: 5px;
}
.link-name {
  text-decoration: none;
}
</style>