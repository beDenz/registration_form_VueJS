<template>
  <div class="registration-form margin-bottom-42px">
    <div class="registration-form__inner">
      <div>
        <h3 class="registration-form__title">New user</h3>
      </div>
      <div class="registration-form__row" v-for="(value, key) in getNewUser" :key="key">
        <span v-if="value">{{ key }} : {{ value }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "RegistrationInfo",
  computed: mapGetters(["getNewUser"])
};
</script>
