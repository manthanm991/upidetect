const express = require("express");
const router = express.Router();
const Form = require("../models/Form");
const { body } = require("express-validator");
// const { validationResult } = require("express-validator");
var jwt = require("jsonwebtoken");
// var fetchdata = require("../middleware/fetchdata");

const JWT_SECRET = "Heisagod$boy";

router.post(
    "/dataip",
    [
      body("type", "Enter a valid type"),
      body("amount", "Enter a amount"),
      body("oldbalanceorg", "Enter the old balance of origin"),
      body("newbalanceorg", "Enter the new balance of origin"),
      body("oldbalancedestination", "Enter the old balance of destionation"),
      body("newbalancedestination", "Enter the new balance of destionation"),
    ],
    async (req, res) => {
      let success = false;
    //   const errors = validationResult(req);
    //   if (!errors.isEmpty()) {
    //     return res.status(400).json({success, error: errors.array() });
    //   }
      form = await Form.create({
          type: req.body.type,
          amount: req.body.amount,
          oldbalanceorg: req.body.oldbalanceorg,
          newbalanceorg: req.body.newbalanceorg,
          oldbalancedestination: req.body.oldbalancedestination,
          newbalancedestination: req.body.newbalancedestination,
        });
        const data = {
          form: {
            id: Form.id,
          },
        };
        const authtoken = jwt.sign(data, JWT_SECRET);
        success=true;
        res.json({success, authtoken });
    }
  );

module.exports = router;