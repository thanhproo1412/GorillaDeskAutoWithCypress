Setup Cypress Document
Google docs: https://docs.google.com/document/d/1Jf8pDorAhc7C7JAYmnZp6esvj43PbFlsrFOPNCZUrTY/edit?usp=sharing

1. Required: Install Nodejs, Vs code

2. Pull code from github

3. Open Project with Vs code, in Terminal run:

npm i
npm install cypress

4. Create File PrivateData.json in Cypress/TestData/PrivateData.json
   File PrivateData.json: 
   {
   "url": "url",
   "username": "username",
   "password": "password"
   }

5. run cypress: npx cypress open
