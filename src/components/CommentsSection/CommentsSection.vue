<template>
  <main id="comments-section-component">
    <h1 id="comment-title">Comments from our clients</h1>

    <Carousel :value="comments" :numVisible="1" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="3000" id="comments-carousel">
      <template #item="slotProps">
        <div id="comment-container">
          <div id="comment-name">{{ slotProps.data?.name }} &#9733; {{ slotProps.data?.rating }}</div>
          <div id="comment-content">{{ slotProps.data?.comment }}</div>
        </div>
      </template>
    </Carousel>
  </main>
</template>

<script setup>
import Carousel from 'primevue/carousel';
import { ref } from "vue";
import comments from '../../assets/json_data/comments.json';
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

const responsiveOptions = ref([
  {
    breakpoint: '2400px',
    numVisible: 3,
    numScroll: 1
  },
  {
    breakpoint: '1920px',
    numVisible: 3,
    numScroll: 1
  },
  {
    breakpoint: '1120px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '767px',
    numVisible: 1,
    numScroll: 1
  },
  {
    breakpoint: '575px',
    numVisible: 1,
    numScroll: 1
  }
]);
</script>

<style scoped>
#comments-section-component {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 18%;
}
#comment-title {
  text-align: center;
  font-size: 25px;
}
#comments-carousel {
  width: 90%;
  height: 80%;
}
#comment-container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 95%;
  border-radius: 5px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
}
#comment-name {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  width: 100%;
  height: 10%;
}
#comment-content {
  width: 100%;
  height: 80%;
  padding: 10px;
  overflow: scroll;
}

@media screen and (width > 768px) {
  #comments-section-component {
    height: 15%;
  }
  #comments-carousel {
    width: 95%;
    height: 65%;
  }
  #comment-container {
    width: 95%;
    height: 100%;
  }
}
</style>