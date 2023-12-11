<template>
  <!-- <Tutorial/> -->
  <div class="two-column-container">
    <!-- Left Column -->
    <div class="left-column">
      <h2 class="column-title">Notes</h2>


      <div class="poemslist">
        <div>
          <h2 class="poemstitles">Poem test
          <p class="poemssubtext"> <span class="time">08:24</span> A short summary of the poem</p>
        </h2>
        </div>
       
      </div>

      <footer class="Post-footer">
        <a href="" target="_blank" rel="noopener noreferrer">Website built by The Internet Arcitect</a>
      </footer>
      <!-- Add content for the left column here -->
    </div>

    <!-- Right Column -->
    <div class="right-column">
      <h2 class="columnr-header">
        <div class="z-60 flex justify-between font-base pt-5 pl-2 pr-2 text-[#e5af08]">
          <button type="button">
            <a href="./home" class="hover:text-[#d0d0d0] fill-[#e5af08] mix-blend-multiply cursor-pointer">
              <!-- <span class="material-icons"><svg xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 0 24 24" width="14"><path d="M0 0h24v24H0z" fill="none"/><path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"/></svg></span>  -->
              <!-- Home -->
              <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"/></g><g><path d="M19,9.3V4h-3v2.6L12,3L2,12h3v8h5v-6h4v6h5v-8h3L19,9.3z M10,10c0-1.1,0.9-2,2-2s2,0.9,2,2H10z"/></g></svg>
            </a>
          </button>
          <div class="hover:text-[#d0d0d0] mix-blend-multiply cursor-pointer">
            <span class="material-symbols-outlined"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg></span>
          </div>
        </div>
      </h2>
      <!-- Add content for the right column here -->
    </div>
  </div>
</template>
 
<script>
import 'material-design-icons/iconfont/material-icons.css';

export default {
  name: 'Notes'
}
</script>

<style scoped>

.Post-footer{
  display: flex;
    justify-content: center;
    align-items: center;
    background-color: #eaeaea;
    font-weight: bold;
    color: #787878;
    text-align: center;
    padding: 10px;
    position: fixed;
    bottom: 0;
    /* border-top: 2px solid #00000008; */
    left: 0;
    filter: drop-shadow(3px 2px 2px black);
    width: 100%;
}
.two-column-container {
  display: flex;
  height: 100vh;
}

.left-column {
  flex: 0 0 30vw; /* 30% of the viewport width */
  /* padding: 20px; */
  background-color: #f2f2f7;
  background-color: #ffffff;
  overflow-y: scroll;
  border-right: 1.5px solid rgb(210 205 205 / 53%);
  filter: drop-shadow(0 25px 25px rgb(0 0 0/.15));
}

.right-column {
  flex: 0 0 70vw; /* 70% of the viewport width */
  padding: 20px;
  background-color: #ffffff;
}

.columnr-header{
  padding-top: 30px;
  padding: 10px;
  color: rgb(229 175 8);
  fill:rgb(229 175 8);
  font-size: 15px;
  font-weight: bold;
}
.column-title {
  text-align: center;
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 0px;
  padding: 10px;
  padding-top: 30px;
  border-bottom: 1.5px solid rgb(210 205 205 / 53%);
  color: #020202; /* Dark text color */
}

.poemstitles{
  /* text-align: center; */
  font-size: 15px;
  /* font-weight: bold; */
  margin-bottom: 0px;
  padding: 5px;
  /* padding-top: 30px; */
  border-bottom: .5px solid rgb(210 205 205 / 53%);
  color: #414141;
  width: 95%;
  float: right;
  transition-duration: .5s;
}

.poemstitles:hover{
background-color: rgba(255, 195, 13, 0.302);
transition-duration: .5s;
}

.poemssubtext{
  font-size: 12px;
  color: #0000007a;
}

.time{
  font-weight: bold;
  padding-right: 0.5vw;
}
</style>
