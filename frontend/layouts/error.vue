<!-- pages/error.vue -->
<template>
 <div class="ercontainer">

  <div class="error-title pb-10">
      <p class="error-message ">There seems to be an error or battery is dead</p>
      <p class="error-message ">contact.internetarchitect.com/support/restore</p>
      <NuxtLink class=" error-messageback" to="/">Back</NuxtLink>
   </div>

  <div class="error-container">
   


   
    <div class="deskonly fill-white error-messagesvg uppercase" ><SvgLaptop></SvgLaptop></div>
    <div class="mobileonly fill-white error-messagesvg uppercase"><SvgPhone></SvgPhone></div>

    <div class=" fill-white error-messageback "><SvgErrorbat></SvgErrorbat></div>
   
 
  
  </div>
 </div>
</template>

<script>
export default {
  // You can customize the layout or add more logic here
};
</script>

<style scoped>
/* Center the content using Flexbox */
.ercontainer {
  background-color: black;
  height: 100vh;
  width: 100vw;
  /* z-index: 100000000000 !important; */
}

.error-container {
  display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: -webkit-fill-available;
    position: absolute;
    top: 0;
    width: 100vw;
    pointer-events: none;
   /* Make the container full height of the viewport */
  /* z-index: 100000000000 !important; */
}

.error-title {
  font-size: 2rem;
  color: #ffffff; /* Tomato color */
  display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: flex-start;
    /* margin: 10px; */
    padding: 10px;
}

.error-message {
  font-size: 1.3rem;
  color: #ffffff;
  /* margin-top: 10px; */
}

.error-messagesvg {
  font-size: 1.3rem;
  color: #ffffff;
  /* margin-top: 10px; */
}

.error-messageback {
  font-size: 1.3rem;
  color: #ffffff;
  display: flex;
    flex-direction: column;
    align-items: center;
  margin-top: 10px;
}

@media (max-width: 768px) {
.svg{
  height: 20vw;
}

.error-message {
  font-size: 1rem;
  /* color: #333; */
  /* margin-top: 10px; */
}

.error-messagesvg {
  font-size: 1rem;
  /* color: #ffffff; */
  /* margin-top: 10px; */
}
.error-messageback {
  font-size: 1rem;
  /* color: #333; */
  /* margin-top: 10px; */
}

.error-title{
  padding: 32px;
}
}

/* tablet */
@media only screen and (min-width: 768px) and (max-width: 1024px) {
  /* Add your styles here */
  .svg{
  height: 12vw;
}

.error-title{
  padding: 32px;
}
}

@media only screen and (min-width: 2560px) {
  .error-message {
  font-size: 1.7rem;
  /* color: #333; */
  /* margin-top: 10px; */
}

.error-title{
  padding: 32px;
}

}


</style>
