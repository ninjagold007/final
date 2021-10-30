<template>


<div>
<MyLogin/>
</div>
</template>

<script>

import MyLogin from '@/components/myLogin.vue';
export default {
  name: 'Login',
  components: {
  MyLogin,
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
