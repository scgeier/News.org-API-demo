console.log('scripts loaded');

var url = 'https://newsapi.org/v2/everything?' +
          'q=Steph+Curry&' +
          'from=2018-06-21&' +
          'sortBy=popularity&' +
          'language=en&' +
          'apiKey=16ad35cdcef340e9bd1565c244e4ff1f';

var url2 = 'https://newsapi.org/v2/everything?' +
          'q=Beatles+Lennon+McCartney&' +
          'from=2018-06-21&' +
          'sortBy=publishedAt&' +
          'language=en&' +
          'apiKey=16ad35cdcef340e9bd1565c244e4ff1f';

var data = [];
var data2 = [];
var articles = [];
var beatleArticles = [];
var html = '';
var html2 = '';

$(document).ready(function(){
        console.log("document ready");
        $.ajax({
          type: 'GET',
          url: url,
          data: data,
          async: true,
          dataType: 'json',
          success: function(data){
              console.log(data.articles);
              articles = data.articles;

              $(".warriors").append('<h1>Steph Curry News</h1>');

              articles.forEach(function(article){

                  console.log(article.title);


                    html += '<div class="latest-news flex">';
                    html += '<img class="thumbnail" src="' + article.urlToImage + '">';
                    html +=  '<a href="' + article.url + '" target="_blank">';
                    html +=  '<h2 class="headline">' + article.title + '</h2>';
                    html +=  '<h4 class="byline">by ' + article.author + ', <em>' + article.source.name + '</em></h4>';
                    html +=   '</a></div>';
                  });
              $(".warriors").append(html);
              }
            });

            $.ajax({
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
                });



    });
