console.log('scripts loaded');
var mykey = config.MY_KEY;
//LET'S TRY LOADING BOTH URLS IN A SINGLE AJAX CALL!
var url = 'https://newsapi.org/v2/everything?' +
          'q=LeBron+James&' +
          'from=2018-10-21&' +
          'sortBy=popularity&' +
          'language=en&' +
           myKey;

var url2 = 'https://newsapi.org/v2/everything?' +
          'q=Beatles+Lennon+McCartney&' +
          'from=2018-10-21&' +
          'sortBy=publishedAt&' +
          'language=en&' +
           myKey;

var urlArray = [url, url2];


var data = [];
//var data2 = [];
var articles = [];
//var beatleArticles = [];
var html = '';
//var html2 = '';
var i ='';

$(document).ready(function(){
        console.log("document ready");
        console.log(urlArray);
//LOOP THROUGH THE ARRAY OF URLs
    for (i=0;i<urlArray.length; i++){
//ON EACH URL, MAKE THE AJAX CALL TO LOAD THE DATA ASSOCIATED WITH THAT URL
        $.ajax({
          type: 'GET',
          url: urlArray[i],
          data: data,
          async: true,
          dataType: 'json',
          success: function(data){
              console.log(data.articles);
              articles = data.articles;

              $(".warriors").append('<h1>Latest News</h1>');
//BUILD THE CARDS USING THE DATA FOR EACH ARTICLE
              articles.forEach(function(article){

                  console.log(article.title);

                    html += '<div class="latest-news flex">';
                    html += '<img class="thumbnail" src="' + article.urlToImage + '">';
                    html +=  '<a href="' + article.url + '" target="_blank">';
                    html +=  '<h2 class="headline">' + article.title + '</h2>';
                    html +=  '<h4 class="byline">by ' + article.author + ', <em>' + article.source.name + '</em></h4>';
                    html +=   '</a></div>';

                  });
//LOAD THE HTML INTO THE EMPTY DIV
                    $(".warriors").html(html);
//THE .APPEND() AND .PREPEND() METHODS WERE CAUSING IT TO LOAD ONE OF THE SETS
//SETS OF ARTICLES TWICE. WEIRD. I HAD TO USE .HTML() OR .EMPTY().APPEND(html)

}

      });
    }

            /*$.ajax({
              type: 'GET',
              url: url2,
              data: data2,
              async: true,
              dataType: 'json',
              success: function(data2){
                  console.log(data2.articles);
                  beatleArticles = data2.articles;

                  $(".beatles").append('<h1>Beatles News</h1>');

                  beatleArticles.forEach(function(item){

                      console.log(item.title);


                        html2 += '<div class="latest-news flex">';
                        html2 += '<img class="thumbnail" src="' + item.urlToImage + '">';
                        html2 +=  '<a href="' + item.url + '" target="_blank">';
                        html2 +=  '<h2 class="headline">' + item.title + '</h2>';
                        html2 +=  '<h4 class="byline">by ' + item.author + ', <em>' + item.source.name + '</em></h4>';
                        html2 +=   '</a></div>';
                      });
                  $(".beatles").append(html2);
                  }
                });*/



    });
