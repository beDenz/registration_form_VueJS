<template>
  <div id="app">
    <RegistrationInfo />
    <RegistrationForm />
  </div>
</template>

<script>
import RegistrationForm from "./components/registrationForm.vue";
import RegistrationInfo from "./components/registrationInfo.vue";

export default {
  name: "App",
  components: {
    RegistrationForm,
    RegistrationInfo
  }
};
</script>

<style>
@import "./assets/css/style.css";
</style>
