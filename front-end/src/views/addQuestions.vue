<template>
<div>

<myQuestions/>

</div>
</template>

<script>

import myQuestions from '@/components/myQuestions.vue';
export default {
  name: 'AddQuestions',
  components: {
    myQuestions,
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
