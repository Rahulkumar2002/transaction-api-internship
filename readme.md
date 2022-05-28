# Transaction-Recording-Platform-API :

## Registration and Login using JWT :

### For registration "localhost:8080/v1/users/register" , It is a "POST" method :

        1)  Inside the body you have to provide :
           i) username : It is a string which is compulsory to provide it represents your accounts username.
                         It must be unique.

           ii) password : It is a string which is compulsory to provide it represents your accounts password.
                          It can take numbers , letters and symbols.

           iii) currentBalance : It is a integer value which represents your accounts current balance.
                                 You can either provide or it will automaticaly take 0 if not provided.

        ex :
        ```json
        {
    "username":"string" ,
    "password":"string",
    "currentBalance" : integer
        }
        ```

### For login "localhost:8080/v1/users/login" , It is a "POST" method :

        1)  Inside the body you have to provide :
           i) username : It must be same as provided at the time of registration.

           ii) password : It is must be same provide at the time of registration.

        ex :
        ```json
        {
    "username":"string" ,
    "password":"string",
        }
        ```

        In output you will get your username , currentBalance , accessToken , id , createdAt.
       ---------------- Note : Copy accessToken somewhere you will need it later. ----------------

### For credit "localhost:8080/v1/transactions/credit" , It is a "PATCH" method:

         Note :  Don't forget to add a "token" key and value  = Bearer <acessToken(copied previously inside headers)>
        1)  Inside the body you have to provide :
           i) username : It must be same as provided at the time of registration.

           ii) creditAmount : It the amount which you want to add into your account's amount.

        ex :
        ```json
        {
    "username" : "string" ,
    "creditAmount" : integer
        }
        ```

        After making request your account's balance will be increased by creditAmount .

### For debit "localhost:8080/v1/transactions/debit" , It is a "PATCH" method:

        Note :  Don't forget to add a "token" key and value  = Bearer <acessToken(copied previously inside headers)>
        1)  Inside the body you have to provide :
           i) username : It must be same as provided at the time of registration.

           ii) debitAmount : It the amount which you want to subtract from your account's amount.

        ex :
        ```json
        {
    "username" : "string" ,
    "debitAmount" : integer
        }
        ```

        After making request your account's balance will be decreased by debitAmount .


### For checking balance "localhost:8080/v1/transactions/balance" , It is a "GET" method:

        Note :  Don't forget to add a "token" key and value  = Bearer <acessToken(copied previously inside headers)>
        1)  Inside the body you have to provide :
           i) username : It must be same as provided at the time of registration.

        ex :
        ```json
        {
    "username" : "string" ,
        }
        ```

        After making request your account's balance will be shown.

### This sums up the transaction recording platform api project. Thank you
