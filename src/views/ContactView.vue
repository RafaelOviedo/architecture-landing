<template>
  <main id="contact-component">
    <div id="contact-info-container">
      <h1>Get in Touch</h1>
  
      <span style="text-align: center;">
        We're here to assist you with any inquiries or project requirements.
        <br />
        <br />
        Whether you're seeking architectural advice, estimating services, or collaboration opportunities, 
        feel free to reach out to us using the contact information provided below:
      </span>
  
      <span style="font-weight: bold;">Business Hours:</span>
      <span style="text-align: center;">Monday - Friday: 9:00 AM - 6:00 PM (Local Time)</span>
    </div>

    <div id="form-image-container">
      <form id="contact-form">
        <h3>Contact Us</h3>
        <div class="input-container">
          <label for="first-name">Name</label>
          <InputText id="first-name" type="text" style="width: 100%;" />
        </div>

        <div class="input-container">
          <label for="first-name">Email</label>
          <InputText id="first-name" type="email" style="width: 100%;" />
        </div>

        <div class="input-container">
          <label for="first-name">Subject</label>
          <InputText id="first-name" type="text" style="width: 100%;" />
        </div>

        <div class="input-container">
          <label for="first-name">Message</label>
          <Textarea rows="5" cols="30" style="width: 100%;" />
        </div>

        <button id="contact-button">Send</button>
      </form>

      <div id="image-container">
        <img id="image-content" src="/images/projects/CedarRidgeResidences/1.jpg" alt="">
      </div>
    </div>

    <div id="social-media-container">
      <a href="https://www.linkedin.com/in/rafael-oviedo/?locale=en_US" target="_blank"><i class="pi pi-linkedin icon"></i></a>
      <a href="https://github.com/RafaelOviedo" target="_blank"><i class="pi pi-github icon"></i></a>
      <a href="https://www.instagram.com/" target="_blank"><i class="pi pi-instagram icon"></i></a>
    </div>
  </main>
</template>

<script setup>
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
</script>

<style scoped>
#contact-component {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 1600px;
}
#contact-info-container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 90%;
  height: 30%;
}
#form-image-container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 80%;
}
#contact-form {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 95%;
  height: 50%;
  border: 1px solid #000;
  border-radius: 5px;
}
.input-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 90%;
  height: 15%;
}
#contact-button {
  width: 50%;
  height: 7%;
  background: #000;
  color: #fff;
  border-radius: 5px;
  border: none;
  font-size: 17px;
  cursor: pointer;
}
#image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95%;
  height: 50%;
}
#image-content {
  width: 90%; 
  height: 95%;
}
#social-media-container {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 90%;
  height: 10%;
}
.icon {
  font-size: 35px;
  color: #000;
}

@media screen and (width > 768px) {
  #contact-component {
    height: 1000px;
  }
  #contact-info-container {
    height: 20%;
  }
  #form-image-container {
    height: 70%;
    flex-direction: row;
  }
  #contact-form {
    width: 50%;
    height: 90%;
  }
  #image-container {
    width: 40%;
    height: 95%;
  }
  #image-content {
    width: 90%;
  }
  .icon {
    font-size: 40px;
  }
}
</style>