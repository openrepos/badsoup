# 干了这碗毒鸡汤

**使用方法：**

```
<p id="badsoup">毒鸡汤，干了这杯还有一杯。</p>
<script>
  var xhr = new XMLHttpRequest();
  xhr.open('get', 'https://www.staticdn.net/badsoup/api.php');
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      var data = JSON.parse(xhr.responseText);
      var badsoup = document.getElementById('badsoup');
      badsoup.innerText = data.badsoup;
    }
  }
  xhr.send();
</script>
```

[源代码/引用至](https://github.com/egotong/nows)
