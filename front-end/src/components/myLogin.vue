<template>
<div>
    <div class = "menu">
    <div class ="choices">
    <div class="hero">
    <div class="heroBox">
      <form class="pure-form">
        <fieldset>
          <legend>Register for an account</legend>
          <input placeholder="first name" v-model="firstName">
          <input placeholder="last name" v-model="lastName">
        </fieldset>
        <fieldset>
          <input placeholder="username" v-model="username">
          <input type="password" placeholder="password" v-model="password">
        </fieldset>
        <fieldset>
          <router-link to="/" ><button type="submit" class="pure-button pure-button-primary" @click="register">Register</button></router-link>
        </fieldset>
      </form>
      <p v-if="error" class="error">{{error}}</p>
      <form class="pure-form space-above">
        <fieldset>
          <legend>Login</legend>
          <input placeholder="username" v-model="usernameLogin">
          <input type="password" placeholder="password" v-model="passwordLogin">
        </fieldset>
        <fieldset>
          <router-link to="/" ><button type="submit" class="pure-button pure-button-primary" @click="login">Login</button></router-link>
        </fieldset>
      </form>
      <p v-if="errorLogin" class="error">{{errorLogin}}</p>
    </div>
    </div>
    </div>

    </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Login',
  components: {

  },
  data() {
    return {
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      usernameLogin: '',
      passwordLogin: '',
      error: '',
      errorLogin: '',
      }
    },

 methods: {
 async register() {
   this.error = '';
   this.errorLogin = '';
   if (!this.firstName || !this.lastName || !this.username || !this.password)
     return;
   try {
     let response = await axios.post('/api/users', {
       firstName: this.firstName,
       lastName: this.lastName,
       username: this.username,
       password: this.password,
     });
     this.$root.$data.user = response.data.user;
   } catch (error) {
     this.error = error.response.data.message;
     this.$root.$data.user = null;
   }
 },
 async login() {
  this.error = '';
  this.errorLogin = '';
  if (!this.usernameLogin || !this.passwordLogin)
    return;
  try {
    let response = await axios.post('/api/users/login', {
      username: this.usernameLogin,
      password: this.passwordLogin,
    });
    this.$root.$data.user = response.data.user;
    this.$router.go()
  } catch (error) {
    this.errorLogin = "Error: " + error.response.data.message;
    this.$root.$data.user = null;
  }
 },
 }
}
</script>

<style scoped>
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
width: 50%;
background: #C0C0C0; /* silver */;
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
background: #00FFFF;
border-radius: 100px 100px 100px 100px;


}

.or {
font-size: 50px;
margin-left: 30px;
margin-right: 30px;
}

.right {
height: 200px;
width: 400px;
background: #00FFFF;
border-radius: 100px 100px 100px 100px;
}

#header {
  /* Semi-circle */
  margin: 0 1em 1em 0;
  height: 100px;
  width: 500px;
  border-radius: 0px 0px 3000px 3000px;
  /* Fixed position */
  position: fixed;
  z-index: 10000;
  left: 50%;
  transform: translate(-50%, 0);
  /* Color and alignment */
  background: #e74c3c;
  text-align: center;
  box-shadow: 0 0 0 1em #FFF;
}

#header2 {
  /* Semi-circle */
  float:right;
  height: 100px;
  width: 500px;
  border-radius: 0px 0px 3000px 3000px;
  /* Fixed position */
  position: fixed;
  z-index: 10000;
right: 100%;
  transform: translate(-50%, 0);
  /* Color and alignment */
  background: #e74c3c;
  text-align: center;
  box-shadow: 0 0 0 1em #FFF;
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

#header .fas {
  font-size: 25px;
  color: #fff;
  width: 50px;
}

.pure-button-primary {
  background-color: #277E8E;
}

.space-above {
  margin-top: 50px;
}

h1 {
  font-size: 28px;
  font-variant: capitalize;
}

.hero {
  margin: 20px;
  display: flex;
  justify-content: center;
}

.heroBox {
  text-align: center;
}

.hero form {
  font-size: 14px;
}

.hero form legend {
  font-size: 20px;
}

input {
  margin-right: 10px;
}

.error {
  margin-top: 10px;
  display: inline;
  padding: 5px 20px;
  border-radius: 30px;
  font-size: 10px;
  background-color: #d9534f;
  color: #fff;
}

</style>
