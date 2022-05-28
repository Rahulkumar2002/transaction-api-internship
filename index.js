const express = require("express") ; 
const app = express() ;
const dotenv = require("dotenv") ; 
const helmet = require("helmet") ; 
const morgan  = require("morgan") ;
const UserRoutes = require("./routes/user") ; 
const TransactionRoutes = require("./routes/transaction") ; 
dotenv.config() ; 

// middleware 

app.use(express.json()) ; 
app.use(helmet()) ; 
app.use(morgan("common")) ; 
 
const port = process.env.PORT || 8080 ; 

// auth route : 
app.use("/v1/users" , UserRoutes) ; 
// transaction route : 
app.use("/v1/transactions" , TransactionRoutes) ; 

try{
    app.listen(port , () =>{
        console.log("App is listing at localhost:" + port) ; 
    })
}catch(err){
    console.log("Error occurs while connecting server : " + err) ; 
}
