function loadNews(api = "https://content.guardianapis.com/search?api-key=8aa81d1f-a6c7-42dd-8579-2af984125813",
XMLHttpRequestConstructor = XMLHttpRequest, element = document.getElementById("news")) {

  var xhttp = new XMLHttpRequestConstructor();

  xhttp.onreadystatechange = function() {

    if (this.readyState == 4 && this.status == 200) {
	    var obj = JSON.parse(this.responseText)
	    var string = ''
			obj.response.results.forEach(function(entry){
				var newLi = document.createElement("li");
				var text = "<a href='" + entry.webUrl + "'>" + entry.webTitle + "</a>"
				newLi.innerHTML = text
			 element.appendChild(newLi)
			})
    }
  };

  xhttp.open("GET", api, true);
  xhttp.send();

  return xhttp

}
