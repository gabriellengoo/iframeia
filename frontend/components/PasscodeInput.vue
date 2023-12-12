<template>
    <div class="passcode-container">
        <div class="passcode-overlay"></div>
        <div class="passcode-modal">
            <!-- <p @click="closePasscode">close</p> -->
            <div class="passcode-header">Touch ID or Enter Passcode</div>
            <div class="passcode-dots">
                <div v-for="(dot, index) in passcodeDots" :key="index" :class="{ 'passcode-dot-selected': dot }"
                    class="passcode-dot"></div>
            </div>
            <div class="passcode-keyboard">
                <div v-for="(number, index) in keyboardNumbers" :key="index" @click="handleNumberClick(number)"
                    :class="{ 'last-column': index === keyboardNumbers.length - 2 }">
                    {{ number }}
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            passcode: '',
            passcodeDots: [false, false, false, false, false, false], // Represents the filled/unfilled dots
            keyboardNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0],
        };
    },
    methods: {
        handleNumberClick(number) {
            if (this.passcode.length < 6) {
                this.passcode += number;
                this.updatePasscodeDots();
            }
            if (this.passcode.length === 6) {
                // Check passcode or perform other actions
                this.checkPasscode();
            }
        },
        updatePasscodeDots() {
            this.passcodeDots = Array(6).fill(false).map((_, index) => index < this.passcode.length);
        },

        checkPasscode() {
            // Implement logic to check the entered passcode
            console.log('Checking passcode:', this.passcode);
            // Close the passcode modal
            this.closePasscode();
        },
        closePasscode() {
            this.passcode = '';
            this.passcodeDots = [false, false, false, false, false, false];
            // Emit an event or perform an action to close the passcode modal
            this.$emit('close');
        },
    },
};
</script>
  
<style scoped>
.passcode-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000000;
}

.passcode-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(10px);
    pointer-events: none;
    pointer-events: auto;
}

.passcode-modal {
    /* background-color: #fff; */
    border-radius: 10px;
    padding: 20px;
    z-index: 100000000;
    /* display: flex; */
}

.passcode-header {
    font-size: 18px;
    color: black;
    color: white;
    margin-bottom: 10px;
    text-align: center;
}

.passcode-dots {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
}

.passcode-dot {
    width: 13px;
    height: 13px;
    margin: 0 11px;
    border: 1px solid #ffffff;
    border-radius: 50%;
}

.passcode-dot-selected {
    background-color: white;
    /* Change the color as desired */
}

.passcode-keyboard {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    justify-content: center;
}

.last-column {
    /* grid-column: span 3; 
    justify-self: center; */
    opacity: 0 !important;
    pointer-events: none !important;
    /* display: none !important; */
  }

.passcode-keyboard div {
    font-size: 20px;
    text-align: center;
    padding: 18px;
    /* border: 1px solid #ddd; */
    background-color: #ffffff24;
    border-radius: 50px;
    cursor: pointer;
    transition: background-color 0.3s;
    color: white;
}

.passcode-keyboard div:hover {
    background-color: #f0f0f0;
}</style>
  