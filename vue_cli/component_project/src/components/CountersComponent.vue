<template>
  <div v-if="1>0">
    <counter v-for="i in 5" :key="i"></counter> 
  </div>
</template>
<script>
import CounterComponent from './CounterComponent.vue'

export default {
  components: {
    counter: CounterComponent
  }
}
</script>