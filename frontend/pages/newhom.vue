<template>
    <div>
    
      <div class="iphone ">
        <div class="screen ipadbg">
          <!-- time -->
          <Time />

          <!-- all apps -->
          <div class="allappscont">
             <!-- top three -->
              <div class="topappscont">
                <div class="topapps">
                  <div class="topappsinner flex flex-col justify-between">
                    <!-- top two -->
                    <div class="flex justify-between h-[40%] pb-[5%]">
                       <div class="top-row-image w-[-webkit-fill-available] bg-[rgba(253,253,253,0.32157)]">
                        <!-- <img
                          class=" p-0"
                          src="/homeimg.jpeg"
                          width="50%"
                          height="50%"
                          alt="logo"
                        /> -->
                      </div>
                      <div class="p-[1vw]"></div>
                      <div class="top-row-image w-[-webkit-fill-available]">
                        <img
                          class=" p-0"
                          src="/homeimg.jpeg"
                          width="50%"
                          height="50%"
                          alt="logo"
                        />
                      </div>
                    </div>
                    <!-- bottom of top two -->
                    <div class="longimg top-row-image">
                        <img
                          class=" p-0"
                          src="/homeimg.jpeg"
                          width="50%"
                          height="50%"
                          alt="logo"
                        />
                        <!-- <div class="overlay-text">On this day<span class="overlay-text-inner">sep 15, 2020</span></div> -->
                    </div>
                  </div>


                  <!-- image-->
                  <div class="topappsinner top-row-image">
                      <!-- <div class="top-row-image"> -->
                        <img
                          class=" p-0"
                          src="/homeimg.jpeg"
                          width="50%"
                          height="50%"
                          alt="logo"
                        />
                        <div class="overlay-text">On this day<span class="overlay-text-inner">sep 15, 2020</span></div>
                      <!-- </div> -->
                  </div>

                  <!-- calender -->
                  <div class="topappsinner">
                    <CalendarWidget />
                  </div>
                </div>
              </div>



          </div>

        </div>
      </div>
  
  
    </div>
  </template>
  
  
  
  
  
  <script>
  import { groq } from '@nuxtjs/sanity'
  import { mapState, mapActions } from 'vuex'
  import Time from '@/components/Time.vue';
  // import AboutPage from '~/components/AboutPage.vue'
  import CalendarWidget from '@/components/CalendarWidget.vue';
  // import AnalogClock from '@/components/AnalogClock.vue';

  export default {

    components: {
    // AnalogClock,
    Time,
    CalendarWidget,
    },

    name: 'IndexPage',
    data() {
      return {
        project: false,
        index: 1,
        realIndex: 0,
        step: 0,
        isBlueBoxActive: false,
        contentContainerStyle: {},
        scrolled: false,
        back: false,
        activeStyle: { textDecoration: "none" },
      }
    },
  
    scroll() {
      if (this.project.slider) {
        this.scrolled = !this.scrolled;
        const gsap = this.$gsap;
        let height = this.$refs["footer"].offsetHeight;
        if (this.scrolled) {
          gsap.to(this.$refs["container"], { y: -height });
        } else {
          gsap.to(this.$refs["container"], { y: 0 });
        }
      }
    },
  
    async asyncData({ $sanity, store }) {
      const homeQuery = groq`*[_type == "home" ]  {..., listImage,} {..., 
       
       grid[] {_key, spacer, "video" : 
      {"id" : video.asset->playbackId, "aspect" : video.asset->data.aspect_ratio},
        "image" : {"image" : image.asset._ref, "aspect" : image.asset->metadata.dimensions.aspectRatio, "position" : position}, 
      title, photographer,year,hair,styleing, link, production, location,
        "reference" : {"key" : reference._ref, "title" : reference->title, "clients" : reference->client[].label, "slug" : reference->slug.current, "talent" : reference->talent->title, "team" : reference->team, "meta" : reference->meta}} } 
       
        {..., grid2[] {_key, spacer, thumbnailTime, "video" : 
      {"id" : video.asset->playbackId, "aspect" : video.asset->data.aspect_ratio},
        "image" : {"image" : image.asset._ref, "aspect" : image.asset->metadata.dimensions.aspectRatio, "position" : position}, 
      title, photographer,year,imageWidth,hair,makeup,dop,set,styleing, link, production, location, listImage, draft,
        "reference" : {"key" : reference._ref, "title" : reference->title, "clients" : reference->client[].label, "slug" : reference->slug.current, "talent" : reference->talent->title, "team" : reference->team, "meta" : reference->meta}} } 
       
      {...,meta[]{
        title,
        content,
      }}
  
      {...,metaemails[]{
        title,
        content,
        link,
       
      }}
  
  
        {...,
          sections[]{
            title,
            subtitle,
            content,
          }
        }
        
        | order(_updatedAt desc)[0]
        `;
  
        const home = await $sanity.fetch(homeQuery);
  
        // Commit meta and metaemails to the Vuex store
        // store.commit('setMeta', home.meta);
        // store.commit('setMetaEmails', home.metaemails);
        // store.commit('setThumbnailTime', home.thumbnailTime);
        // store.commit('setYear', home.year);
  
        return { home };
    },
  
  
   
  
    methods: {
      ...mapActions(['setTitle']),
      setProject(reference) {
        this.project = reference
      },
  
      openGallery() {
        this.$store.commit('setGalleryState', true); // Set gallery state as open
      },
      closeGallery() {
        this.$store.commit('setGalleryState', false); // Set gallery state as closed
      },
      toggleBlueBox() {
        // Toggle the blue box visibility
        this.isBlueBoxActive = !this.isBlueBoxActive;
  
        // Update the content container position
        this.updateContentContainerPosition();
  
        if (this.isBlueBoxActive) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'auto';
        }
      },
      updateContentContainerPosition() {
        const isMobile = window.innerWidth <= 768;
        // Calculate the offset based on blue box height
        const offset = isMobile ? (this.isBlueBoxActive ? "100vh" : "0") : (this.isBlueBoxActive ? "365px" : "0");
  
        // Calculate the offset based on whether it's a mobile screen or not
  
        // Set the content container position
        this.contentContainerStyle = {
          transform: `translateY(${offset})`,
        };
      },
  
    },
    created() {
      this.setTitle(this.home.title)
    },
  }
  </script>
  
  
  
  <style scoped>


.ipadbg {
  background-image: url('~static/ipadbg.jpg'); /* Adjust the file name and path accordingly */
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


  .allappscont{
    padding: 5vw;
  }
  .topapps{
    display: flex;
    height: inherit;
  }

  .topappsinner{
    width: 30vw;
    padding: 2.5vw;
    overflow: hidden;
    border-radius: 12px;
    /* display: flex;
    justify-content: center; */
  }

  .topappscont{
    display: flex;
    align-content: center;
    align-items: center;
    height: 45vh;
    /* width: 100vw; */
    justify-content: center;
    flex-direction: row;
    flex-wrap: nowrap;
  }

  .top-row-image img {
  width: 100%;
  height: 100%;
  border-radius: 12px;
  object-fit: cover; /* Ensure the image covers the entire square */
}
.top-row-image {
  position: relative;
    border-radius: 12px;
  display: inline-block;
}

.top-row-image {
    position: relative;
}

.longimg{
  /* height: 40%; */
  padding-top: 5%;
  overflow: hidden;
  display: block;
  position: relative;
}

.overlay-text {
    text-transform: uppercase;
    position: relative;
    bottom: 15%;
    left: 5%;
    /* transform: translate(-50%, -50%); */
    color: white;
    font-size: 14px;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    pointer-events: none;
}

.overlay-text-inner {
    text-transform: uppercase;
    color: white;
    font-size: 10px;
    font-weight: normal;
}
  
  </style>
  