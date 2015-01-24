<html>

  <body>


    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.9.1.min.js"><\/script>')</script>
    <script src="js/skrollr.js"></script>
    <script src="js/_main.js"></script>

    ( function( $ ) {
      // Init Skrollr
      var s = skrollr.init({
        render: function(data) {
          //Debugging - Log the current scroll position.
          //console.log(data.curTop);
        }
      });
    } )( jQuery );

  </body>
</html>
