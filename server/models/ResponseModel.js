import mongoose from "mongoose"

const EmailResponseSchema = mongoose.Schema({
    message: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    contactCount: {
        type: Number,
        default: 1
    }
},{
    timestamps: true
})

// EmailResponseSchema.pre(/^find/, function(next) {
//     var doc = this;
//     console.log(this)
//     next()
// });

const EmailResponse = mongoose.model('EmailResponse', EmailResponseSchema)

export default EmailResponse