<template>
  <main id="about-us-section-component">
    <div id="about-us-section-container">
      <div id="about-us-info-container">
        <h1 id="about-us-section-title"><span>Get to know</span> <br> about <span>us</span></h1>
        <br>
        <p id="about-us-info-text">
          We are a construction company, with more than 15 years of experience in the development of projects nationwide.
          We rely on innovative methodologies that promote environmentally friendly architectural design and sustainable construction proposals.
          We direct all our efforts to achieve the highest quality of the construction process, placing special emphasis on customer service,
          we accomplish this given the personalization of each design and the operational phases until its materialization.
        </p>
        <br>
        <div id="contact-button-container">
          <button id="contact-button">
            <span><a href="https://wa.me/+5491133355144" target="_blank" style="text-decoration: none; color: #000;">Get in touch</a></span>
            <i class="pi pi-arrow-right"></i>
          </button>
        </div>
      </div>

      <div id="image-container">
        <img id="image-content" src="/images/projects/OakwoodEstates/22.jpg" alt="">
      </div>
    </div>
  </main>
</template>

<script setup>
</script>

<style scoped>
#about-us-section-component {
  width: 100%;
  height: 28%;
}
#about-us-section-container {
  width: 100%;
  height: 100%;
}
#about-us-info-container {
  width: 100%;
  height: 45%;
  padding: 15px;
}
#about-us-section-title span {
  font-weight: bold;
}
#about-us-info-text {
  line-height: 25px;
}
#contact-button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20%;
}
#contact-button {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;
  height: 50%;
  border: none;
  background: #F6D565;
  cursor: pointer;
  border-radius: 5px;
}
#contact-button span a {
  font-weight: bold;
  font-size: 16px;
}
#image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 55%;
}
#image-content {
  width: 80%; 
  height: 90%;
}

@media screen and (width > 768px) {
  #about-us-section-component {
    height: 18%;
  }
  #about-us-section-container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  #about-us-info-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100%;
    padding: 40px;
  }
  #about-us-section-title {
    font-size: 45px;
  }
  #about-us-info-text {
    font-size: 20px;
  }
  #contact-button-container {
    width: 50%;
    justify-content: flex-start;
  }
  #contact-button span a {
    font-weight: bold;
    font-size: 18px;
  }
  #image-container {
    height: 100%;
  }
  #image-content {
    width: 60%;
  }
}
</style>