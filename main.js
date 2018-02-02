$(document).ready(function() {

  function callbackFuncWithData() {
    $.getJSON("https://talaikis.com/api/quotes/random", function(json) {
      var quote = "";
      var author = "";

      quote = json.quote;
      author = json.author;

      var height1 = $('#quote-and-author').outerHeight();

      $("#quote").html('' + 
        '<p class="appear"><i class="fa fa-quote-left" aria-hidden="true" id="left-quote"></i> ' + quote + ' <i class="fa fa-quote-right" aria-hidden="true" id="right-quote"></i> </p>');
      $("#author").html('<p class="appear">' + author + '</p>');

      var height2 = $('#quote-and-author').css('height', 'auto').outerHeight();
      $('#quote-and-author').css('height', height1).animate({height: height2}, 500);

      $("#tweet").html(""+ 
        '<a class="twitter-share-button" href="https://twitter.com/intent/tweet?text='
         + quote + '  -' + author + '" target="_blank"><i class="fa fa-twitter fa-2x" aria-hidden="true"></i></a>');
    });

  };

  callbackFuncWithData();


  $("#get-quote").on("click", function () {
    $(".appear").addClass("disappear");
    callbackFuncWithData();
  });
});
