<template>
<div>
<div class="logout" v-if="user">
<router-link   to="/"><i class="fas fa-sign-out-alt fa-lg" @click="logout"></i></router-link>

</div>
<div class = "menu">

<p> Welcome to the game of would You rather </p>
<div class ="choices">
<div class = "left">
<router-link to="/addQuestions" v-if = "user"><i class="fas"></i> Make new What if questions!!!!</router-link>
<router-link to="/login" v-else><i class="fas "></i> Sign Up or Login</router-link>
</div>

<p class = "or"> OR </p>
 <div class="right"> <router-link to="/game"><i class="fas "></i>Play the Game!</router-link>
</div>
 </div>

</div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'home',

  methods: {
  async logout() {
    try {
      await axios.delete("/api/users");
      this.$root.$data.user = null;
      this.$router.go()
    } catch (error) {
      this.$root.$data.user = null;
    }
  },
  },
  computed: {
    user() {
      return this.$root.$data.user;
    },
  },
  async created() {
    try {
      let response = await axios.get('/api/users');
      this.$root.$data.user = response.data.user;

    } catch (error) {
      this.$root.$data.user = null;
    }
  },



}

</script>


<style>
/* Color scheme: https://paletton.com/#uid=7040u0knHs+edG7jrvYscpiuCk2 */
/* red: #e74c3c
 * blue: #277E8E
 */
body {
  font-family: 'Work Sans', sans-serif;
  font-weight: 300;
  font-size: 13pt;
  margin: 0px 200px;

}

.menu {
height: 50%;
width: 70%;
background: #C0C0C0; /* silver */
border-radius: 100px 100px 100px 100px;
position: fixed;
  top: 50%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
}

.menu p {
text-align: center;
}

.choices {
display: flex;

justify-content: center;
  flex-wrap: nowrap;
  text-align: center;
  vertical-align: middle;
  align-items: center;

}

.left {
height: 200px;
width: 400px;
background: #e74c3c;
border-radius: 100px 100px 100px 100px;
display: flex;
  justify-content: center;
  align-items: center;


}

.or {
font-size: 50px;
margin-left: 30px;
margin-right: 30px;
}

.right {
height: 200px;
width: 400px;
background: #e74c3c;
border-radius: 100px 100px 100px 100px;
display: flex;
  justify-content: center;
  align-items: center;
}



nav {
  display: flex;
  justify-content: center;
}

h1 {
  color: #000;
  font-size: 40px;
}

h2 {
  font-size: 12px;
}


.logout {
  position: fixed;
  height: 75px;
  width: 75px;
  top: 0px;
  right: 0px;
  border-radius: 80px 0px 80px 100px;
  background: #e74c3c;
  border: 10px solid white;
  transform: translate(10px, -10px);

}
.fas {
position: absolute;
top: 33%;
right: 30%;
text-size:50px;
}



a { text-decoration: none; }

</style>
