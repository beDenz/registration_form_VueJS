<template>
  <div class="custom-datapicker">
    <div class="custom-datapicker__background" v-if="openDates" @click="setOpenDates"></div>
    <input
      class="registration-form__input custom-datapicker__input"
      type="text"
      placeholder="Not selected"
      v-model="value"
      @click="setOpenDates"
      readonly
    />
    <div class="custom-datapicker__dates" v-bind:class="{open: openDates}">
      <div class="custom-datapicker__dates-inner">
        <div class="custom-datapicker__head">
          <div class="custom-datapicker__arrow left" @click="prevYear">
            <span>&#60;</span>
          </div>
          <div class="custom-datapicker__month">
            <span>{{year}}</span>
          </div>
          <div class="custom-datapicker__arrow right" @click="nextYear">
            <span>&#62;</span>
          </div>
        </div>
        <div class="custom-datapicker__head">
          <div class="custom-datapicker__arrow left" @click="prevMonth">
            <span>&#60;</span>
          </div>
          <div class="custom-datapicker__month">
            <span>{{months[month]}}</span>
          </div>
          <div class="custom-datapicker__arrow right" @click="nextMonth">
            <span>&#62;</span>
          </div>
        </div>
        <div class="custom-datapicker__days">
          <div
            class="custom-datapicker__day"
            v-bind:class="{active: day == selectDate.day}"
            v-for="day in currentDays"
            v-bind:key="day"
            @click="setSelectDate"
          >
            <span>{{day}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Datapicker",
  data() {
    return {
      value: null,
      date: null,
      day: null,
      month: null,
      year: null,
      currentDays: null,
      selectDate: {
        day: null,
        month: null,
        year: null
      },
      openDates: false,
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ]
    };
  },
  props: ["change"],
  watch: {
    value() {
      this.$emit("change", { name: "birthday", value: this.value });
    }
  },
  methods: {
    init: function() {
      this.date = new Date();
      this.day = this.date.getDate();
      this.month = this.date.getMonth();
      this.year = this.date.getFullYear();
      this.currentDays = this.getDaysInMonth(this.month, this.year);
    },
    getDaysInMonth: function(month, year) {
      return new Date(year, month, 0).getDate();
    },
    nextMonth: function() {
      this.month++;
      if (this.month > 11) {
        this.month = 0;
        this.year++;
      }
      this.currentDays = this.getDaysInMonth(this.month, this.year);
    },
    prevMonth: function() {
      this.month--;
      if (this.month < 0) {
        this.month = 11;
        this.year--;
      }
      this.currentDays = this.getDaysInMonth(this.month, this.year);
    },
    prevYear: function() {
      this.year--;
    },
    nextYear: function() {
      let nowYear = new Date();

      if (this.year < nowYear.getFullYear()) {
        this.year++;
      }
    },
    setSelectDate: function(e) {
      this.selectDate = {
        day: e.target.textContent,
        month: this.month,
        year: this.year
      };
      this.value = `${this.formatDate(this.selectDate.day)} / ${this.formatDate(
        this.selectDate.month + 1
      )} / ${this.selectDate.year}`;
      this.openDates = false;
    },
    formatDate: function(value) {
      if (value > 0 && value < 10) {
        return "0" + value;
      }
      return value;
    },
    setOpenDates: function() {
      this.openDates = !this.openDates;
    }
  },
  mounted() {
    this.init();
  }
};
</script>