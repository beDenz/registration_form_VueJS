<template>
  <div class="registration-form">
    <div class="registration-form__inner">
      <div class="registration-form__row">
        <h3 class="registration-form__title">Sing up</h3>
      </div>
      <div class="registration-form__row error">
        <label class="registration-form__label">
          Login
          <span>*</span>
        </label>
        <input
          class="registration-form__input"
          type="text"
          placeholder="SomeCool"
          name="login"
          @input="changeField"
          @focus="clearError"
        />
      </div>

      <div class="registration-form__row">
        <label class="registration-form__label">
          Email
          <span>*</span>
        </label>
        <input
          class="registration-form__input"
          type="text"
          placeholder="SomeCool@gmail.com"
          name="email"
          @input="changeField"
          @focus="clearError"
        />
      </div>

      <div class="registration-form__row">
        <label class="registration-form__label">Password</label>
        <input
          class="registration-form__input"
          type="password"
          placeholder="Your password..."
          name="password"
          @input="changeField"
        />
      </div>
      <div class="registration-form__row">
        <label class="registration-form__label">First name</label>
        <input
          class="registration-form__input"
          type="text"
          placeholder="Your name..."
          name="firstName"
          @input="changeField"
        />
      </div>

      <div class="registration-form__row">
        <label class="registration-form__label">Last name</label>
        <input
          class="registration-form__input"
          type="text"
          placeholder="Your last name..."
          name="lastName"
          @input="changeField"
        />
      </div>

      <div class="registration-form__row">
        <label class="registration-form__label">Country</label>
        <CustomCombobox
          placeholder="Your home country..."
          name="country"
          v-on:change="changeField"
          v-bind:list="['item1','item2','item3','item4','item5','item6']"
        />
      </div>

      <div class="registration-form__row">
        <label class="registration-form__label">City</label>
        <CustomCombobox
          placeholder="Your city..."
          name="city"
          v-bind:list="['item1','item2','item3','item4','item5','item6']"
          v-on:change="changeField"
        />
      </div>

      <div class="registration-form__row">
        <label class="registration-form__label">Date of birth</label>
        <input
          class="registration-form__input"
          type="text"
          placeholder="Your date of birth..."
          name="birthday"
          @input="changeField"
        />
      </div>

      <div class="registration-form__row">
        <label class="registration-form__label">Zip code</label>
        <input
          class="registration-form__input"
          type="text"
          placeholder="Enter code"
          name="zipCode"
          @input="changeField"
        />
      </div>

      <div class="registration-form__row">
        <div class="button">
          <span class="button__text">sing up</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import CustomCombobox from "./customCombobox.vue";

export default {
  name: "RegistrationForm",
  components: {
    CustomCombobox
  },
  methods: {
    ...mapMutations(["setState"]),
    changeField: function(e) {
      if (e.target && e.target.value.trim()) {
        this.setState({ name: e.target.name, value: e.target.value });
      }
      if (e.name && e.value) {
        this.setState({ name: e.name, value: e.value });
      }
    },
    setError: function() {},
    clearError: function(e) {
      if (e.target.parentNode.classList.contains("error")) {
        e.target.parentNode.classList.remove("error");
      }
    }
  },
  mounted() {}
};
</script>
