<template>
  <div class="ios-header">
  <div class="url">internetarchitect.online</div>
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
      // const period = now.getHours() < 12 ? 'AM' : 'PM'; // Determine AM or PM
      const day = now.toLocaleDateString('en-US', { weekday: 'short' });
      const month = now.toLocaleDateString('en-US', { month: 'short' });
      const date = now.getDate();

      this.currentTime = `${hours}:${minutes}`;
      this.currentDate = `${day} ${month} ${date}`;
    },
  },
};
</script>

<style scoped>
.ios-header {
  background-color: #424242;
  padding: 10px;
  /* padding-top: 1px; */
  position: fixed;
    top: 4vh;
  width: 100vw;
  z-index: 100000;
  display: flex;
    justify-content: center;
  /* border-top: #424242 5px solid; */
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  /* box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); */
}

.url{
  background-color: #767676;
  font-size: larger;
    color: white;
  border-radius: 45px;
  width: 100vw;
  padding: 1.5vw;
  display: flex;
  justify-content: center;
}

.status-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  padding-top: 0px;
  font-size: 12px;
  /* width: 100vw; */
  color: #ffffff;
  /* color: #000000; */
  padding-top: 0px;
 
}

.time {
  justify-content: flex-start;
  font-weight: bold;
  display: flex;

}

.battside{
  display: flex;
  justify-content: flex-end;
}

.date {

  padding-left: 1vw;
}

.wifi-icon {
  width: 20px;
  height: 20px;
  /* background-color: #4CAF50; Green for connected, adjust as needed */
}

.battery-icon {
  display: flex;

  align-content: center;
  align-items: center;
  /* padding: 2vw; */
  flex-direction: row;
}
</style>
