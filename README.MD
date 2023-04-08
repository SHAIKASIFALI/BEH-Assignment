
# Backend Assignment (BEH pvt limited)

This is an backend assignment for the backend developer intern position by BEH pvt limited.

## ER DIAGRAM

[![hoster.png](https://i.postimg.cc/jj5MnzpK/hoster.png)](https://postimg.cc/ZWG81yYD)






## Deployment

To deploy this project run

configure the .env file in the root project folder
```bash
   PORT = <PORT_NUMBER>
   LOGIN_TOKEN_KEY = <LOGINT_TOKEN_KEY FOR AUTHENTICATION>
   LOGIN_TOKEN_TIME = <TIME FOR TOKEN EXPIRATION>
   MONGODB_URL = <DATABASE CONNECTION URL>
```
install all the dependencies

```
npm install
```
start the server
```
npm run start

```
the server gets started on the default port no

## Features Implemented
1. Implemented JWT token AUTHENTICATION for the user 
2. Implemented the kth level friends of an user using the BFS algorithm.

## Approach taken
# users
1. /signup - user will sign up using his details and password gets hashed and saved into the db using the bcrypt library. 
2. /login - user will therefore login using his email and password 
once login is successfull we therefore send the x-access-token as an response header.

3. /logout - we clear the x-access-token request header so that the user is logged out      
4. /:userid/level/:levelNo - Here we have therefore used the ***bfs*** graph alorithm to traverse breadth wise and return the kth level of the friends..



## postman collections documentation

1. posts collections - https://documenter.getpostman.com/view/25278588/2s93RUvsD2

2. users collections - https://documenter.getpostman.com/view/25278588/2s93RUvsHJ

3. auth collections - https://documenter.getpostman.com/view/25278588/2s93RUvs8b




