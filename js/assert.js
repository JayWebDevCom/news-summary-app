(function(exports) {
  var updateErrorSection = function(assert) {
    var string = "Failed - " + assert._testName;
    console.log(string);
    var newli = document.createElement("li");
    var text = document.createTextNode(string);
    newli.appendChild(text);
    document.getElementById("testOutput").appendChild(newli);
  };

  var updatePassSection = function(assert) {
    var output = "Passed - " + assert._testName;
    var newli = document.createElement("li");
    var text = document.createTextNode(output);
    newli.appendChild(text);
    document.getElementById("testOutput").appendChild(newli);
  };

  var Assert = function(subject, testName, expectation) {
    this._subject = subject;
    this._testName = testName;
    this._expectation = expectation;
  };

  Assert.prototype.isEqual = function() {
    if (this._subject === this._expectation) {
      updatePassSection(this);
    } else {
      updateErrorSection(this);
    }
  };

  Assert.prototype.isInstanceOf = function() {
    if (this._subject instanceof this._expectation) {
      updatePassSection(this);
    } else {
      updateErrorSection(this);
    }
  };

  Assert.prototype.isTypeOf = function() {
    if (typeof this._subject === this._expectation) {
      updatePassSection(this);
    } else {
      updateErrorSection(this);
    }
  };

  exports.Assert = Assert;
})(this);
