<template>
  <main class="project-detail-component">
    <div>
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
import { ref } from "vue";

const images = ref();
const displayBasic = ref(false);
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

const active = ref(0);

const items = ref([
  { label: 'Diseño', icon: '' },
  { label: 'Construccion', icon: '' },
  { label: 'Resultado', icon: '' }
]);
</script>

<style>
.project-detail-component {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 600px;
  border: 1px solid blue;
}
</style>