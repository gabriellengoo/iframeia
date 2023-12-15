<!-- components/ProfilePicture.vue -->

<template>
    <div class="profile-picture">
      <img src="/ialoggo.png" alt="Profile Picture" />
      <!-- <SvgMessagesmobile></SvgMessagesmobile> -->
    </div>
  </template>
  
  <style scoped>
  .profile-picture{
    /* overflow: hidden; */
    width: 4vw;
    height: auto;
    border-radius: 50%;
    padding: 1vw;
    padding-left: 0;
}

@media (max-width: 768px) {
  .profile-picture {
    /* width: 10vw;
    height: auto;
    border-radius: 50%;  */
    /* Make it a circle by setting border-radius to 50% */
    /* overflow: hidden;  */ 
    /* Hide overflow to maintain the circular shape */
    width: 14vw;
    height: auto;
    border-radius: 50%;
    padding: 1vw;
    padding-right: 2vw;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Maintain image aspect ratio and cover the entire circle */
  }

}
  </style>

