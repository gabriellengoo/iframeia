<template>
  <!-- <Tutorial/> -->
  <div>
    <a v-if="showLink" class="homelink" href="/home">[ Enter ]</a>
    <iframe src="https://healthy-broadleaf-quark.glitch.me/" width="100%" height="600px" frameborder="0"></iframe>
  </div>
  <!-- <iPhone /> -->
</template>
 
<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      showLink: false,
    };
  },
  mounted() {
    // Set a timeout to show the link after 20 seconds
    setTimeout(() => {
      this.showLink = true;
    }, 10000);
  },
};
</script>

<style scoped>
.homelink {
  display: block;
  margin: 20px auto; /* Center the link horizontally */
  padding: 10px; /* Add some padding for better visibility */
  font-size: 16px; /* Set the font size to make it small */
  text-align: center;
  text-decoration: none;
  color: #000000; /* Set text color */
  position: absolute;
  left: 47vw;
  top: 150px; /* Adjust the top position to move it down a bit */
}
</style>