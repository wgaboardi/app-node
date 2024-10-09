const express = require('express');
const mongoose = require('mongoose');
const Project = require('./models/Project');
const dotenv = require('dotenv')
dotenv.config();

main().catch(err => console.log(err));
async function main() {
  await mongoose.connect(process.env.MONGODB_URL),{},() => {
    console.log("mongdb is connected");
  };
}

const router = express.Router();
router.use((req, res, next) => {
  console.log('Time: ', Date.now());
  next();
})
router.get("/register", async (req, res)=> {
  try {
  const newProject = new Project({name: "Novo projeto"});
  const project = await newProject.save();
  res.status(200).json(project);
  }
  catch(err) {
   console.log(err);
   res.status(500).json(err);
  }
})
router.get("/", async (req, res) => {
  try {
    const query = Project.find().limit(10);
    query.select('name');
    const projectRecord = await query.exec();
    res.status(200).send(projectRecord);
  }
  catch (err)   {
     res.status(500).send("nao achou");
  }
})
router.get("/:id", async (req, res)=> {
  try {
    const query = Project.findById(req.params.id);
    query.select('name');
    const projectRecord = await query.exec();
      res.status(200).send(projectRecord.id);
  }
  catch (err)   {
     res.status(500).send("nao achou");
  }
})

router.delete("/:id", (req, res)=> {
  res.status(200).send(req.params.id);
})

module.exports = router






