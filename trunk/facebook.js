(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];

  if (d.getElementById(id)) return;
var js = document.createElement('script');
js.type = 'text/javascript';
js.async = true;
 js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));