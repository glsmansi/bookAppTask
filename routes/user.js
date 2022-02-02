const express = require("express");
const router = express();
const User = require("../models/user");

router.post("/create", async (req, res) => {
  const { Name, Email, ReferredUser, isPaymentMade, TotalEarnings } = req.body;
  const newUser = await User.create({
    Name,
    Email,
    ReferredUser,
    isPaymentMade,
    TotalEarnings,
  });
  await newUser.save();
  res.send(newUser);
});

router.post("/user/:id", async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  user.isPaymentMade = true;
  const reference = user.ReferredUser;
  if (reference == "null") {
    return res.status(404).send("no reference user found");
  }
  const referenceUser = await User.findOne({ Name: reference });
  referenceUser.TotalEarnings += 10;
  await user.save();
  await referenceUser.save();
  res.send(referenceUser);
});

module.exports = router;
