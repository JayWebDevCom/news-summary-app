var testingTheTest = function() {
  var assert = new Assert("abc", "Testing the test", "abc");
  assert.isEqual();
};

var testingTheAPI = function() {
  var responseText = JSON.stringify({
    response: {
      results: [
        {
          webTitle: "England v South Africa: third ODI – live!",
          webUrl:
            "https://www.theguardian.com/stage/2017/may/29/this-is-a-mocked-url"
        },
        {
          webTitle:
            "Jam review – tense classroom drama gives lessons in Britain's division",
          webUrl:
            "https://www.theguardian.com/stage/2017/may/29/jam-review-finborough-theatre"
        }
      ]
    }
  });

  var FakeXMLHttpRequest = function() {
    this.readyState = 0;
    this.status = 0;
  };

  FakeXMLHttpRequest.prototype.onreadystatechange = function() {};

  FakeXMLHttpRequest.prototype.open = function() {
    this.readyState = 4;
    this.status = 200;
    this.responseText = responseText;
    this.onreadystatechange();
  };

  FakeXMLHttpRequest.prototype.send = function() {};

  var fakeAppElement = {
    arrayOfItems: [],
    appendChild: function(thing) {
      this.arrayOfItems.push(thing);
    }
  };

  var sentHTTPRequest = loadNews(
    (api = "http://www.example.com"),
    (XMLHttpRequestConstructor = FakeXMLHttpRequest),
    (element = fakeAppElement)
  );

  var receivedResponseText = JSON.parse(sentHTTPRequest.responseText).response
    .results;

  var url = receivedResponseText[0].webUrl;
  var title = receivedResponseText[0].webTitle;
  var link1 = '<a href="' + url + '">' + title + "</a>";
  var url2 = receivedResponseText[1].webUrl;
  var title2 = receivedResponseText[1].webTitle;
  var link2 = '<a href="' + url2 + '">' + title2 + "</a>";

  var fakeAppElementArrayOfItems = [
    fakeAppElement.arrayOfItems[0].innerHTML,
    fakeAppElement.arrayOfItems[1].innerHTML
  ];

  var assert1 = new Assert(
    link1,
    "API is functioning for first response element",
    fakeAppElementArrayOfItems[0]
  );
  var assert2 = new Assert(
    link2,
    "API is functioning for second response element",
    fakeAppElementArrayOfItems[1]
  );

  assert1.isEqual();
  assert2.isEqual();
};

testingTheTest();
testingTheAPI();
