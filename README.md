# The-WaterCooler-Social-Backend
Backend / API setup for a social network app that uses MongoDB

## User Story

A Back End API that is used for a social media application where users are able to created, log thoughts and reactions to thoughts.  Users are also able to add other users as friends.  

## Technologies Used

- NodeJS
- Javascript
- MongoDB (Database)
- MongooseJS
- ExpressJS

## GitHub Repo:
https://github.com/mjh1985codeman/The-WaterCooler-Social-Backend

## Video of application in Use: 

Click [Here](https://www.youtube.com/watch?v=EvPCrpThXAk) for a video demonstration of the application in use! 


## User Instructions: 

- Clone this GitHub Repo.
- Open up the application with an Integrated terminal.
- Run `npm install`
- Run `npm start`
- Navigate to an API Client (such as Insomnia) to test the following routes (JSON examples provided as well): 

#### Add USER
- POST Request to `http://localhost:3001/api/users`
- Required JSON body example: 
`{
	"username":"billy",
	"email":"billy@email.com"
}`

#### Update USER
- PUT Request to `http://localhost:3001/api/users/:userId`
- Required JSON body: 
`{
	"username":"updategreg",
	"email":"greg2@email.com"
}`

#### Get All USERs
- GET Request to `http://localhost:3001/api/users`

#### Get Single USER
- GET Request to `http://localhost:3001/api/users/:userId`

#### Delete USER
- DELETE Request to `http://localhost:3001/api/users/:userId`
(Note this will delete the user, it's associated thoughts and remove the user from any other users' friends list.)

#### Add FRIEND
- POST Request to `http://localhost:3001/api/users/:userId/friends/:friendID(userId of another user that you are adding as a friend)`

#### Delete FRIEND
- DELETE Request to `http://localhost:3001/api/users/:userId/friends/:friendID(userId of the user you are wanting to remove from the friends list)`

#### Add THOUGHT
- POST Request to `http://localhost:3001/api/thoughts`
- JSON Body Example: 
`{
	"thoughtText": "I like to build things",
	"username":"billy"
}`

#### Update THOUGHT
- PUT Request to `http://localhost:3001/api/thoughts/:thoughtId`
- JSON Body Example: 
`{
	"thoughtText": "I like this thought better than the last one."
}`

#### Get All THOUGHTS
- GET Request to `http://localhost:3001/api/thoughts`

#### Get a Single THOUGHT
- GET Request to `http://localhost:3001/api/thoughts/:thoughtId`

#### Delete a THOUGHT
- DELETE Request to `http://localhost:3001/api/thoughts/:thoughtId`

#### Add a REACTION to a THOUGHT
- POST Request to `http://localhost:3001/api/thoughts/:thoughtId/reactions`
- JSON Body Example:
`{
	"reactionBody": "Wow!  I never thought of that before!",
	"username": "james"
}`

#### Delete a REACTION from a THOUGHT
- DELETE Request to `http://localhost:3001/api/thoughts/:thoughtId/reactions/:reactionId`

