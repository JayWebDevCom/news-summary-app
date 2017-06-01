function testingTheTest() {
  var assert = new Assert('abc', "Testing the test", 'abc')
  try {
    assert.isEqual()
  } catch(e) {
    updateErrorSection(e)
  }
}

function testingTheAPI() {

var responseText = JSON.stringify({
  "response": {
 "results": [
    {
       "webTitle":"England v South Africa: third ODI – live!",
       "webUrl":"https://www.theguardian.com/stage/2017/may/29/this-is-a-mocked-url"
    },
    {
      "webTitle":"Jam review – tense classroom drama gives lessons in Britain's division",
      "webUrl":"https://www.theguardian.com/stage/2017/may/29/jam-review-finborough-theatre"
    }
 ]
}
})

function FakeXMLHttpRequest() {
  this.readyState = 0
  this.status = 0
  this.responseText = ''
  this.onreadystatechange = function () {}
}

FakeXMLHttpRequest.prototype.open = function(){
  this.readyState = 4
  this.status = 200
  this.responseText = responseText
  this.onreadystatechange()
}

FakeXMLHttpRequest.prototype.send = function() {}

var fakeAppElement = {}
fakeAppElement.arrayOfItems = []

fakeAppElement.appendChild = function(thing){
  this.arrayOfItems.push(thing)
}

loadNews(api = "http://www.example.com",  XMLHttpRequestConstructor = FakeXMLHttpRequest, element = fakeAppElement)

var sentHTTPRequest = new FakeXMLHttpRequest()
sentHTTPRequest.open()
var receivedResponseText = JSON.parse(sentHTTPRequest.responseText)

var url = receivedResponseText.response.results[0].webUrl
var title = receivedResponseText.response.results[0].webTitle
var link1 = "<a href=\"" + url + "\">" + title + "</a>"
var url2 = receivedResponseText.response.results[1].webUrl
var title2 = receivedResponseText.response.results[1].webTitle
var link2 = "<a href=\"" + url2 + "\">" + title2 + "</a>"

var myArray = [fakeAppElement.arrayOfItems[0].innerHTML, fakeAppElement.arrayOfItems[1].innerHTML]

var assert1 = new Assert(link1, "API is functioning for first response element", myArray[0])
var assert2 = new Assert(link2, "API is functioning for second response element", myArray[1])

  try {
    assert1.isEqual()
  } catch(e) {
    updateErrorSection(e)
  }

  try {
    assert2.isEqual()
  } catch(e) {
    updateErrorSection(e)
  }

}

testingTheTest();
testingTheAPI()
