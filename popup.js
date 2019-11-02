  let testbutton = document.getElementById('testbutton');

/* chrome.storage.sync.get('color', function(data) {
    changeColor.style.backgroundColor = data.color;
    changeColor.setAttribute('value', data.color);
}); */
testbutton.onclick = function(element) {
    // let color = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        var url = tabs[0].url;     //url
        var title = tabs[0].title;   //title
        //document.write(url);
        document.write(title);
    });
   /*  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.body.style.backgroundColor = "' + color + '";'});
    }); */
};