const User = require("../models/User");

const performCredit = async (req, res) => {
  try {
    let { username, creditAmount } = req.body;
    let user = await User.findUser(username);
    if (!user) {
      return res.status(404).json("User not found!");
    }

    await User.credit(user, creditAmount);

    res
      .status(200)
      .json(
        `Credit of ${creditAmount} happend successfully in amount with this username : ${username}.`
      );
  } catch (err) {
    res.status(500).json(`Error occured in performCredit : ${err}`);
  }
};

const performDebit = async (req, res) => {
  try {
    let { username, debitAmount } = req.body;
    let user = await User.findUser(username);
    if (!user) {
      return res.status(404).json("User not found!");
    }
    await User.debit(user, debitAmount);
    res
      .status(200)
      .json(
        `Debit of ${debitAmount} happend successfully in amount with this username : ${username}.`
      );
  } catch (err) {
    res.status(500).json(`Error occured in performDebit : ${err}`);
  }
};

const yourBalance = async (req , res ) => {
    try {
        let {username } = req.body ; 
        if(!username){
            return res.status(404).json("Username must be provided inside request body.") ; 
        }
        let user = await User.findUser(username) ;
         res.status(200).json(`Your account with username ${username} have balance : ${user.currentBalance}`) ; 
    } catch (err) {
        res.status(500).json(`Error occured inside yourBalance : ` + err) ; 
    }
}

module.exports = { performCredit, performDebit , yourBalance };
