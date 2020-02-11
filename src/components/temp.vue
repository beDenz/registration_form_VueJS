<template>
  <div>
    <input type="text" v-model="text" @change="changeInput" />
    <div @click="changeValue">Button</div>
  </div>
</template>

<script>
export default {
  name: "Input",
  data() {
    return {
      text: "default"
    };
  },
  watch: {
    text() {
      console.log("changed");
    }
  },
  methods: {
    changeInput: function(event) {
      console.log("changed");
      alert("changeInput");
      this.text = event.target.value;
    },
    changeValue: function() {
      this.text = "not default";
    }
  }
};
</script>