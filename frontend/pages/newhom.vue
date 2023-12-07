<template>
    <div>
  
  
    
  
      <div class="gap-2 p-2 ">
        <div class="md:pr-6" :class="home.meta ? 'md:w-7/16' : 'w-full'">
          <!-- <Grid size="small" :items="home.grid"></Grid> -->
          <Grid2 size="small" :items="home.grid2"></Grid2>
        </div>
  
  
      </div>
  
  
    </div>
  </template>
  
  
  
  
  
  <script>
  import { groq } from '@nuxtjs/sanity'
  import { mapState, mapActions } from 'vuex'
  // import AboutPage from '~/components/AboutPage.vue'
  
  export default {
  
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
  /* header {  
    animation: 1.5s ease-out 0s 1 slideInFromLeft;
  } */
  
  .item {
    width: 33.3333%;
  }
  
  .date {
    display: flex;
    align-items: center;
    font-family: Helvetica, Arial, sans-serif !important;
  }
  
  .content-container {
    width: 100vw !important;
  }
  
  .resize-animation {
    transition: width 0.3s ease-in-out, height 0.3s ease-in-out !important;
  }
  
  .headposition {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100vw !important;
    justify-content: center;
    /* padding-top: 1vh; */
    position: fixed;
    position: absolute;
  }
  
  .navele {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 98vw !important;
    /* width: 100vw !important; */
    justify-content: space-between;
  
  }
  
  .button {
    /* border-left: .8px solid #000; */
    padding: .5vw;
    font-size: 1.25rem;
    padding-right: 0;
    /* border-width: 3.9px;
      border-right: black;
      border-left: black; */
  }
  
  .buttonlogo {
    padding: .5vw;
    padding-left: 0;
    /* border-right: .8px solid #000; */
    /* border-width: 0.9px;
      border-color: rgba(28, 25, 23, var(--tw-border-opacity));
      padding: 10.899999999999999px; */
  }
  
  .content-container {
    justify-content: center;
    /* display: flex;
      justify-content: center; */
    /* background: #f7f7f7; */
  }
  
  
  
  
  button .circle:hover {
    transform: translate3d(0, -50%, 0) scale(1.5);
  }
  
  .circle {
    /* position: absolute; */
    top: 50%;
    right: 15px;
    -webkit-transform: translate3d(0, -50%, 0) scale(.5);
    transform: translate3d(0, -50%, 0) scale(.5);
    width: 16px;
    height: 16px;
    line-height: 30px;
    border-radius: 50%;
    background-color: #000;
    transition: -webkit-transform 200ms cubic-bezier(.54, .57, 0, .96);
    transition: transform 200ms cubic-bezier(.54, .57, 0, .96);
    transition: transform 200ms cubic-bezier(.54, .57, 0, .96), -webkit-transform 200ms cubic-bezier(.54, .57, 0, .96);
  
    position: relative;
    top: 50%;
    right: 0%;
    transform: translate3d(0, -50%, 0) scale(.5);
    width: 16px;
    height: 16px;
    /* line-height: 30px; */
    border-radius: 50%;
    background-color: #000;
    transition: transform 200ms cubic-bezier(.54, .57, 0, .96);
  }
  
  
  
  @keyframes slideInFromLeft {
    0% {
      transform: translateY(-100%);
    }
  
    100% {
      transform: translateY(0);
    }
  }
  
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 10.5s;
    transition: height 1s ease, opacity 0.5s ease;
    /* Add smooth transitions */
  }
  
  .fade-enter,
  .fade-leave-to {
    opacity: 0 10s;
    transition: height 1s ease, opacity 0.5s ease;
    /* Add smooth transitions */
  }
  
  /* .icon {
      display: inline-flex;
      align-self: center;
  }
  
  .icon svg, .icon img {
    height: 7em;
      width: 7em;
      fill: currentColor;
  }
  
  .icon.baseline svg, .icon img {
      top: .125em;
      top: 0.9rem;
      top: 2.9000000000000004rem;
      position: relative;
  } */
  
  .icon {
    display: inline-flex;
    align-self: center;
    top: 1vh;
    position: relative;
  }
  
  @media only screen and (min-width: 2560px) {
    .icon {
      display: inline-flex;
      align-self: center;
      top: .5vh !important;
      position: relative;
  }
  
  .lgscpad{
    padding-top: 2vh !important;
  }
  }
  
  .lgscpad{
    padding-top: unset;
  }
  
  .icon svg,
  .icon img {
    height: 2em;
    width: 5em;
    fill: currentColor;
  }
  
  .icon.baseline svg,
  .icon img {
    top: .125em;
    top: 0.9rem;
    top: 2.9000000000000004rem;
    top: -0.9em;
    /* top: 2.9000000000000004rem; */
    /* top: 0; */
    position: relative;
  }
  
  
  
  /* header{
    background-color: #ffffff00;
    pointer-events: none;
  } */
  /* Add styles for the blue box */
  .blue-box {
    position: relative;
    /* top: 0;
    left: 0;
    width: 100%;
    height: 0; */
    top: -2vh;
    /* left: -2vw; */
    width: 110%;
    height: 0;
    /* background-color: #212121; */
    background-color: #d2d2d2;
    /* border: 0.5px solid #212121; */
    /* #d2d2d2; */
    /* border: 1.5px solid #11ff00; */
    /* background-color: rgb(14, 14, 53);  */
    /* opacity: 0; */
    transition: height 1s ease, opacity 0.5s ease;
    /* Add smooth transitions */
    pointer-events: none;
    /* Disable pointer events when hidden */
    /* z-index: 100; */
    z-index: 100002;
    overflow: hidden;
  }
  
  .blue-box div {
    position: relative;
    transition: height 1s ease, opacity 0.5s ease;
    /* Add smooth transitions */
    /* font-size: 1.125rem; */
    z-index: 100002;
    /* line-height: 1.375rem; */
    /* height: 365px; */
    will-change: auto;
    padding-bottom: .5vh;
    /* min-height: 365px; */
    /* height: fit-content; */
  }
  
  .text {
    /* color:  #f7f7f7; */
    color: #212121;
    font-size: 1.125rem;
    line-height: 1.375rem;
    transition: height 1s ease, opacity 0.5s ease;
    /* Add smooth transitions */
  }
  
  .white-box {
    position: fixed;
    /* position: relative; */
    /* position: absolute; */
    top: 0;
    left: 0;
    width: 100%;
    width: 100vw;
    height: 200vh !important;
    max-height: 200vh;
    /* height: 0; */
    opacity: 0;
    pointer-events: none;
    /* background: rgba(255, 255, 255, 0.357); */
    background: rgba(255, 255, 255, 0.82);
    /* -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px); */
    transition: opacity 1s ease;
    /* Add smooth transitions */
    z-index: -10;
  }
  
  /* .blue-box.active::after {
    content: 'hhhhh ';
    transition: height 1s ease, opacity 0.5s ease;
  } */
  
  
  /* Add styles for the active blue box */
  .blue-box.active {
    height: 365px;
    /* height: fit-content; */
    min-height: fit-content;
    /* height: fit-content; */
    /* opacity: 1; */
    background-color: #d2d2d2;
    /* background-color: blue; */
    /* border-bottom: 0.5px solid #212121; */
    z-index: 100002;
    pointer-events: auto;
    /* Enable pointer events when visible */
    /* display: flex;
      align-items: center;
      justify-content: center; */
    font-size: 1.1vw;
    will-change: auto;
    overflow: hidden;
    /* min-height: 365px; */
    width: 100vw;
    max-width: 100vw;
  }
  
  .mobile {
    display: none;
  }
  
  
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    /* Your tablet-specific styles here */
    svg {
      width: 16vw !important;
    }
  
    .icon svg,
  .icon img {
    height: 2em;
    width: 8vw !important;
    fill: currentColor;
  }
  }
  
  
  @media (max-width: 768px) {
    .text {
    padding: 10px;
  }
  
    .mobile {
      display: contents;
    }
  
    .content-container {
      position: fixed;
      width: 100vw !important;
      background-color: #f7f7f7;
      border-bottom: 0.8px solid #000;
      /* border-top: 1px solid #11ff00; */
    }
  
    .blue-box.active {
      height: fit-content;
      height: 100vh;
      height: 103vh;
    }
  
    .blue-box {
      position: relative;
      top: 0 !important;
      left: 0 !important;
      width: 110%;
      height: 0;
      /* background-color: #212121; */
    }
  
    svg {
      width: 26vw;
    }
  
    .white-box {
      position: fixed;
    }
  
    .headposition {
      padding-top: 0vh;
    }
  
    .blue-box {
      top: 0vh;
      /* left: -2vw; */
      width: 110%;
      height: 0;
      /* transition: none; */
      /* background-color: #212121; */
  
    }
  
    .blue-box div {
      /* height:100vh; */
      /* padding: 10px; */
      /* padding-top: 0vh; */
    }
  
    .navelemb {
      /* padding: 1vw; */
      padding: 1.25rem;
      width: 100vw;
    }
  
    .mobilemenu {
      padding: 1.25rem;
      border-bottom: 0.8px solid #000;
    }
  
    header {
      position: fixed;
      width: 100vw;
      background-color: #f7f7f7;
    }
  
  }
  
  @media screen and (max-width: 1023px) {
  
    /* Your CSS styles for screens smaller than 1024px go here */
    /* For example, you can change the font size or layout */
    .blue-box.active {
      height: 100vh;
    }
  
    /* svg {
      width: 18vw;
    } */
  
    .blue-box {
      top: 0;
    }
  
    .mobile {
      display: contents;
    }
  
    .headposition {
      display: none;
    }
  
    .mobilemenu {
      border-bottom-width: 0.95px;
      border-color: rgba(28, 25, 23);
      padding-left: 1.5vw;
      padding-right: 1.5vw;
    }
  
    .mobilemenupad {
      /* padding: 0.5vw; */
      font-size: 1.25rem;
    }
  }
  
  
  
  
  
  .white-box.active {
    height: 100vh;
    /* Adjust the height as needed */
    width: 100vw;
    opacity: 1;
    pointer-events: auto;
    /* Enable pointer events when visible */
  }
  
  /* Add styles for the content container */
  .content-container {
    transition: transform 1s ease;
    /* Add smooth transition for content movement */
    /* font-size: 1.125rem !important; */
  }
  
  /* Add this style to your CSS */
  .underline {
    text-decoration: none;
    position: relative;
    overflow: hidden;
  }
  
  .underline:after {
    content: "";
    position: absolute;
    left: 0.55rem;
    bottom: 0px;
    /* Adjust the distance from the text as needed */
    width: 0;
    height: 1.5px;
    /* Adjust the underline thickness as needed */
    background-color: rgb(0, 0, 0);
    /* Adjust the underline color as needed */
    transition: width 0.3s ease-in-out;
    /* You can adjust the duration and timing function as needed */
  }
  
  .underline:hover:after,
  .underline:focus:after {
    width: 90%;
  }
  </style>