<template>
<div>

<Questions/>

</div>
</template>

<script>

import Questions from '@/components/questions.vue';
export default {
  name: 'Game',
  components: {
    Questions,
  },
  data() {
    return {

      error: '',
    }
  },

 methods: {

 }
}
</script>

<style>

</style>


//this.$root.$data.questionList
