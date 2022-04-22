const express = require("express");
const thread_mgmt = require("./thread_mgmt");
const router = express.Router();
//send routed calls to respective functions

router.get("/getThreads", thread_mgmt.getThreads);
router.post("/postThread", thread_mgmt.postThread);

//endpoints to be implemented
//router.post("/addTag", thread_mgmt.addTag);
//router.post("/deleteTag", thread_mgmt.deleteTag);
//router.post("/addanswer", thread_mgmt.addAnswer);
//router.post("/editanswer", thread_mgmt.changeAnswer);
//router.post("/deleteanswer", thread_mgmt.deleteAnswer);

module.exports = router;
