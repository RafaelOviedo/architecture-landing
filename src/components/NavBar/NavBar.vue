<template>
  <nav class="nav-container">
    <div id="logo-container">
      <!-- <img class="project-logo" src="../../assets/images/logo-mira.jpg" alt="main logo" /> -->
      <h2>LOGO</h2>
    </div>

    <button @click="openNavBarPanel" class="open-navbar-menu-button">
      <i class="pi pi-bars" style="font-size: 20px;"></i>
    </button>

    <div id="nav-items-desktop-container">
      <div id="nav-items-desktop-box">
        <RouterLink @click="closeNavBarPanel" class="nav-item" to="/" :class="currentRouteName === 'home' ? 'selected-item' : ''">Home</RouterLink>
        <RouterLink @click="closeNavBarPanel" class="nav-item" to="/projects" :class="currentRouteName === 'projects' ? 'selected-item' : ''">Projects</RouterLink>
        <RouterLink @click="closeNavBarPanel" class="nav-item" to="/contact" :class="currentRouteName === 'contact' ? 'selected-item' : ''">Contact</RouterLink>
        <RouterLink @click="closeNavBarPanel" class="nav-item" to="/calculator" :class="currentRouteName === 'calculator' ? 'selected-item' : ''">M2 Calculator</RouterLink>
      </div>
    </div>

    <Teleport to="body">
      <Transition>
        <div v-if="isNavBarPanelOpen" id="navbar-menu-container">
          <div id="close-navbar-menu-button-container">
            <button id="close-navbar-menu-button" @click="closeNavBarPanel">
              <i class="pi pi-times"></i>
            </button>
          </div>

          <div id="nav-items-mobile-container">
            <RouterLink @click="closeNavBarPanel" class="nav-item" to="/" :class="currentRouteName === 'home' ? 'selected-item' : ''">Home</RouterLink>
            <RouterLink @click="closeNavBarPanel" class="nav-item" to="/projects" :class="currentRouteName === 'projects' ? 'selected-item' : ''">Projects</RouterLink>
            <RouterLink @click="closeNavBarPanel" class="nav-item" to="/contact" :class="currentRouteName === 'contact' ? 'selected-item' : ''">Contact</RouterLink>
            <RouterLink @click="closeNavBarPanel" class="nav-item" to="/calculator" :class="currentRouteName === 'calculator' ? 'selected-item' : ''">M2 Calculator</RouterLink>
          </div>
        </div>
      </Transition>
    </Teleport>
  </nav>
</template>

<script setup>
import { RouterLink, useRouter } from 'vue-router'
import { ref, watchEffect } from 'vue'

const router = useRouter();

const currentRouteName = ref(null)
const isNavBarPanelOpen = ref(false);

function openNavBarPanel() {
  isNavBarPanelOpen.value = true;
}
function closeNavBarPanel() {
  isNavBarPanelOpen.value = false;
}

// Update currentRouteName when route changes
watchEffect(() => {
  currentRouteName.value = router.currentRoute.value.name;
});
</script>

<style scoped>
.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  width: 100%;
  height: 7vh;
  font-family: Roboto;
  background: #fff;
  z-index: 2;
}
.open-navbar-menu-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
  height: 70%;
  border: none;
  background: none;
  border-radius: 5px;
}
@media screen and (width > 768px) {
  .open-navbar-menu-button {
    display: none;
  }
}
#navbar-menu-container {
  position: absolute;
  top: 0;
  width: 100%;
  height: 40%;
  background: #fff;
  z-index: 2;
}
#close-navbar-menu-button-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 20%;
  padding-right: 10px;
}
#close-navbar-menu-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border: 1px solid #000;
  border-radius: 5px;
  background: transparent;
}
#nav-items-mobile-container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 80%;
}
#nav-items-desktop-container {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
}
#nav-items-desktop-box {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 60%;
  height: 100%;
}
@media screen and (width < 769px) {
  #nav-items-desktop-container {
    display: none;
  }
}
#logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35%;
  height: 100%;
}
.project-logo {
  width: 125px;
  height: 35px;
}
@media screen and (width > 768px) {
  .project-logo {
    width: 185px;
    height: 50px;
  }
  #logo-container {
    width: 20%;
  }
}
.nav-item {
  text-decoration: none;
  color: #000;
}
.selected-item {
  border-bottom: 2px solid #000;
}

/* TRANSITION CLASSES COMPONENT */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>