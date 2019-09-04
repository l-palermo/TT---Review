# Tech-test
-----------------
## Description
This technical test consists of a simple website that via a questionnaire will generate a quote for a life insurance product for a user based on the answers to some questions. The quote is for the cover amount of the policy.
The questionnaire includes three questions. Each of them reveals the next one until the last question releases the `result` button. This will show the policy quote and the summary of the information given by the user.

-----------------
## Instruction
To run the program, create a new folder on your local machine open your text editor and create a new folder then run the following commands:
* `>$ git clone git@github.com:l-palermo/tech-test-questionnaire.git`<br>Clones this repository
* `>$ cd tech-test`
* `>$ npm install`<br>Installs the dependencies
* `>$ npm test`<br>Runs test and test coverage
-----------------
## How to use the program
* `>$ npm start`<br>Runs the app in the development mode. Open http://localhost:3000 to view it in the browser.
* `Question 1` Input the date of birth in the following format `YYYY/MM/DD`. Only if you are eligible for the insurance policy the second question will be shown.
* `Question 2` Click on `yes` if you are a smoker or `no` if don't.
* `Question 3` Input your height and weight in meters and kilograms.
* `Result` Click on the result button to see the quote and the summary of the information given by the user.
-----------------
## Tech
* `React`
* `Jest`<br>Test framework & Test coverage
* `Enzyme`<br>Testing utility to test components in isolation
* `moment`<br>Utility to quickly get the current date in the desired format.
-----------------

