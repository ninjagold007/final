<template>
  <div id="app">
    <header id="header">
<router-link to="/"><i class="fas "></i> <h1>Would You Rather?</h1></router-link>
<a v-if="user" class="logout" @click="logout"><i class="fas fa-sign-out-alt"></i></a>
    </header>



    <router-view />

  </div>
</template>


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



h1 {
  color: #000;
  font-size: 40px;
  margin-top: 0px;
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



</style>
