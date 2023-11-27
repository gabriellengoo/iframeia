<template>
    <div class="ios-header">
      <div class="status-bar">
        <div class="time">{{ currentTime }}<div class="date">{{ currentDate }}</div></div>
        <div class="wifi-icon"></div>
        <div class="battery-icon">100%</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentTime: '',
        currentDate: '',
      };
    },
    mounted() {
      this.updateDateTime();
      setInterval(this.updateDateTime, 1000);
    },
    methods: {
      updateDateTime() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const day = now.toLocaleDateString('en-US', { weekday: 'short' });
        const date = now.getDate();
        const month = now.toLocaleDateString('en-US', { month: 'short' });
  
        this.currentTime = `${hours}:${minutes}`;
        this.currentDate = `${day}, ${date} ${month}`;
      },
    },
  };
  </script>
  
  <style scoped>
  .ios-header {
    background-color: #f0f0f000;
    /* box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); */
  }
  
  .status-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    width: 95vw;
  }
  
  .time {
    font-size: 14px;
    /* font-weight: bold; */
    display: flex;
    color: #ffffff;
  }
  
  .date {
    font-size: 14px;
    color: #ffffff;
    padding-left: 1vw;
  }
  
  .wifi-icon {
    width: 20px;
    height: 20px;
    /* background-color: #4CAF50; Green for connected, adjust as needed */
  }
  
  .battery-icon {
    width: 20px;
    height: 20px;
    font-size: 14px;
    color: #ffffff;
    /* background-color: #2196F3; Blue for battery, adjust as needed */
  }
  </style>
  