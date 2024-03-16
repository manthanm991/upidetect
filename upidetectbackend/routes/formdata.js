const express = require("express");
const router = express.Router();
const Form = require("../models/Form");
const { body, validationResult } = require("express-validator");
var jwt = require("jsonwebtoken");


const JWT_SECRET = "Heisagod$boy";

router.post(
    "/dataip",
    [
      body("type", "Enter a valid type"),
      body("amount", "Enter a amount").isLength({ min: 1 }),
      body("oldbalanceorg", "Enter the old balance of origin").isLength({ min: 1 }),
      body("newbalanceorg", "Enter the new balance of origin").isLength({ min: 1 }),
      body("oldbalancedestination", "Enter the old balance of destionation").isLength({ min: 1 }),
      body("newbalancedestination", "Enter the new balance of destionation").isLength({ min: 1 }),
    ],
    async (req, res) => {
      let success = false;

      const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({success, error: errors.array() });
    }
    try {
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
      } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
      }
    }
  );

module.exports = router;