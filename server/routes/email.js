import express from "express"
import emailValidator from 'deep-email-validator'

const router = express.Router();

async function isEmailValid(email) {
    return emailValidator.validate(email)
   }

router.post('/', async function(req, res) {
  const {email} = req.body;
 
 
  const data = await isEmailValid(email);
  console.log(data)
  res.status(200).json(data)
//  const {valid, reason, validators} = data
//   if (valid) return res.send({message: "OK"});
 
//   return res.status(400).send({
//     message: "Please provide a valid email address.",
//     reason: validators[reason].reason
//   })
 
});

export default router