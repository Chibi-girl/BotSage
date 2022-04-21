const express = require("express");
const thread_mgmt = require("./thread_mgmt");
const router = express.Router();
//send routed calls to respective functions

//router.post("/getThreads", thread_mgmt.getThreads);
router.post("/postThread", thread_mgmt.postThread);
//router.post("/addTag", thread_mgmt.addTag);
//router.post("/deleteTag", thread_mgmt.deleteTag);
//router.post("/addanswer", thread_mgmt.addAnswer);
//router.post("/editanswer", thread_mgmt.changeAnswer);
//router.post("/deleteanswer", thread_mgmt.deleteAnswer);

module.exports = router;
