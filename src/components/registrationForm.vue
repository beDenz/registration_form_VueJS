<template>
  <div class="registration-form center-position-block padding-top-bottom-90px">
    <div class="registration-form__inner">
      <div class="registration-form__row text-align-center">
        <h3 class="registration-form__title">Sing up</h3>
      </div>
      <div
        class="registration-form__row margin-bottom-32px"
        v-bind:class="{error: validateErrors.indexOf('login') > -1 }"
      >
        <label class="registration-form__label required">Login</label>
        <input
          class="registration-form__input"
          type="text"
          placeholder="SomeCool"
          name="login"
          @input="changeField"
          @focus="clearError"
        />
      </div>
      <div
        class="registration-form__row margin-bottom-32px"
        v-bind:class="{error: validateErrors.indexOf('email') > -1 }"
      >
        <label class="registration-form__label required">Email</label>
        <input
          class="registration-form__input"
          type="text"
          placeholder="SomeCool@gmail.com"
          name="email"
          @input="changeField"
          @focus="clearError"
        />
      </div>
      <div class="registration-form__row margin-bottom-32px">
        <label class="registration-form__label">Password</label>
        <input
          class="registration-form__input"
          type="password"
          placeholder="Your password..."
          name="password"
          @input="changeField"
        />
      </div>
      <div class="registration-form__row margin-bottom-32px">
        <label class="registration-form__label">First name</label>
        <input
          class="registration-form__input"
          type="text"
          placeholder="Your name..."
          name="firstName"
          @input="changeField"
        />
      </div>
      <div class="registration-form__row margin-bottom-32px">
        <label class="registration-form__label">Last name</label>
        <input
          class="registration-form__input"
          type="text"
          placeholder="Your last name..."
          name="lastName"
          @input="changeField"
        />
      </div>
      <div class="registration-form__row margin-bottom-32px">
        <label class="registration-form__label">Country</label>
        <CustomCombobox
          placeholder="Your home country..."
          name="country"
          v-on:change="changeField"
          v-bind:list="countryList"
        />
      </div>
      <div class="registration-form__row margin-bottom-32px">
        <label class="registration-form__label">City</label>
        <CustomCombobox
          placeholder="Your city..."
          name="city"
          v-bind:list="cityList"
          v-on:change="changeField"
          :disabled="!getNewUser.country"
        />
      </div>
      <div class="registration-form__row margin-bottom-32px">
        <label class="registration-form__label">Date of birth custom</label>
        <Datapicker v-on:change="changeField" />
      </div>
      <div class="registration-form__row margin-bottom-72px">
        <label class="registration-form__label">Zip code</label>
        <input
          class="registration-form__input"
          type="text"
          placeholder="Enter code"
          name="zipCode"
          v-model="zipCode"
          @input="validationZipCode"
          @change="changeField"
        />
      </div>
      <div class="registration-form__row">
        <div class="button" @click="submit">
          <span class="button__text">sing up</span>
        </div>
      </div>
    </div>
    <div class="registration-form__success text-align-center" v-if="success">
      <span>Registration success!</span>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import CustomCombobox from "./customCombobox.vue";
import Datapicker from "./datapicker.vue";

export default {
  name: "RegistrationForm",
  components: {
    CustomCombobox,
    Datapicker
  },
  computed: {
    ...mapGetters(["getNewUser"])
  },
  data() {
    return {
      countryList: [
        "country1",
        "country2",
        "country3",
        "country4",
        "country5",
        "country6"
      ],
      cityList: ["city1", "city2", "city3", "city4", "city5", "city6"],
      validateErrors: [],
      success: false,
      zipCode: null
    };
  },
  methods: {
    ...mapMutations(["setState"]),
    changeField: function(e) {
      if (e.target) {
        this.setState({ name: e.target.name, value: e.target.value });
      }
      if (e.name && e.value) {
        this.setState({ name: e.name, value: e.value });
      }
    },
    validationZipCode: function(e) {
      this.zipCode = e.target.value.replace(/[^0-9]/gi, "");
    },
    validationForm: function() {
      const requiredField = ["login", "email"];

      for (let key in this.getNewUser) {
        if (requiredField.indexOf(key) > -1 && !this.getNewUser[key]) {
          this.validateErrors.push(key);
        }
      }
    },
    submit: function() {
      this.validationForm();
      this.success = !(this.validateErrors.length > 0);
    },
    clearError: function(e) {
      this.validateErrors = this.validateErrors.filter(
        item => item !== e.target.name
      );
    }
  }
};
</script>
