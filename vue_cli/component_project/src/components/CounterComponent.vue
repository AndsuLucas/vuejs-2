<template>
  <div>
    <span>{{ counter }}</span>
    <br>
    <button @click="add">Add</button>
    <button @click="remove">Remove</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      counter: 0 
    }
  },

  methods: {
    add() {
      this.counter ++;
    },

    remove() {
      this.counter --;
    }
  }
}
</script>
<style scoped>
  button {
    border: none;
  }
</style>