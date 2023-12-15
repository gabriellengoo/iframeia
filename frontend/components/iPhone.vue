<template>
    <div class="iphone ipadbg">
        <!-- <div >  
            <img class=" mockbg " src="/ipadmock.png" />
        </div> -->
        
      <div class="status-bar"></div>
      <Notification />
      <Notification2 />
      <Notification3 />
      <Notification4 />
      <!-- <Time /> -->

      <Marquee />

      <div class="screen">
        <div>
    <!-- Your main component content goes here -->
    <!-- <button @click="openPasscode">Open Passcode Modal</button> -->
    <PasscodeInput v-if="isPasscodeVisible" @close="closePasscode" />
  </div>

        <div class="screen slider " ref="slider">
            <div class="swiper-wrapper">
              <!-- Slide 1 -->
              <div class="swiper-slide mobilegrid w-[100vw] p-10 flex justify-center">
                        <!-- top grid all -->
                        <div class="">
                          <!-- Two rows with 6 app icons each -->
                              <div class="grid2 w-[100vw]">
                              <div v-for="(app, index) in apps" :key="index" class="app">
                                  <a :href="app.link">
                                  <!-- Use the SVG content directly -->
                                  <div v-html="app.icon" class="app-icon"></div>
                                  <span class="app-label">{{ app.name }}</span>
                                  </a>
                              </div>
                              </div>

                          <!-- Two rows with 6 app icons each -->
                              <div class="grid2 w-[100vw]">
                                  <div v-for="(app, index) in apps2" :key="index" class="app">
                                    <button @click="openPasscode">
                                    <!-- <a :href="app.link"> -->
                                      <!-- Use the SVG content directly -->
                                      <div v-html="app.icon" class="app-icon"></div>
                                      <span class="app-label">{{ app.name }}</span>
                                      <!-- </a> -->
                                    </button>
                                  </div>
                              </div>
                            </div>
              </div>

              <!-- Slide 2 -->
              <div class="swiper-slide mobilegrid3mb w-[100vw] flex justify-center p-10">
                <div class="">
                          <!-- Two rows with 6 app icons each -->
                              <div class="grid3">
                                <!-- <div>easter egg app</div> -->
                              <div v-for="(app, index) in apps3" :key="index" class="app">
                                <button @click="openPasscode">
                                <!-- <a :href="app.link"> -->
                                  <!-- Use the SVG content directly -->
                                  <div v-html="app.icon" class="app-icon"></div>
                                  <span class="app-label">{{ app.name }}</span>
                                  <!-- </a> -->
                                </button>
                              </div>
                              </div>
                            </div>
              </div>

              <!-- ... Add more slides as needed ... -->
            </div>

            <!-- Add Swiper pagination -->
            <div class="dots-container swiper-pagination"></div>

          </div>


      <!-- active apps -->
      <div class="activeappscont">
        <div class="activeapps">
                <div v-for="(app, index) in apps2" :key="index" class="activeappsicons">
                    <a :href="app.link">
                    <!-- Use the SVG content directly -->
                    <div v-html="app.icon" class="app-icon"></div>
                    <!-- <span class="app-label">{{ app.name }}</span> -->
                    </a>
                </div>
    </div>
  </div>



      </div>
    </div>
  </template>
  
  <script>
  // import AnalogClock from '~/components/AnalogClock.vue';
  import Time from '~/components/Time.vue';
  // import CalendarWidget from '~/components/CalendarWidget.vue';
  import Notification from '~/components/Notification.vue';
  import Notification2 from '~/components/Notification2.vue';
  import Notification3 from '~/components/Notification3.vue';
  import Notification4 from '~/components/Notification4.vue';
  import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.min.css';
import PasscodeInput from '~/components/PasscodeInput.vue';
import Marquee from '~/components/Marquee.vue';


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

        topRowImages: [
            require('~/static/homeimg.jpeg'), // Use require for local images
            // 'https://theeventscalendar.com/knowledgebase/wp-content/uploads/2021/04/Screen-Shot-2021-04-29-at-9.42.57-AM.png',
            // '/path/to/image3.jpg', // Remove this line if there's no specific image at that location
            ],
      apps: [
      {
          name: 'VoiceMemo',
          icon: '', // Leave it empty for now
          link: '/app1',
        },
        {
          name: 'SoundCloud',
          icon: '', // Leave it empty for now
          link: '/app1',
        },
        {
          name: 'Mail',
          icon: '',
          link: '/app1',
        },
        {
          name: 'Notes',
          icon: '', // Leave it empty for now
          link: './notesapp',
        },
        {
          name: 'Instagram',
          icon: '', // Leave it empty for now
          link: 'https://www.instagram.com/ygmegs/',
        },
        {
          name: 'Photos',
          icon: '', // Leave it empty for now
          link: '/photogallery/photos',
        },
       
        ],
        // rowtwo
        apps2: [
        {
          name: 'Books',
          icon: '', // Leave it empty for now
          // link: '/app1',
        },
        {
          name: 'Home',
          icon: '', // Leave it empty for now
          // link: '/app1',
        },
        {
          name: 'Podcast',
          icon: '', // Leave it empty for now
          // link: '/app1',
        },
        {
          name: 'FaceTime',
          icon: '', // Leave it empty for now
          // link: '/app1',
        },
       
        // Define your app objects here
        // '/facetime.svg',
        ],
              // rowtwo
              apps3: [
        {
          name: 'Books',
          icon: '', // Leave it empty for now
          // link: '/app1',
        },
        {
          name: 'Photos',
          icon: '', // Leave it empty for now
          link: '/photogallery/photos',
        },
     
        ],
    };
  },
  mounted() {
    this.initSwiper();
    // Fetch and set the SVG content dynamically for the 'FaceTime' app
    this.fetchSVG('voicememo.svg').then((svgContent) => {
      this.$set(this.apps, 0, {
        name: 'VoiceMemo',
        icon: svgContent,
        link: 'https://myaccount.google.com/?utm_source=sign_in_no_continue&pli=1',
      });
    });
    this.fetchSVG('soundcloud2.svg').then((svgContent) => {
      this.$set(this.apps, 1, {
        name: 'SoundCloud',
        icon: svgContent,
        link: 'https://soundcloud.com/',
      });
    });
    this.fetchSVG('mail.svg').then((svgContent) => {
      this.$set(this.apps, 2, {
        name: 'Mail',
        icon: svgContent,
        link: 'mailto:meganor1997@gmail.com',
      });
    });
    this.fetchSVG('notes.svg').then((svgContent) => {
      this.$set(this.apps, 3, {
        name: 'Notes',
        icon: svgContent,
        link: './notesapp',
      });
    });
    this.fetchSVG('instagram.svg').then((svgContent) => {
      this.$set(this.apps, 4, {
        name: 'Instagram',
        icon: svgContent,
        link: 'https://www.instagram.com/ygmegs/',
      });
    });
    this.fetchSVG('photos.svg').then((svgContent) => {
      this.$set(this.apps, 5, {
        name: 'Photos',
        icon: svgContent,
        link: '/photogallery/photos',
      });
    });
    // apps2
    this.fetchSVG('books.svg').then((svgContent) => {
      this.$set(this.apps2, 0, {
        name: 'Books',
        icon: svgContent,
        // link: '/passcode',
      });
    });
    this.fetchSVG('home.svg').then((svgContent) => {
      this.$set(this.apps2, 1, {
        name: 'Home',
        icon: svgContent,
        // link: '/app1',
      });
    });
    this.fetchSVG('podcast.svg').then((svgContent) => {
      this.$set(this.apps2, 2, {
        name: 'Podcast',
        icon: svgContent,
        // link: '/app1',
      });
    });
    this.fetchSVG('facetime.svg').then((svgContent) => {
      this.$set(this.apps2, 3, {
        name: 'FaceTime',
        icon: svgContent,
        // link: '/app1',
      });
    });
       // apps3
       this.fetchSVG('books.svg').then((svgContent) => {
      this.$set(this.apps3, 0, {
        name: 'Books',
        icon: svgContent,
        // link: '/passcode',
      });
    });
    this.fetchSVG('photos.svg').then((svgContent) => {
      this.$set(this.apps3, 1, {
        name: 'Photos',
        icon: svgContent,
        link: '/photogallery/photos',
      });
    });
  },
  methods: {
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
          console.error('Error fetching SVG:', error);
          return ''; // Return an empty string if there's an error
        });
    },
  initSwiper() {
      // Initialize Swiper with options
      this.swiper = new Swiper(this.$refs.slider, {
        slidesPerView: 'auto',
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
    },
  },

  };
  </script>
  
  <style scoped>

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
  background-image: url('~static/ipadbg.jpeg'); /* Adjust the file name and path accordingly */
  background-size: cover; /* Adjust as needed */
  background-position: center; /* Adjust as needed */
  background-repeat: no-repeat; /* Adjust as needed */
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
    height: calc(100% - 20px);
    width: 100vw;
    /* height: 100vh; */
    /* background-color: #fff; */
    overflow-y: auto;
    /* padding: 10px; */
    display: flex;
    display: grid;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    align-content: center;
    /* border-radius: 32px; */
  }
  

 /* .grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  max-width: 600px;
} */

.grid2{
    display: flex;
    justify-content: center;
}

.activeappscont{
    justify-content: center;
    display: flex;
}

.activeapps{
    display: flex;
    justify-content: center;
    background-color: rgba(253,253,253,0.32157);
    width: -moz-fit-content;
    width: fit-content;
    border-radius: 32px;
}

.activeappsicons{
    padding: 1vw;
    
    /* padding-top: 0; */
}
.grid2inner{
    display: grid;
    grid-column: span 2;
}
.toprow{
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

.toprowinner{
    display: flex;
    width: 60vw;
    height: 40vh;
}
.square{
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

.clock{
    /* padding-top: 50%;  */
    /* Create a square aspect ratio */
  position: relative;
  overflow: hidden;
  background-color: rgba(253,253,253,0.32157);
  border-radius: 12px; 
}

.clock div{
    width: 100%;
  height: 100%;
}

.bottom-row-image {
  grid-column: span 2; /* Span two columns to create a big square */
  /* padding-top: 100%;  */
  position: relative;
  overflow: hidden;
  background-color: rgba(253,253,253,0.32157);
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
  background-color: rgba(255, 255, 255, 0.5); /* Set the color for the faded dot (adjust the alpha value for the desired level of fading) */
}
.app {
  padding: 3vw;
  padding-top: 0;
  transition: transform 0.3s ease; /* Add transition for smooth scaling */
}

.activeappsicons:hover {
  transform: scale(1.1); /* Scale up on hover */
}

.activeappsicons{
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

.mobilegrid3mb{
  display: flex;
  width: 100% !important;
  justify-content: flex-start;
}

.mobilegrid{
  display: flex;
  width: 100% !important;
}

}

  </style>
  