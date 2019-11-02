
var str = "Trump AND Beto"
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
