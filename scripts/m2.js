// Copyright 2016 Google Inc.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//      http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// Register Service Worker

if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
    // Registration was successful
		console.log('ServiceWorker registration was successful');
  }).catch(function(err) {
    // registration failed :(
    console.log('ServiceWorker registration failed: ', err);
  });
}

window.onload = function() {
  document.querySelector('#greeting').innerText =
    'It is ' + dateFormat (new Date (), "%Y-%m-%d %H:%M:%S", false);
    console.log("window.onload");
};

var submitButton = document.querySelector('#show');
submitButton.addEventListener('click', function(e) {
  sendCmd();
});

// dateFormat (new Date (), "%Y-%m-%d %H:%M:%S", true) returns   "2012-05-18 05:37:21" 
function dateFormat (date, fstr, utc) {
  utc = utc ? 'getUTC' : 'get';
  return fstr.replace (/%[YmdHMS]/g, function (m) {
    switch (m) {
    case '%Y': return date[utc + 'FullYear'] (); // no leading zeros required
    case '%m': m = 1 + date[utc + 'Month'] (); break;
    case '%d': m = date[utc + 'Date'] (); break;
    case '%H': m = date[utc + 'Hours'] (); break;
    case '%M': m = date[utc + 'Minutes'] (); break;
    case '%S': m = date[utc + 'Seconds'] (); break;
    default: return m.slice (1); // unknown code, remove %
    }
    // add leading zero if required
    return ('0' + m).slice (-2);
  });
}

function sendCmd()
{
	var sms = document.getElementById("sms").value;
  console.log(sms);
	console.log(sms.length);
	var trs = '';
	var imune = false;
  for (i = 0; i < sms.length; i++) {
		if (imune)
			trs = trs + sms[i];
		else if (sms[i] == 'E')
			trs = trs + 'Ε';
		else if (sms[i] == 'I')
			trs = trs + 'Ι';
		else if (sms[i] == 'K')
			trs = trs + 'Κ';
		else if (sms[i] == 'O')
			trs = trs + 'Ο';
		else if (sms[i] == 'N')
			trs = trs + 'Ν';
		else if (sms[i] == 'T')
			trs = trs + 'Τ';
		else if (sms[i] == 'P')
			trs = trs + 'Ρ';
		else if (sms[i] == 'A')
			trs = trs + 'Α';
		else if (sms[i] == 'X')
			trs = trs + 'Χ';
		else if (sms[i] == 'H')
			trs = trs + 'Η';
		else if (sms[i] == 'M')
			trs = trs + 'Μ';
		else if (sms[i] == 'I')
			trs = trs + 'Ι';
		else if (sms[i] == 'Y')
			trs = trs + 'Υ';
		else
			trs = trs + sms[i];
  }

	document.getElementById("trs").value = trs;

  /* Get the text field */
  var copyText = document.getElementById("trs");

  /* Select the text field */
  copyText.select();

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  //alert("Copied the text: " + copyText.value);
}


