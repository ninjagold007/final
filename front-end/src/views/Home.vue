<template>
<div>

<MyHome/>

</div>
</template>

<script>

import MyHome from '@/components/myHome.vue';
export default {
  name: 'Home',
  components: {
    MyHome,
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
