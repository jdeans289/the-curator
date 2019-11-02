// Get keywords
// curl -X POST \
//     -H "x-textrazor-key: YOUR_API_KEY" \
//     -d "extractors=entities,entailments" \
//     -d "text=Spain's stricken Bankia expects to sell off its vast portfolio of industrial holdings that includes a stake in the parent company of British Airways and Iberia." \
//     https://api.textrazor.com/
var text = "Mueller interview notes obtained by CNN show Trump's push for stolen emails";
var text_enc = encodeURI(text);
var url_keywords = 'https://api.textrazor.com?' +
                    'extractors=entities,entailments&' + 
                    'text=' + text_enc;


var req_keywords = new Request(url_keywords);

fetch(url_keywords, { headers: {
            'x-textrazor-key': 'e1ee3ad8e80c6865b69dde454b7febf529c37874a94542d05dae384b'
        }}
     )
    .then(function(response) {
          if(response.ok) { // Check if response went through
              response.json().then(function(data) {
                  console.log(data);
                  // var output = document.getElementById('articlelist');
                  // for (var i = 0; i < data.articles.length ; i++) {
                  //     var articleinfo = '<a href=' + data.articles[i].url + '>' +data.articles[i].title +'</a>';
                  //     articleinfo += '</p>Source: ' + data.articles[i].source.name + '</p>';
                  //     output.innerHTML += articleinfo;
                  // }
              });
          } else { // Response wasn't ok. Check dev tools
              console.log("response failed?");
          }
    });



// Get articles
var str = "Mueller AND Trump AND stolen AND emails AND interview"
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