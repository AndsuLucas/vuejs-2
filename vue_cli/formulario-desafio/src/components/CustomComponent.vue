<template>
  <div>
    <input type="text" v-model.trim="fullName.name">
    <input type="text" v-model.trim="fullName.lastName">
  </div>
</template>
<script>
export default {
  props: {
    fullName: {
      type:
    }
  }

  mounted(){
    this.$emit('input', this.getFullName);
  },

  computed: {
    getFullName() {
      return this.fullName.name + '' + this.fullName.lastName;
    }
  }
}
</script>