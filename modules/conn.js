require('dotenv').config();
const mongoose = require("mongoose");

// - connect localhost...
// const conn = mongoose.connect(`mongodb://localhost:27017/Basic_Banking_System`);
// - connect localhost...
const conn = mongoose.connect(`mongodb+srv://admin-abinash:Ahir123@cluster0.is5lo.mongodb.net/Basic_Banking_System`);

// - connect mongo atlas
// const conn = mongoose.connect(process.env.DB);

module.exports = conn;