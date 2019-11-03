  let testbutton = document.getElementById('testbutton');

/* chrome.storage.sync.get('color', function(data) {
    changeColor.style.backgroundColor = data.color;
    changeColor.setAttribute('value', data.color);
}); */

//testbutton.onclick = function(element) {
    // let color = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        var url = tabs[0].url;     //url
        var title = tabs[0].title;   //title
        //document.write(url);
        var str = title.substring(0,7);
        document.getElementById("demo").innerHTML = str;
        var keywords = encodeURI(str);
        var url = 'https://newsapi.org/v2/everything?' +
                  'language=en&'+
                  'q=' + keywords + '&' +
                  'from=2019-11-02&' +
                  'sortBy=popularity&' +
                  'apiKey=0c0e23b64d90458aa4bf76f9aad0e74b';

        var req = new Request(url);

        fetch(url)
            .then(function(response) {
                  if(response.ok) { // Check if response went through
                      response.json().then(function(data) {
                          console.log(data);
                          var output = document.getElementById('articlelist');
                          for (var i = 0; i < data.articles.length ; i++) {
                              var articleinfo = '<a href=' + data.articles[i].url + '>' +data.articles[i].title +'</a>';
                              articleinfo += '</p>Source: ' + data.articles[i].source.name + '</p>';
                              output.innerHTML += articleinfo;
                          }
                      });
                  } else { // Response wasn't ok. Check dev tools
                      console.log("response failed?");
                  }
            });
        //document.write(title);
    });
   /*  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.body.style.backgroundColor = "' + color + '";'});
    }); */
//};
