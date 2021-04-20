// https://api.nytimes.com/svc/topstories/v2/world.json?api-key=yourkey
// bo1zGgDSAuDUbpe5spvdoz37Hgc9fldJ

// <a href="https://website.com">[text]<a/>
// div id --->  latestheadlines

// world
let url = "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=bo1zGgDSAuDUbpe5spvdoz37Hgc9fldJ";
// science
let scienceurl = "https://api.nytimes.com/svc/topstories/v2/science.json?api-key=bo1zGgDSAuDUbpe5spvdoz37Hgc9fldJ";
// arts
let art = "https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=bo1zGgDSAuDUbpe5spvdoz37Hgc9fldJ";
// US
let usurl = "https://api.nytimes.com/svc/topstories/v2/us.json?api-key=bo1zGgDSAuDUbpe5spvdoz37Hgc9fldJ";
// article search
//let articleurl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=The%20New%20York%20Times&q=covid&api-key=bo1zGgDSAuDUbpe5spvdoz37Hgc9fldJ";

// to appendage in website | world
let latestheadlines =  document.getElementById("latestheadlines");

// getting world latest headlines
fetch(url)
  .then(response => response.json())
  .then(data => {
    //console.log(data);

    data.results.map(article => {
      //console.log(article.title);

      // gathering article link
      let a = document.createElement("a");
      a.setAttribute('href', article.url);
      a.innerHTML = article.title;
      
      // gathering description from article
      let description = document.createElement("p");
      description.innerHTML = article.abstract;

      // gathering image of article
      let image = document.createElement("img");
      image.setAttribute('src', article.multimedia[0].url);

      latestheadlines.appendChild(image);
      latestheadlines.appendChild(a);
      latestheadlines.appendChild(description);
    
    })
  });

// getting science latest headlines
let scienceheadlines =  document.getElementById("scienceheadlines");

fetch(scienceurl)
  .then(response => response.json())
  .then(data => {
    //console.log(data);
    data.results.map(article => {
      //console.log(article.title);

      // gathering article link
      let link = document.createElement("a");
      link.setAttribute('href', article.url);
      link.innerHTML = article.title;
      
      // gathering description from article
      let description = document.createElement("p");
      description.innerHTML = article.abstract;

      // gathering image of article
      let image = document.createElement("img");
      image.setAttribute('src', article.multimedia[0].url);

      scienceheadlines.appendChild(image);
      scienceheadlines.appendChild(link);
      scienceheadlines.appendChild(description);
    
    })
  });

// getting latest art headlines
let arts =  document.getElementById("arts");

fetch(art)
  .then(response => response.json())
  .then(data => {
    //console.log(data);
    data.results.map(article => {
      //console.log(article.title);

      // gathering article link
      let link = document.createElement("a");
      link.setAttribute('href', article.url);
      link.innerHTML = article.title;
      
      // gathering description from article
      let description = document.createElement("p");
      description.innerHTML = article.abstract;

      // gathering image of article
      let image = document.createElement("img");
      image.setAttribute('src', article.multimedia[0].url);

      arts.appendChild(image);
      arts.appendChild(link);
      arts.appendChild(description);
    
    })
  });

// getting latest US headlines
let us =  document.getElementById("us");

fetch(usurl)
  .then(response => response.json())
  .then(data => {
    //console.log(data);
    data.results.map(article => {

      // gathering article link
      let link = document.createElement("a");
      link.setAttribute('href', article.url);
      link.innerHTML = article;
      
      // gathering description from article
      let description = document.createElement("p");
      description.innerHTML = article.abstract;

      // gathering image of article
      let image = document.createElement("img");
      image.setAttribute('src', article.multimedia[0].url);

      us.appendChild(image);
      us.appendChild(link);
      us.appendChild(description);
    
    })
  });

  
  const articleUrl1 = "https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=The%20New%20York%20Times&q=";
  const articleUrl2 = "&api-key=bo1zGgDSAuDUbpe5spvdoz37Hgc9fldJ";
  // commenting out function to make sure data gets processed for some reason it does not work when wrapped in function
  //function execute() { 
  
    var productList;
    var productListAdd;    
    
    // testing we are getting the info from the searchbox
    console.log($.trim($('#title').val()));
    
    //jQuery Ajax request
    $.ajax({
        // commenting line below to hardcode url for testing purposes
        //url: articleUrl1 + $.trim($('#title').val()) + articleUrl2, //API url
        url: articleUrl1 + "covid"+ articleUrl2, //temp hard ooded covid search for testing purposes
        type: 'get', //type of request (get)
        dataType: 'json', //dataType, which is json for this lab.
        contentType: 'text/plain', //contentType, which is text/plain since json is sent as plain text.
        

        success: function (data) { //on success calls this functions and passes the API response as the data parameter.
            productList='';
            console.log(data);

            $.each(data['response']['docs'], function(i, item) {
              console.log(item.web_url);
                //this is HTML code that is reactively added to the page, your TODO solutions do not need this.
                productListAdd = 
                '<p>'+item.abstract+'</p>' +
                '<a href='+item.web_url+'>'+item.web_url+'</a>';

                productList=productList+productListAdd;

            });
            $('#articleResult').html(productList);

        },
        error: function (data) { //on error, alert the user.
            alert("Error while fetching data.");
        }

    });
    
  //} // commenting out function to make sure data gets processed