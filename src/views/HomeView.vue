<template>
  <main class="home-component">
    <HeroSection />
    <AboutUsSection />
    <ProjectsSection />
    <CommentsSection />
  </main>
</template>

<script setup>
import HeroSection from '../components/HeroSection/HeroSection.vue';
import AboutUsSection from '../components/AboutUsSection/AboutUsSection.vue';
import ProjectsSection from '../components/ProjectsSection/ProjectsSection.vue';
import CommentsSection from '../components/CommentsSection/CommentsSection.vue';
</script>

<style>
.home-component {
  width: 100%;
  height: 4000px;
  background: white;
}
</style>