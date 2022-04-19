const express = require("express");
const Subs_mgmt = require("./subs_mgmt");
const router = express.Router();
//send routed calls to respective functions

router.get("/getSubs/:email", Subs_mgmt.getSubs);
router.post("/addSubs", Subs_mgmt.addSubs);
router.post("/changeSubs",Subs_mgmt.changeSubs);
router.post("/deleteSubs",Subs_mgmt.deleteSubs);

module.exports = router;
