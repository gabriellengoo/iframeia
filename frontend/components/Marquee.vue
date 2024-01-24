<!-- components/Marquee.vue -->

<template>
  <div class="marcont">
    <div class="marquee">
    <div class="content">
      <p>my poems are in my notes app</p>
      <p>soundcloud</p>
      <p>my instagram</p>
      <p>selfies in photos</p>
      <p>voice memos for more</p>
      <p>email for any enquiries</p>
      <p>my poems are in my notes app</p>
      <p>soundcloud</p>
      <p>my instagram</p>
      <p>selfies in photos</p>
      <p>voice memos for more</p>
      <p>email for any enquiries</p>
    </div>
  </div>
  </div>
  
</template>

<style scoped>
.marcont{
  position: fixed;
    bottom: 0;
    right: 0;
    width: 100vw;
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: nowrap;
}
.marquee {
     /* position: fixed; */
     bottom: 0;
    right: 0;
    width: 97vw;
    background-color: #f0f0f065;
    /* border-color: black;
    border-width: .5px; */
    backdrop-filter: blur(10px);
    padding: 10px;
    white-space: nowrap;
    overflow: hidden;
    color: rgb(255 255 255);
    font-weight: 600;
    background-color: rgba(253,253,253,0.32157);
    background-color: rgb(255 250 250 / 7%);
    width: -moz-fit-content;
    /* width: fit-content; */
    border-radius: 32px;
    /* display: flex; */

}
 
.content {
  display: flex;
  animation: marquee 58s linear infinite; /* Adjust the duration as needed */
}

p {
  margin-right: 20px; /* Adjust the spacing between duplicated content */
}


</style>
