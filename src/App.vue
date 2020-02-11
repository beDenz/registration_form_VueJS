<template>
  <div id="app">
    <RegistrationInfo />
    <RegistrationForm />
    <div class="temp" @click="showSate">CLICK!!!</div>
  </div>
</template>

<script>
import RegistrationForm from "./components/registrationForm.vue";
import RegistrationInfo from "./components/registrationInfo.vue";

import { mapGetters } from "vuex";
export default {
  name: "App",
  computed: mapGetters(["getNewUser"]),
  components: {
    RegistrationForm,
    RegistrationInfo
  },
  methods: {
    ...mapGetters(["getNewUser"]),
    showSate: function() {
      console.log(this.getNewUser);
    }
  }
};
</script>

<style>
@import "./assets/css/style.css";
.temp {
  width: 200px;
  height: 200px;
  background-color: blue;
  user-select: none;
}
</style>
