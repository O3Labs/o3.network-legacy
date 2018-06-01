var bs58check = require('bs58check');

var form = document.getElementById('keyForm');
form.onsubmit = handleFormSubmit;

var input = document.getElementById('inputField');
var original = document.getElementById('original');
var result = document.getElementById('result');

function handleFormSubmit(e) {
  e.preventDefault()
  var charset = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var key = input.value;
  for (var i = 1;i<=key.length;i++) {
    charset.forEach(function (character) {
      var wif = key.substring(0, i-1) + character + key.substring(i);
      try {
        var priv = bs58check.decode(wif).toString('hex');
        original.innerText = key + ' - original';
        result.innerText = wif + ' - repaired';
      } catch(err) {
        // console.log(wif, err);
      }
    });
  }
}
