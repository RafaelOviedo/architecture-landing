
<template>
  <main class="calculator-component">
    M2 Calculator
    <br />
    <br />
    <h5>(Not available at the moment)</h5>
    <!-- <div id="title-text-container">
      <h2>Welcome to the Architectural Cost Calculator</h2>
      <br />
      <span>
        Our calculator simplifies budget estimation for architectural projects based on square meter measurements. 
        Input your area dimensions and customize costs for materials, labor, and additional expenses. 
        Instantly calculate total project costs and visualize breakdowns. Accessible on-the-go and compatible with international projects.
        <br />
        <br />
        Start planning with confidence today!
      </span>
    </div>

    <form id="calculator-container">
      <div id="currency-selector-container">
        <MultiSelect v-model="selectedCurrency" :options="currencies" optionLabel="name" placeholder="Currency" :maxSelectedLabels="3" class="w-full md:w-20rem" />
      </div>
    </form> -->
  </main>
</template>

<script setup>
// import MultiSelect from 'primevue/multiselect';
// import { ref } from "vue";

// const selectedCurrency = ref();
// const currencies = ref([
//     { name: '$' },
//     { name: '€' }
// ]);
</script>

<style>
.calculator-component {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* height: 1000px; */
  height: 92vh;
  text-align: center;
}
#title-text-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 30%;
}
#calculator-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 70%;
  border: 1px solid red;
}
#currency-selector-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 95%;
  height: 10%;
  border-bottom: 1px solid #000;
}
</style>