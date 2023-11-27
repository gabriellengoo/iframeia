<template>
    <div class="analog-clock">
      <div class="clock-face">
        <div class="hand hour" :style="{ transform: `rotate(${hourRotation}deg)` }"></div>
        <div class="hand minute" :style="{ transform: `rotate(${minuteRotation}deg)` }"></div>
        <div class="hand second" :style="{ transform: `rotate(${secondRotation}deg)` }"></div>
        <div class="center"></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        hourRotation: 0,
        minuteRotation: 0,
        secondRotation: 0,
      };
    },
    mounted() {
      this.updateClock();
      setInterval(this.updateClock, 1000);
    },
    methods: {
      updateClock() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
  
        this.hourRotation = 360 * (hours % 12) / 12 + 90 + (30 * minutes) / 60;
        this.minuteRotation = 360 * minutes / 60 + 90 + (6 * seconds) / 60;
        this.secondRotation = 360 * seconds / 60 + 90;
      },
    },
  };
  </script>
  
  <style scoped>
  .analog-clock {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
  }
  
  .clock-face {
    position: relative;
    width: 200px;
    height: 200px;
    height: 100px;
    border: 4px solid #333;
    border-radius: 50%;
    background: white;
  }
  
  .hand {
  position: absolute;
  /* top: 50%; */
  left: 50%;
  transform-origin: 50% 100%; /* Center the hands properly */
  background-color: #333;
}

  
  .hour {
    height: 50px;
    width: 8px;
  }
  
  .minute {
    height: 80px;
    width: 4px;
  }
  
  .second {
    height: 90px;
    width: 2px;
    background-color: red;
  }
  
  .center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #333;
  }
  </style>
  