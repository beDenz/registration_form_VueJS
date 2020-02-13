<template>
  <div class="combobox">
    <input
      class="registration-form__input combobox-input"
      type="text"
      v-bind:placeholder="placeholder"
      v-bind:name="name"
      v-bind:disabled="disabled"
      v-model="comboboxValue"
      readonly
    />
    <ul class="combobox-list">
      <li v-for="(item, index) in list" v-bind:key="index" @click="changeValue">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CustomCombobox",
  props: {
    placeholder: String,
    name: String,
    list: Array,
    disabled: Boolean
  },
  data() {
    return {
      comboboxValue: null
    };
  },
  watch: {
    comboboxValue() {
      this.$emit("change", {
        name: this.$props.name,
        value: this.comboboxValue
      });
    }
  },
  methods: {
    changeValue: function(e) {
      this.comboboxValue = e.target.innerHTML;
    }
  }
};
</script>