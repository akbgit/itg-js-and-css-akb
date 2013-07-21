function closeBox(toClose) {
	document.getElementById(toClose).style.display = &quot;none&quot;;
	setCookie(toClose, &quot;closed&quot;,5);
}
function setCookie(cName, value, expiredays) {
	var expDate = new Date();
	expDate.setDate(expDate.getDate()+expiredays);
	document.cookie=cName + &quot;=&quot; + escape(value) + 
	&quot;;expires=&quot; + expDate.toGMTString();
}
function loadMsg(msgClass) {
	msg = document.getElementsByTagName(&quot;div&quot;);
	for (i=0; i&lt; msg.length; i++) {
		if(msg[i].className == msgClass) {
			if(document.cookie.indexOf(msg[i].id) == -1) {
				msg[i].style.display = &quot;block&quot;;
			}
		}
	}
}