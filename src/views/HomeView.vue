<template>
  <main class="home-component">
    <HeroSection />
  </main>
</template>

<script setup>
import HeroSection from '../components/HeroSection/HeroSection.vue';
</script>

<style>
.home-component {
  width: 100%;
  height: 1500px;
  /* border: 1px solid blue; */
  background: white;
}
</style>