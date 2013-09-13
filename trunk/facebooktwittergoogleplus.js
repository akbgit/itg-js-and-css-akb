var scripts = ["http://connect.beta.facebook.net/en_US/all.js#xfbml=1","http://platform.twitter.com/widgets.js","http://apis.google.com/js/plusone.js"];
(function(array) {
   for (var i = 0, len = array.length; i < len; i++)
   {
      var elem = document.createElement('script');
      elem.type = 'text/javascript';
      elem.async = true;
      elem.src = array[i];
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(elem, s);
   }
})(scripts);