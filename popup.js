  let testbutton = document.getElementById('testbutton');

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        var url = tabs[0].url;     //url
        var title = tabs[0].title;   //title
        document.getElementById("demo").innerHTML = title;

        var settings = {
          "url": "https://apis.paralleldots.com/v4/keywords",
          "method": "POST",
          "async": true,
          "crossDomain": true,
          "data": {
            "api_key": "A8WONI23dxtGDNwnTYzZPjBYafO2YMPpj1lpaNU7tcw",
            "text": title,
        },
          "headers": {
            "Content-Type": "application/x-www-form-urlencoded",
          }
        }

        $.ajax(settings).done(function (response) {
            console.log(response);
            keywords = response.keywords;
            var str = "";
            var num_args = Math.min(keywords.length-1, 5);

            for (var i = 0; i < num_args; i++) {
                str += keywords[i].keyword + " AND ";
            }
            str += keywords[num_args].keyword;

            // document.write(str);

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
        });
    });
