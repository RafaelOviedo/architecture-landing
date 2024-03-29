<template>
  <main class="project-detail-component">
    <div id="project-detail-title-container">
      <h2>Project Details</h2>
    </div>

    <div id="description-image-container">
      <div id="image-container">
        <img class="project-thumb" :src="project?.thumbnail_image" alt="project picture" />
      </div>
      <div id="description-container">
        <p><b style="font-weight: bold;">Name:</b> {{ project.name }}</p>
        <p><b style="font-weight: bold;">Year of Completion:</b> {{ project.completion_year }}</p>
        <p><b style="font-weight: bold;">Description:</b></p>
        <p id="description-box">{{ project.description }}</p>
      </div>
    </div>

    <br>
    <Divider />
    <br>

    <div id="pictures-title-container">
      <h2>Pictures</h2>
    </div>

    <div id="pictures-container">
      <div id="tab-menu-container">
        <button @click="selectTab(1)" class="tab-button" :class="isTab1Selected ? 'is-tab-selected' : ''">Design</button>
        <button @click="selectTab(2)" class="tab-button" :class="isTab2Selected ? 'is-tab-selected' : ''">Construction</button>
        <button @click="selectTab(3)" class="tab-button" :class="isTab3Selected ? 'is-tab-selected' : ''">Result</button>
      </div>

      <!-- TAB OF DESIGN PICTURES -->
      <div v-if="isTab1Selected" class="tab-container">
        <Galleria v-if="designImages?.length" :value="designImages" :responsiveOptions="responsiveOptions" :numVisible="5" :circular="true" containerStyle="max-width: 900px" :showItemNavigators="true">
            <template #item="slotProps">
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; height: 50%; display: block" />
            </template>
            <template #thumbnail="slotProps">
                <div class="grid grid-nogutter justify-content-center">
                    <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="width: 90%; display: block" :style="designImages?.length === 1 ? 'width: 20%' : ''" />
                </div>
            </template>
        </Galleria>
        <div v-else class="no-show-picutures">
          No pictures available
        </div>
      </div>

      <!-- TAB OF CONSTRUCTION PICTURES -->
      <div v-if="isTab2Selected" class="tab-container">
        <Galleria v-if="constructionImages?.length" :value="constructionImages" :responsiveOptions="responsiveOptions" :numVisible="5" :circular="true" containerStyle="max-width: 900px" :showItemNavigators="true">
            <template #item="slotProps">
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; height: 50%; display: block" />
            </template>
            <template #thumbnail="slotProps">
                <div class="grid grid-nogutter justify-content-center">
                    <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="width: 90%; display: block" :style="constructionImages?.length === 1 ? 'width: 20%' : ''" />
                </div>
            </template>
        </Galleria>
        <div v-else class="no-show-picutures">
          No pictures available
        </div>
      </div>

      <!-- TAB OF RESULT PICTURES -->
      <div v-if="isTab3Selected" class="tab-container">
        <Galleria v-if="resultImages?.length" :value="resultImages" :responsiveOptions="responsiveOptions" :numVisible="5" :circular="true" containerStyle="max-width: 900px" :showItemNavigators="true">
            <template #item="slotProps">
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; height: 50%; display: block" />
            </template>
            <template #thumbnail="slotProps">
                <div class="grid grid-nogutter justify-content-center">
                    <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="width: 90%; display: block" :style="resultImages?.length === 1 ? 'width: 20%' : ''" />
                </div>
            </template>
        </Galleria>
        <div v-else class="no-show-picutures">
          No pictures available
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import Galleria from 'primevue/galleria';
import Divider from 'primevue/divider';
import { ref, onMounted } from "vue";
import { useRoute } from 'vue-router';
import projectsData from '../assets/json_data/projects.json';

const route = useRoute();
const designImages = ref(null);
const constructionImages = ref(null);
const resultImages = ref(null);
const project = ref({});
const isTab1Selected = ref(true);
const isTab2Selected = ref(false);
const isTab3Selected = ref(false);

const responsiveOptions = ref([
    {
        breakpoint: '1300px',
        numVisible: 4
    },
    {
        breakpoint: '768px',
        numVisible: 3
    }
]);

function selectTab(tabNumber) {
  console.log('SELECTED TAB', tabNumber);
  if(tabNumber === 1) { 
    isTab1Selected.value = true;
    isTab2Selected.value = false;
    isTab3Selected.value = false;
   }
  if(tabNumber === 2) { 
    isTab1Selected.value = false;
    isTab2Selected.value = true;
    isTab3Selected.value = false;
   }
  if(tabNumber === 3) { 
    isTab1Selected.value = false;
    isTab2Selected.value = false;
    isTab3Selected.value = true;
   }
}

onMounted(() => {
  project.value = projectsData.projects.find((project) => project.id === route.params.id);
  designImages.value = project.value.designPictures;
  constructionImages.value = project.value.constructionPictures;
  resultImages.value = project.value.resultPictures;
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
#pictures-container {
  width: 90%;
  height: 45%;
}
#tab-menu-container {
  width: 100%;
  height: 10%;
}
.tab-button {
  width: 33%;
  height: 100%;
  background: none;
  border: none;
  font-size: 15px;
  cursor: pointer;
}
.is-tab-selected {
  border-bottom: 2px solid #000;
}
.tab-container {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
}
.no-show-picutures {
  padding-top: 50px;
}

@media screen and (width > 768px) {
  .project-detail-component {
    height: 1800px;
  }
  #description-image-container {
    display: flex;
    align-items: flex-start;
    height: 25%;
  }
  #image-container {
    width: 60%;
    height: 100%;
  }
  #description-container {
    width: 40%;
    height: 50%;
  }
  #pictures-container {
    height: 65%;
  }
  #tab-menu-container {
    height: 7%;
  }
}
</style>