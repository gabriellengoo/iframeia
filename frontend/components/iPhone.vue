<template>
  <div class="iphone ipadbg" @dblclick="toggleIframeDisplay">
    <!-- <div >  
          <img class=" mockbg " src="/ipadmock.png" />
      </div> -->

    <div class="status-bar"></div>
    <Notification />
    <!-- <Notification2 />
    <Notification3 />
    <Notification4 /> -->
    <Time />
    <Url />

    <!-- <Marquee /> -->

    <div class="screen">
      <!-- p-5 -->
      <div class="">
        <div
          v-if="!showIframe"
          class="innerinframe flex flex-col justify-center items-center"
        >
          <h1 class="text-7xl font-bold tracking-[-0.12em] pb-5">
            <span class="text-blue-500">W</span>
            <span class="text-red-500">e</span>
            <span class="text-yellow-500">l</span>
            <span class="text-blue-500">c</span>
            <span class="text-green-500">o</span>
            <span class="text-red-500">m</span>
            <span class="text-blue-500">e</span>
          </h1>

          <div
            class="text-lg w-[80vw] border-[.8px] border-[#b5b5b5] rounded-full p-5 pt-3 pb-3 flex items-center"
          >
            <input
              type="text"
              class="flex-1 outline-none px-3 py-1"
              placeholder="double click to browse sites we have made"
            />
            <SvgSearch class="fill-[#b5b5b5]"></SvgSearch>

          </div>
          <!-- <iframe src="https://megan-site.vercel.app/" class="w-full h-full"></iframe> -->
        </div>

        <div class="innerin" v-else>
          <iframe :src="currentIframeUrl" class="w-full h-full"></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import AnalogClock from '@/components/AnalogClock.vue';
import Time from "@/components/Time.vue";
import Url from "@/components/Url.vue";
// import CalendarWidget from '@/components/CalendarWidget.vue';
import Notification from "@/components/Notification.vue";
import Notification2 from "@/components/Notification2.vue";
import Notification3 from "@/components/Notification3.vue";
import Notification4 from "@/components/Notification4.vue";
import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.min.css";
import PasscodeInput from "@/components/PasscodeInput.vue";
import Marquee from "~/components/Marquee.vue";

export default {
  components: {
    // AnalogClock,
    Time,
    // CalendarWidget,
    Notification,
    Notification2,
    Notification3,
    Notification4,
    PasscodeInput,
    Marquee,
  },

  data() {
    return {
      isPasscodeVisible: false,
      showIframe: false,
      iframeUrls: [
        "https://henhouselondon.co.uk/",
        "https://www.alwaproduction.co.uk/",
        "https://megan-site.vercel.app/home",
        "https://theancestorssound.nyt.org.uk/",
        "https://www.linkedin.com/in/gabrielle-ngoo-259088255/",
        "https://www.instagram.com/is_this_gabrielle/",
        "https://bot.morning.fyi/",
        "https://www.distant-realities.eu/",
        // Add more URLs as needed
      ],
      currentIframeIndex: 0,
      topRowImages: [
        require("~/static/homeimg.jpeg"), // Use require for local images
        // 'https://theeventscalendar.com/knowledgebase/wp-content/uploads/2021/04/Screen-Shot-2021-04-29-at-9.42.57-AM.png',
        // '/path/to/image3.jpg', // Remove this line if there's no specific image at that location
      ],
      apps: [
        // {
        //     name: 'VoiceMemo',
        //     icon: '', // Leave it empty for now
        //     link: '/app1',
        //   },
        {
          name: "SoundCloud",
          icon: "", // Leave it empty for now
          link: "/app1",
        },
        {
          name: "Mail",
          icon: "",
          link: "/app1",
        },
        {
          name: "Notes",
          icon: "", // Leave it empty for now
          link: "./notesapp",
        },
        {
          name: "Instagram",
          icon: "", // Leave it empty for now
          link: "https://www.instagram.com/ygmegs/",
        },
        {
          name: "Photos",
          icon: "", // Leave it empty for now
          link: "/photogallery/photos",
        },
      ],
      // rowtwo
      apps2: [
        {
          name: "Messages",
          icon: "", // Leave it empty for now
          // link: '/app1',
        },
        {
          name: "Home",
          icon: "", // Leave it empty for now
          // link: '/app1',
        },
        // {
        //   name: 'Podcast',
        //   icon: '', // Leave it empty for now
        //   // link: '/app1',
        // },
        {
          name: "FaceTime",
          icon: "", // Leave it empty for now
          // link: '/app1',
        },

        // Define your app objects here
        // '/facetime.svg',
      ],
      // rowtwo
      apps3: [
        {
          name: "Mail",
          icon: "", // Leave it empty for now
          link: "mailto:meganor1997@gmail.com",
        },
        {
          name: "Notes",
          icon: "", // Leave it empty for now
          link: "./notesapp",
        },
        {
          name: "SoundCloud",
          icon: "", // Leave it empty for now
          link: "https://soundcloud.com/",
        },
      ],
    };
  },
  mounted() {
    this.initSwiper();
    // Fetch and set the SVG content dynamically for the 'FaceTime' app
    // this.fetchSVG('voicememo.svg').then((svgContent) => {
    //   this.$set(this.apps, 0, {
    //     name: 'VoiceMemo',
    //     icon: svgContent,
    //     link: 'https://myaccount.google.com/?utm_source=sign_in_no_continue&pli=1',
    //   });
    // });
    this.fetchSVG("soundcloud2.svg").then((svgContent) => {
      this.$set(this.apps, 0, {
        name: "SoundCloud",
        icon: svgContent,
        link: "https://soundcloud.com/",
      });
    });
    this.fetchSVG("mail.svg").then((svgContent) => {
      this.$set(this.apps, 1, {
        name: "Mail",
        icon: svgContent,
        link: "mailto:meganor1997@gmail.com",
      });
    });
    this.fetchSVG("notes.svg").then((svgContent) => {
      this.$set(this.apps, 2, {
        name: "Notes",
        icon: svgContent,
        link: "./notesapp",
      });
    });
    this.fetchSVG("instagram.svg").then((svgContent) => {
      this.$set(this.apps, 3, {
        name: "Instagram",
        icon: svgContent,
        link: "https://www.instagram.com/ygmegs/",
      });
    });
    this.fetchSVG("photos.svg").then((svgContent) => {
      this.$set(this.apps, 4, {
        name: "Photos",
        icon: svgContent,
        link: "/photogallery/photos",
      });
    });

    // apps2
    this.fetchSVG("messages.svg").then((svgContent) => {
      this.$set(this.apps2, 0, {
        name: "Messages",
        icon: svgContent,
        // link: '/passcode',
      });
    });
    this.fetchSVG("home.svg").then((svgContent) => {
      this.$set(this.apps2, 1, {
        name: "Home",
        icon: svgContent,
        // link: '/app1',
      });
    });
    // this.fetchSVG('podcast.svg').then((svgContent) => {
    //   this.$set(this.apps2, 2, {
    //     name: 'Podcast',
    //     icon: svgContent,
    //     // link: '/app1',
    //   });
    // });
    this.fetchSVG("facetime.svg").then((svgContent) => {
      this.$set(this.apps2, 2, {
        name: "FaceTime",
        icon: svgContent,
        // link: '/app1',
      });
    });
    // apps3
    this.fetchSVG("mail.svg").then((svgContent) => {
      this.$set(this.apps3, 0, {
        name: "Mail",
        icon: svgContent,
        link: "mailto:meganor1997@gmail.com",
      });
    });
    this.fetchSVG("notes.svg").then((svgContent) => {
      this.$set(this.apps3, 1, {
        name: "Notes",
        icon: svgContent,
        link: "./notesapp",
      });
    });
    this.fetchSVG("soundcloud2.svg").then((svgContent) => {
      this.$set(this.apps3, 2, {
        name: "SoundCloud",
        icon: svgContent,
        link: "https://soundcloud.com/",
      });
    });
  },
  methods: {
    toggleIframeDisplay() {
      this.showIframe = !this.showIframe;
      if (this.showIframe) {
        this.currentIframeIndex =
          (this.currentIframeIndex + 1) % this.iframeUrls.length;
      }
    },
    openPasscode() {
      this.isPasscodeVisible = true;
    },
    closePasscode() {
      this.isPasscodeVisible = false;
    },
    // Call this method to show the notification
    showCustomNotification() {
      this.$refs.notification.notificationText = "Custom Notification!";
      this.$refs.notification.showNotification();
    },
    fetchSVG(url) {
      return fetch(url)
        .then((response) => response.text())
        .catch((error) => {
          console.error("Error fetching SVG:", error);
          return ""; // Return an empty string if there's an error
        });
    },
    initSwiper() {
      // Initialize Swiper with options
      this.swiper = new Swiper(this.$refs.slider, {
        slidesPerView: "auto",
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    },
  },
  computed: {
    currentIframeUrl() {
      return this.iframeUrls[this.currentIframeIndex] || "";
    },
  },
};
</script>

<style scoped>
.innerin{
  height: 100vh;
    padding-top: 5vh;
    z-index: 30 !important;
}

.innerinframe{
  height: 100vh;
    padding-top: 5vh;
    z-index: 40 !important;
}
.swiper-wrapper {
  z-index: 40 !important;
}

.slider {
  height: calc(100% - 0.5rem);
}
.top-row-image {
  position: relative;
  display: inline-block;
}

.overlay-text {
  text-transform: uppercase;
  position: absolute;
  bottom: 10%;
  left: 15%;
  /* transform: translate(-50%, -50%); */
  color: white;
  font-size: 14px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
}

.overlay-text-inner {
  text-transform: uppercase;
  color: white;
  font-size: 10px;
  font-weight: normal;
}
.ipadbg {
  /* background-color: rgb(62, 150, 151);; */
  height: 100vh; /* Adjust the height as needed */
  /* Additional styles for your content */
}
.iphone {
  width: 100vw;
  height: 100vh;
  /* border: 16px solid #000; */
  /* border-radius: 36px; */
  overflow: hidden;
  position: relative;
}

.status-bar {
  /* height: 20px; */
  /* background-color: #000; */
}

.screen {
    /* height: calc(100% - 20px); */
    width: 100vw;
    height: 100vh;
    /* background-color: #fff; */
    /* overflow-y: auto; */
    /* padding: 10px; */
    display: flex;
    display: grid;
    /* flex-wrap: wrap; */
    /* justify-content: center; */
    /* flex-direction: column; */
    /* align-items: center; */
    /* align-content: center; */
}

/* .grid {
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 10px;
max-width: 600px;
} */

.grid2 {
  display: flex;
  justify-content: center;
}

.activeappscont {
  justify-content: center;
  display: flex;
}

.activeapps {
  display: flex;
  justify-content: center;
  background-color: rgba(253, 253, 253, 0.32157);
  width: -moz-fit-content;
  width: fit-content;
  border-radius: 32px;
}

.activeappsicons {
  padding: 1vw;

  /* padding-top: 0; */
}
.grid2inner {
  display: grid;
  grid-column: span 2;
}
.toprow {
  width: 100vw;
  /* height: 35vh; */
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.top-row-image {
  width: 30vw;
  /* height: 44vh; */
  /* padding-top: 50vh; */
  padding: 2vw;
  position: relative;
  overflow: hidden;
}

.top-row-image img {
  width: 100%;
  height: 100%;
  border-radius: 12px;
  object-fit: cover; /* Ensure the image covers the entire square */
  /* position: absolute;
top: 0;
left: 0; */
}

.toprowinner {
  display: flex;
  width: 60vw;
  height: 40vh;
}
.square {
  background: #000;
}

.grid {
  display: grid;
  height: 15vw;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px; /* Adjust the gap between squares */
  max-width: 600px; /* Adjust the maximum width of the grid */
}

.top-row-imageg {
  /* padding-top: 50%; */
  /* Create a square aspect ratio */
  position: relative;
  overflow: hidden;
  background: #000;
  border-radius: 12px;
}

.top-row-imageg div {
  width: 100%;
  height: 100%;
}

.clock {
  /* padding-top: 50%;  */
  /* Create a square aspect ratio */
  position: relative;
  overflow: hidden;
  background-color: rgba(253, 253, 253, 0.32157);
  border-radius: 12px;
}

.clock div {
  width: 100%;
  height: 100%;
}

.bottom-row-image {
  grid-column: span 2; /* Span two columns to create a big square */
  /* padding-top: 100%;  */
  position: relative;
  overflow: hidden;
  background-color: rgba(253, 253, 253, 0.32157);
  border-radius: 12px;
}

.bottom-row-image div {
  width: 100%;
  height: 100%;
}

.dots-container {
  display: flex;
  justify-content: center;
}

.dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  margin-right: 10px; /* Adjust the spacing between the dots */
}

.filled {
  background-color: #ffffff; /* Set the color for the filled dot */
}

.faded {
  background-color: rgba(
    255,
    255,
    255,
    0.5
  ); /* Set the color for the faded dot (adjust the alpha value for the desired level of fading) */
}
.app {
  padding: 3vw;
  padding-top: 0;
  transition: transform 0.3s ease; /* Add transition for smooth scaling */
}

.activeappsicons:hover {
  transform: scale(1.1); /* Scale up on hover */
}

.activeappsicons {
  transition: transform 0.3s ease; /* Add transition for smooth scaling */
}

.app:hover {
  transform: scale(1.1); /* Scale up on hover */
}

.app-icon {
  width: 60px;
  height: 60px;
  border-radius: 12px;
  margin-bottom: 5px;
  border-radius: 12px; /* Curved edges */
  overflow: hidden;
}

/* .app-icon svg {
width: calc(16.6667% - 10px);
max-width: 60px;
margin: 5px;
border-radius: 12px;
overflow: hidden;
} */

.app-label {
  display: flex;
  font-size: 12px;
  color: #fcfcfc;
  justify-content: center;
}

.grid3 {
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .grid2 {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100% !important;
  }

  .grid3 {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 100% !important;
    /* flex-direction: row;
  display: flex;
  flex-wrap: wrap; */
  }

  .mobilegrid3mb {
    display: flex;
    width: 100% !important;
    justify-content: flex-start;
  }

  .mobilegrid {
    display: flex;
    width: 100% !important;
    padding: 4.5rem;
  }
}

@media (max-width: 320px) {
  .mobilegrid {
    display: flex;
    width: 100% !important;
    padding: 2.5rem;
  }
}
</style>
