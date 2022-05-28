const express = require("express");
const { performCredit, performDebit, yourBalance } = require("../controllers/transactions");
const { verifyToken } = require("../middleware/verifyToken");
const router = express.Router() ; 



// register user : 
router.patch("/credit" , verifyToken ,performCredit) ; 

// login user : 
router.patch("/debit" , verifyToken ,performDebit) ; 

// fetch current balance : 
router.get("/balance" , verifyToken , yourBalance) ; 

module.exports = router ; 