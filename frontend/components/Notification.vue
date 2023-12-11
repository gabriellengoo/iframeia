<template>
    <div v-if="isVisible" class="notification">
      <!-- You can customize the content here, replace it with your text -->
      <p>Check the notes app</p>
      <!-- Close button -->
      <button @click="closeNotification">Close</button>
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
        // Auto-hide after 3 seconds (adjust the timeout as needed)
        setTimeout(this.closeNotification, 1000);
      },
      closeNotification() {
        this.isVisible = false;
      },
    },
  };
  </script>
  
  <style scoped>
  .notification {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 10px;
    background-color: rgba(253, 253, 253, 0.9); /* Adjust background color and opacity */
    text-align: center;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-bottom: 2px solid #ccc; /* Optional border at the bottom */
    z-index: 1000000; /* Ensure it appears above other content */
    transition: top 0.5s ease; /* Animation effect */
  }
  
  /* Add more styles for your notification content, e.g., p and button */
  .notification p {
    margin: 0;
    font-size: 16px;
    font-weight: bold;
  }
  
  .notification button {
    background-color: #007bff; /* Customize the button background color */
    color: #fff; /* Customize the button text color */
    border: none;
    padding: 8px 16px;
    cursor: pointer;
  }
  </style>
  