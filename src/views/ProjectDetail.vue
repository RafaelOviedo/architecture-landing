<template>
  <main class="project-detail-component">
    <div id="project-detail-title-container">
      <h2>Detalle del Proyecto</h2>
    </div>

    <div id="description-image-container">
      <div id="image-container">
        <img class="project-thumb" :src="project?.thumbnail_image" alt="project picture" />
      </div>
      <div id="description-container">
        <p><b>Nombre:</b> {{ project.name }}</p>
        <p>Año de Culminacion: {{ project.completion_year }}</p>
        <p>Descripcion:</p>
        <p id="description-box">{{ project.description }}</p>
      </div>
    </div>

    <Divider />
    <br>

    <div id="pictures-title-container">
      <h2>Fotos</h2>
    </div>

    <div id="tabs-container">
      <TabMenu v-model:activeIndex="active" :model="items" />

      <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" containerStyle="max-width: 640px">
        <template #item="slotProps">
            <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%" />
        </template>
        <template #thumbnail="slotProps">
            <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" />
        </template>
      </Galleria>

      <Button label="Ver Fotos" @click="displayBasic = true" />
    </div>
  </main>
</template>

<script setup>
import Button from 'primevue/button';
import TabMenu from 'primevue/tabmenu';
import Galleria from 'primevue/galleria';
import Divider from 'primevue/divider';
import { ref, onMounted } from "vue";
import { useRoute } from 'vue-router';
import projectsData from '../assets/json_data/projects.json';

const route = useRoute();
const images = ref();
const project = ref({});
const displayBasic = ref(false);
const active = ref(0);

const responsiveOptions = ref([
    {
        breakpoint: '1300px',
        numVisible: 4
    },
    {
        breakpoint: '575px',
        numVisible: 1
    }
]);

const items = ref([
  { label: 'Diseño', icon: '' },
  { label: 'Construccion', icon: '' },
  { label: 'Resultado', icon: '' }
]);

onMounted(() => {
  project.value = projectsData.projects.find((project) => project.id === route.params.id)
})
</script>

<style>
.project-detail-component {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 1000px;
}
#project-detail-title-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5%;
  width: 100%;
}
#description-image-container {
  width: 90%;
  height: 45%;
}
#image-container {
  width: 100%;
  height: 50%;
}
#description-container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 100%;
  height: 50%;
  padding-left: 10px;
}
#description-box {
  height: 40%;
  overflow: scroll;
  overflow-x: hidden;
}
#pictures-title-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5%;
  width: 100%;
}
#tabs-container {
  width: 100%;
  height: 50%;
  border: 1px solid red;
}
</style>