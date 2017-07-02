### News Summary App Using The Guardian API
---

#### Description
This application uses the Guardian API to retrieve a list of news headlines. These headlines are then transformed into corresponding links which can be followed to read the full article on the Guardian Website.

The JSON response from the request to the Guardian API is read and the links are formed programatically and appended to the page.

In this application, tests are run through a testing framework that I wrote. The code for this testing framework can be seen in `js/assert.js`.

#### Configuration
Clone this repo
* `$ npm install`
* `$ node node_modules/http-server/bin/http-server` to run this app on http://localhost:8080/.

#### Navigation
* News Page - http://localhost:8080/index.html
* Click the button `Click To Get The News` to make the API request and append links for news headlines to the homepage.

#### Tests
* Tests Page - http://localhost:8080/tests.html
