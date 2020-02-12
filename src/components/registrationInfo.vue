<template>
  <div class="registration-form center-position-block padding-top-bottom-54px margin-bottom-42px">
    <div class="registration-form__inner">
      <div class="registration-form__row text-align-center">
        <h3 class="registration-form__title">New user</h3>
      </div>
      <div class="registration-form__row text-align-center margin-bottom-16px">
        <span
          class="registration-form__text margin-right-left-5px"
          v-if="getNewUser.firstName"
        >{{getNewUser.firstName}}</span>
        <span
          class="registration-form__text margin-right-left-5px"
          v-if="getNewUser.lastName"
        >{{getNewUser.lastName}}</span>
        <span
          class="registration-form__text margin-right-left-5px"
          v-if="getNewUser.lastName || getNewUser.firstName && getNewUser.login"
        >/</span>
        <span
          class="registration-form__text color-888888 margin-right-left-5px"
          v-if="getNewUser.login"
        >{{getNewUser.login}}</span>
      </div>
      <div class="registration-form__row text-align-center">
        <span class="registration-form__text" v-if="getNewUser.email">{{getNewUser.email}}</span>
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
