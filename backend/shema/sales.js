import mongoose from "mongoose";

const salesschema = new mongoose.Schema({
    userId: {
        type: String
    },
    businessType: {
        type: String,
        required: true,
    },
    primaryContact: {
        type: String,
        required: true,
    },
    companyName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    language: {
        type: String,
        required: true,
    },
})
 const Sales = mongoose.model("Sales", salesschema);
 export default Sales;