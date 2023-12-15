<!-- components/Marquee.vue -->

<template>
  <div class="marquee">
    <div class="content">
      <p>my poems are in my notes app 💫</p>
      <p>soundcloud 💫</p>
      <p>my instagram 💫</p>
      <p>selfies in photos 💫</p>
      <p>voice memos for more 💫</p>
      <p>email for any enquiries 💫</p>
    </div>
  </div>
</template>

<style scoped>
.marquee {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 40vw;
  background-color: #f0f0f0; /* Set background color as needed */
  padding: 10px;
  white-space: nowrap;
  overflow: hidden;
    color: white;
    background-color: rgba(253,253,253,0.32157);
    width: -moz-fit-content;
    /* width: fit-content; */
    border-radius: 32px;
}

.content {
  display: flex;
  animation: marquee 58s linear infinite; /* Adjust the duration as needed */
}

p {
  margin-right: 20px; /* Adjust the spacing between duplicated content */
}


</style>
