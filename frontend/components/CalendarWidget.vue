<template>
    <div class="calendar-widget">
      <!-- <input v-model="selectedDate" type="date" class="date-input" @change="handleDateChange" /> -->
      <div class="calendar">
        <div class="header">
          <button @click="prevMonth">&lt;</button>
          <span>{{ formattedMonth }}</span>
          <button @click="nextMonth">&gt;</button>
        </div>
        <div class="days">
          <div v-for="day in daysOfWeek" :key="day" class="day">{{ day }}</div>
          <div v-for="blankDay in leadingBlanks" :key="blankDay" class="empty"></div>
          <div v-for="date in daysInMonth" :key="date" class="date" @click="selectDate(date)">
            {{ date }}
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedDate: '', // Format: 'YYYY-MM-DD'
        currentMonth: new Date(),
      };
    },
    computed: {
      formattedMonth() {
        return this.currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' });
      },
      daysOfWeek() {
        return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      },
      daysInMonth() {
        const firstDay = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth(), 1).getDay();
        const totalDays = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() + 1, 0).getDate();
  
        return Array.from({ length: totalDays }, (_, i) => i + 1);
      },
      leadingBlanks() {
        const firstDay = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth(), 1).getDay();
        return Array.from({ length: firstDay }, (_, i) => i);
      },
    },
    methods: {
      nextMonth() {
        this.currentMonth.setMonth(this.currentMonth.getMonth() + 1);
      },
      prevMonth() {
        this.currentMonth.setMonth(this.currentMonth.getMonth() - 1);
      },
      selectDate(date) {
        this.selectedDate = `${this.currentMonth.getFullYear()}-${(this.currentMonth.getMonth() + 1)
          .toString()
          .padStart(2, '0')}-${date.toString().padStart(2, '0')}`;
      },
      handleDateChange() {
        // Do something when the date input changes
        console.log('Selected Date:', this.selectedDate);
      },
    },
  };
  </script>
  
  <style scoped>
  .calendar-widget {
    max-width: 300px;
    margin: auto;
    border-radius: 15px;
    background-color: #f0f0f0;
  }
  
  .date-input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    margin-bottom: 10px;
  }
  
  .calendar {
    border: 1px solid #ddd;
    border-radius: 15px;
    overflow: hidden;
  }
  
  .header {
    background-color: #f0f0f0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
    font-weight: bold;
  }
  
  .header button {
    background: none;
    border: none;
    cursor: pointer;
  }
  
  .days {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
  }
  
  .day,
  .date,
  .empty {
    text-align: center;
    padding: 10px;
    border-bottom: 1px solid #ddd;
  }
  
  .date:hover {
    background-color: #c2ff88;
    cursor: pointer;
  }
  </style>
  