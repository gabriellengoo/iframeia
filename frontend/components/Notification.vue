<template>
    <div class="notificationcont" :class="{ 'slide-in': isVisible }">
      <button @click="closeNotification">
        <div v-if="isVisible" class="notification">
          <div class="topnoti font-light flex items-center">
            <div class="flex items-center">
              <SvgMessages></SvgMessages>
              <p class="pl-2">Messages</p>
            </div>
            <div><p class="pl-2">now</p></div>
          </div>
          <!-- You can customize the content here, replace it with your text -->
          <div class="botnoti">
            <p class="font-bold">Web Dev</p>
            <p class="font-light">Hey, Check your notes app !</p>
            <!-- Close button -->
          </div>
        </div>
      </button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isVisible: false,
        notificationText: "New Notification!",
      };
    },
    methods: {
        showNotification() {
    this.isVisible = true;
  },
  closeNotification() {
    this.isVisible = false;
    // Slide out the notification by setting a delay
    setTimeout(() => {
      this.$refs.notificationcont.style.top = '-100%';
    }, 500); // Adjust the delay as needed
  },
    },
    mounted() {
      // Show the notification automatically on mount
      setTimeout(() => {
    // Show the notification automatically after the delay
    this.showNotification();
  }, 5000);
    },
  };
  </script>
  
  <style scoped>
  .topnoti {
    /* filter: drop-shadow(3px 2px 2px black); */
    width: inherit;
    background: #ffffff85;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    /* border-bottom: 1.5px solid rgb(210 205 205 / 53%); */
    padding: 8px 16px;
    display: flex;
    justify-content: space-between;
  }
  
  .botnoti {
    padding: 8px 16px;
  }
  .notificationcont {
  position: fixed;
  top: -100%; /* Start off-screen */
  left: 0;
  width: 100%;
  display: flex;
  padding: 10px;
  text-align: center;
  z-index: 1000000;
  color: #2a2a2a;
  transition: top 0.5s ease; /* Add a transition for smooth sliding */
  justify-content: center;
}

.notificationcont.slide-in {
  top: 0;
}

.notification {
  width: 40vw;
  border-radius: 10px;
  backdrop-filter: blur(1px);
  text-align: left;
  background-color: rgb(255 255 255 / 75%);
  transition: top 0.5s ease; /* Change to top for sliding effect */
}

/* Add more styles for your notification content, e.g., p and button */
.notification p {
  margin: 0;
  font-size: 13px;
  /* font-weight: bold; */
}
  </style>
  