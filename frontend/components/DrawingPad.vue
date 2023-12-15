<!-- components/DrawingPad.vue -->
<template>
   <div>
    <button @click="toggleCanvas">Draw</button>
    <div v-show="showCanvas" class="canvas-container">
      <canvas ref="canvas" @mousedown="startDrawing" @mousemove="draw" @mouseup="stopDrawing"></canvas>
      <button @click="clearCanvas">Clear Canvas</button>
      <button @click="toggleCanvas">Close Canvas</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawing: false,
      showCanvas: false,
      penColor: '#e5af08', // Initial pen color (black)
    };
  },
  methods: {
    toggleCanvas() {
      this.showCanvas = !this.showCanvas;
    },
    startDrawing(event) {
      const canvas = this.$refs.canvas;
      const context = canvas.getContext('2d');
      const { offsetX, offsetY } = event;

      context.beginPath();
      context.moveTo(offsetX, offsetY);
      this.drawing = true;
    },
    draw(event) {
      if (!this.drawing) return;

      const canvas = this.$refs.canvas;
      const context = canvas.getContext('2d');
      const { offsetX, offsetY } = event;

      context.strokeStyle = this.penColor;
      context.lineTo(offsetX, offsetY);
      context.stroke();
    },
    stopDrawing() {
      this.drawing = false;
    },
    clearCanvas() {
      const canvas = this.$refs.canvas;
      const context = canvas.getContext('2d');
      context.clearRect(0, 0, canvas.width, canvas.height);
    },
  },
};
</script>

<style scoped>
.canvas-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background-color: rgba(255, 255, 255, 0.8); */
  z-index: 0; /* Ensure it appears above other content */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

@media (max-width: 768px) {
.canvas-container {
    justify-content: flex-end;
}

}
/* Add any custom styles here */
</style>
