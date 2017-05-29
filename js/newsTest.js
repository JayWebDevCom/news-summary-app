function testingTheTest() {
  var assert = new Assert('abc', "Testing the test", 'abc')
  try {
    assert.isEqual()
  } catch(e) {
    updateErrorSection(e)
  }
}

function testingTheAPI() {

function FakeXMLHttpRequest() {
  this.readyState = 4
  this.status = 200
  this.responseText = JSON.stringify({
    "response": {
   "results": [
      {
         "webTitle":"England v South Africa: third ODI – live!",
         "webUrl":"https://www.example.com"
      },
      {
        "webTitle":"Jam review – tense classroom drama gives lessons in Britain's division",
        "webUrl":"https://www.theguardian.com/stage/2017/may/29/jam-review-finborough-theatre"
      }
   ]
 }
})
}
FakeXMLHttpRequest.prototype.open = function(){
}
FakeXMLHttpRequest.prototype.send = function(){
  this.onreadystatechange()
}

fakeAppElement = {}
fakeAppElement.arrayOfItems = []

fakeAppElement.appendChild = function(thing){
  this.arrayOfItems.push(thing)
}

loadNews(api = "http://www.example.com",  XMLHttpRequestConstructor = FakeXMLHttpRequest, element = fakeAppElement)

var url = JSON.parse(new FakeXMLHttpRequest().responseText).response.results[0].webUrl
var title = JSON.parse(new FakeXMLHttpRequest().responseText).response.results[0].webTitle

var link = "<a href=\"" + url + "\">" + title + "</a>"


var assert = new Assert(fakeAppElement.arrayOfItems[0].innerHTML, "API is functioning", link)

  try {
    assert.isEqual()
  } catch(e) {
    updateErrorSection(e)
  }

}

testingTheTest();
testingTheAPI()
