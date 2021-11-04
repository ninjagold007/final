
const express = require("express");
const mongoose = require('mongoose');
const argon2 = require("argon2");


const router = express.Router();
const users = require("./users.js");
const User = users.model;
const validUser = users.valid;

let mock = [{
  _id: 1,
  option1: "be a cat",
  option2: "be a dog",
},
{
  _id: 2,
  option1: "know you will die in 5 years",
  option2: "be immortal, meaning you CANNOT die",
},
{
  _id: 3,
  option1: "fly",
  option2: "be telepathic",
},
{
  _id: 4,
  option1: "be a movie actor",
  option2: "be a a youtuber",
},
{
  _id: 5,
  option1: "play in the squid games",
  option2: "be poor for the rest of your life",
},
{
  _id: 6,
  option1: "be a guy",
  option2: "be a girl",
},
{
  _id: 7,
  option1: "be tall",
  option2: "be tiny",
}];










async function add(q) {
  await Question.deleteAll({
    option1: q.option1,
    option2: q.option2,
  });
  let question = new Question({
    user: null,

    option1: q.option1,
    option2: q.option2,

  });

  try {


    await question.save;
  } catch (error) {
    console.log(error);
  }
}

// User schema and model
//

// This is the schema. Users have usernames and passwords. We solemnly promise to
// salt and hash the password!
const questionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  option1: String,
  option2: String,

});


// create a User model from the User schema
const Question = mongoose.model('Question', questionSchema);
function add(req) {
let question = new Question({
  option1: req.option1,
  option2: req.option2,
});

question.save();

}

for (q of mock) {
    add(q);
}

router.post("/", validUser, async (req, res) => {
  console.log("posting question now!")
  console.log(req.body)

  let question = new Question({
    user: req.user,
    option1: req.body.option1,
    option2: req.body.option2,

  });


  try {
    await question.save();
    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

// get my photos
router.get("/", validUser, async (req, res) => {
  console.log("getting user's questions now!!!" );
  // return photos
  try {
    let questions = await Question.find({
      user: req.user
    }).populate('user');

    return res.send(questions);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

// get all photos
router.get("/all", async (req, res) => {
  console.log("getting all questions" );
  try {
    let questions = await Question.find();
    return res.send(questions);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

router.delete("/:_id", async (req, res) => {
  try {
    await Question.deleteOne({
      _id: req.params._id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.put('/:_id', async (req, res) => {
  try {
//console.log('in edit of back end');
    let item = await Question.findOne({
      _id: req.params._id
    });
    //console.log('title is above!!!');
    item.option1 = req.body.option1;
    item.option2 = req.body.option2;
    await item.save()
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
  });
module.exports = {
  routes: router,
  model: Question,
};
