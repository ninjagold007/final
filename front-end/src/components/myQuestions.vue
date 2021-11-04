<template>
<div>
<div class="logout" v-if="user">
<router-link  to="/"><i class="fas fa-sign-out-alt fa-lg" @click="logout"></i></router-link>

</div>
    <div class = "menu">

      <p> To make a question, type the options you would like and then press the "Add Question" button. </p>
    <p> To edit a question, type the options you would like and then press the "Edit" button next to the question you want to edit. </p>
    <p> To delete a question,  press the "Delete" button. </p>
      <div class ="choices">
        <div class = "left">
          <input v-model="option1" placeholder="Option 1">
        </div>
        <p class = "or"> OR </p>
        <div class = "right">
    <input  v-model="option2" placeholder="Option 2">
        </div>

       </div>
       <div class="submit">
       <button id="sub" @click="addQuestion">Add Question</button>
       </div>
       <div v-if="questions" class="questionsList">
       <div  v-for="question in questions" v-bind:key="question._id">
       {{question.option1}} or {{question.option2}} <button @click="deleteQuestion(question)">Delete</button> <button @click="editQuestion(question)">Edit</button>
    </div>
       </div>
     </div>
</div>
 </template>

 <script>
 import axios from 'axios';
 export default {
   name: 'myQuestions',
   data() {
     return {
       option1: '',
       option2: '',
       questions: [],
     }
   },
   async created() {
      this.getQuestions();

        try {
          let response = await axios.get('/api/users');
          this.$root.$data.user = response.data.user;
        } catch (error) {
          this.$root.$data.user = null;
        }
   },
   computed: {
   user() {
     return this.$root.$data.user;
   },
   },
   methods: {
      async addQuestion() {
      console.log("adding question");
        try {
        await axios.post('/api/questions/', {
            user: this.$root.$data.user,
            option1: this.option1,
            option2: this.option2,
        });
      console.log("added question???");
      this.getQuestions();
        } catch (error) {
          this.error = error.response.data.message;
        }
     },
     async getQuestions() {
      console.log("getting users questions");
        try {
        this.response = await axios.get("/api/questions/");
        this.questions = this.response.data
        console.log(this.response.data)
  console.log("got comments????");
        } catch (error) {
          this.error = error.response.data.message;
        }
     },
     async deleteQuestion(item) {
     try {
      await axios.delete("/api/questions/" + item._id);
      this.getQuestions();
     } catch (error) {
      //console.log(error);
     }
     },
     async editQuestion(item) {
     try {
      await axios.put("/api/questions/" + item._id,  {
      option1: this.option1,
      option2: this.option2,
      });

      this.getQuestions();
     } catch (error) {
      //console.log(error);
     }

     },
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
 height: auto;
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

.submit {
display: flex;
  justify-content: center;
  align-items: center;
margin-bottom: 20px;
}

#sub {
width: 200px;
height: 30px;
}

 a { text-decoration: none; }
.questionsList {
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

}
 </style>
