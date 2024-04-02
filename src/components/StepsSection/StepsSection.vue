<template>
  <main id="steps-section-component">
    <div id="steps-section-container">
      <div class="icon-box">
        <img id="sustainability-image" src="../../assets/images/steps-icons/sustainability-icon.png" alt="step icon">
        <span class="icon-text">Sustainability</span>
      </div>
      
      <div class="icon-box">
        <img id="money-image" src="../../assets/images/steps-icons/money-icon.png" alt="step icon">
        <span class="icon-text">Value for Money</span>
      </div>

      <div class="icon-box">
        <img id="earthquake-image" src="../../assets/images/steps-icons/earthquake-icon-2.png" alt="step icon">
        <span class="icon-text">Earthquake Proof</span>
      </div>

      <div class="icon-box">
        <img id="construction-image" src="../../assets/images/steps-icons/fast-construction-icon.png" alt="step icon">
        <span class="icon-text">Fast Construction</span>
      </div>

      <div class="icon-box">
        <img id="maintenance-image" src="../../assets/images/steps-icons/low-maintenance-icon.png" alt="step icon">
        <span class="icon-text">Low Maintenance</span>
      </div>
    </div>
  </main>
</template>

<script setup>
</script>

<style scoped>
#steps-section-component {
  width: 100%;
  height: 35%;
}
#steps-section-container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
  background-image: url('../../assets//images/white-brackground-4.jpg');
  background-size: cover;
  background-position: center;
}

.icon-box {
  width: 40%;
  height: 11%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.icon-text {
  font-size: 20px;
}

#sustainability-image {
    width: 95%;
    height: 100%;
  }
  #money-image {
    width: 75%;
    height: 70%;
  }
  #earthquake-image {
    width: 80%;
    height: 100%;
  }
  #construction-image {
    width: 85%;
    height: 100%;
  }
  #maintenance-image {
    width: 75%;
    height: 100%;
  }


@media screen and (width > 768px) {
  #steps-section-component {
    height: 10%;
  }
  #steps-section-container {
    flex-direction: row;
  }
  .icon-box {
    width: 9%;
    height: 35%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  #sustainability-image {
    width: 100%;
    height: 100%;
  }
  #money-image {
    width: 85%;
    height: 100%;
  }
  #earthquake-image {
    width: 95%;
    height: 100%;
  }
  #construction-image {
    width: 95%;
    height: 100%;
  }
  #maintenance-image {
    width: 85%;
    height: 100%;
  }
}
</style>