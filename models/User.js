const db = require("../config/db");

class User {
  constructor(username, password, currentBalance) {
    this.username = username;
    this.password = password;
    if (currentBalance == undefined) {
      this.currentBalance = 0;
    } else {
      this.currentBalance = currentBalance;
    }
  }

  async save() {
    let d = new Date();
    let yyyy = d.getFullYear();
    let mm = d.getMonth() + 1;
    let dd = d.getDate();

    let createdAt = `${yyyy}-${mm}-${dd}`;

    let sql = `
   INSERT INTO usersdata(
       username , 
       password ,
       createdAt ,  
       currentBalance
   )
   VALUES 
   (
       '${this.username}',
       '${this.password}',
       '${createdAt}',
       ${this.currentBalance}
   ) ; 
   `;
   await db.execute(sql);
    let getuserSql = `SELECT * FROM usersdata WHERE username = '${this.username}' ; ` ; 
    let [newUser , _] = await db.execute(getuserSql) ; 
    return newUser[0] ; 
  }


  static async findUser(username){
    let getuserSql = `SELECT * FROM usersdata WHERE username = '${username}' ; ` ; 
    let [newUser , _] = await db.execute(getuserSql) ; 
    return newUser[0] ; 
  }

  static async credit(user  , creditAmount){
   let newAmount = creditAmount + user.currentBalance ; 
   let sql = `UPDATE usersdata SET currentBalance = ${newAmount} WHERE username = '${user.username}' ;`  ;
   await db.execute(sql) ;  
  }

  
  static async debit(user  , debitAmount){
    let newAmount =  user.currentBalance - debitAmount ; 
    let sql = `UPDATE usersdata SET currentBalance = ${newAmount} WHERE username = '${user.username}' ;`  ;
    await db.execute(sql) ;  
   }

}

module.exports = User;
