  var xhr = new XMLHttpRequest();
  xhr.open('get', 'https://staticdn.net/badsoup/api.php');
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      var data = JSON.parse(xhr.responseText);
      var badsoup = document.getElementById('badsoup');
      badsoup.innerText = data.badsoup;
    }
  }
  xhr.send();
