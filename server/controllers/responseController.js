import mongoose from "mongoose"
import asyncHandler from "express-async-handler"
import EmailResponse from "../models/ResponseModel.js"
import { getParsedDate } from "../utils/timeSince.js"
export const responseFilter = asyncHandler(async (req, res) => {
  const exist = await EmailResponse.findOne({ email: req.body.email })

  if (exist) {
    const dateToCompare = exist.createdAt ? exist.createdAt > exist.updatedAt : exist.updatedAt
    const existTime = dateToCompare
    const currentTime = new Date()

    var d = Math.abs(currentTime - existTime) / 1000 // delta
    var r = {} // result
    var s = {
      // structure
      year: 31536000,
      month: 2592000,
      week: 604800, // uncomment row to ignore
      day: 86400, // feel free to add your own row
      hour: 3600,
      minute: 60,
      second: 1,
    }

    Object.keys(s).forEach(function (key) {
      r[key] = Math.floor(d / s[key])
      d -= r[key] * s[key]
    })

    // for example: {year:0,month:0,week:1,day:2,hour:34,minute:56,second:7}
    // console.log(r)
    if ((r.year === 0 && r.month === 0 && r.week === 0, r.day === 0)) {
      res.status(400).json({
        status: "failed",
        data: {
          message: "You may reach us after 24 hours after.",
        },
      })
    } else {
       const operation = await EmailResponse.findByIdAndUpdate(exist._id, {$inc: {contactCount: 1}})
       res.status(200).json(operation);
    }

  }else {
      const response = await EmailResponse.create(req.body)
      res.status(200).json(response)
  }

})
