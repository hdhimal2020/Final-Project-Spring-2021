// constants for the API SEARCH BOX
const articleUrl1 = "https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=The%20New%20York%20Times&q=";
const articleUrl2 = "&api-key=bo1zGgDSAuDUbpe5spvdoz37Hgc9fldJ";
// https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=The%20New%20York%20Times&q=covid"&api-key=bo1zGgDSAuDUbpe5spvdoz37Hgc9fldJ
const imgUrl = "https://static01.nyt.com/";
// world headlines
let url = "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=bo1zGgDSAuDUbpe5spvdoz37Hgc9fldJ";
// science headlines
let scienceurl = "https://api.nytimes.com/svc/topstories/v2/science.json?api-key=bo1zGgDSAuDUbpe5spvdoz37Hgc9fldJ";
// arts headlines
let art = "https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=bo1zGgDSAuDUbpe5spvdoz37Hgc9fldJ";
// US headlines
let usurl = "https://api.nytimes.com/svc/topstories/v2/us.json?api-key=bo1zGgDSAuDUbpe5spvdoz37Hgc9fldJ";

// to appendage in website | world
let latestheadlines =  document.getElementById("latestheadlines");

// getting world latest headlines
fetch(url)
  .then(response => response.json())
  .then(data => {
    //console.log(data);

    data.results.map(article => {
      //console.log(article); // console logging array values

      // gathering article link
      let a = document.createElement("a"); // creating an element for url
      a.setAttribute('href', article.url);
      a.innerHTML = article.title;
      
      // gathering description from article
      let description = document.createElement("p"); // creating paragraph element
      description.innerHTML = article.abstract;

      // gathering image of article
      let image = document.createElement("img"); // creating image element
      image.setAttribute('src', article.multimedia[0].url);

      // using append function to have information shown dynamically in web page
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
      let link = document.createElement("a"); // creating an element for url
      link.setAttribute('href', article.url);
      link.innerHTML = article.title;
      
      // gathering description from article
      let description = document.createElement("p"); // creating paragraph element
      description.innerHTML = article.abstract;

      // gathering image of article
      let image = document.createElement("img"); // creating image element
      image.setAttribute('src', article.multimedia[0].url);

      // using append function to have information shown dynamically in web page
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
      let link = document.createElement("a"); // creating an element for url
      link.setAttribute('href', article.url);
      link.innerHTML = article.title;
      
      // gathering description from article
      let description = document.createElement("p"); // creating paragraph element
      description.innerHTML = article.abstract;

      // gathering image of article
      let image = document.createElement("img"); // creating image element
      image.setAttribute('src', article.multimedia[0].url);

      // using append function to have information shown dynamically in web page
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
      let link = document.createElement("a"); // creating an element for url
      link.setAttribute('href', article.url);
      link.innerHTML = article.url;
      
      // gathering description from article
      let description = document.createElement("p"); // creating paragraph element
      description.innerHTML = article.abstract;

      // gathering image of article
      let image = document.createElement("img"); // creating image element
      image.setAttribute('src', article.multimedia[0].url);

      // using append function to have information shown dynamically in web page
      us.appendChild(image);
      us.appendChild(link);
      us.appendChild(description);
    
    })
  });

  // function to search through NYT article search API with user's provided keyword
  function execute(){
    // getting users input
    let article =$.trim($('#title').val())
    
    // preventing web page from reloading
    event.preventDefault(); 

    var productList;
    var productListAdd;    
    
    //jQuery Ajax request
    $.ajax({
        url: articleUrl1 + article + articleUrl2, // Concatenated API url
        type: 'get', //type of request (get)
        dataType: 'json', 
        contentType: 'text/plain', 
        
        //on success calls this functions and passes the API response as the data parameter.
        success: function (data) { 
            productList='';
            console.log(data);
            // looping through nested arrays
            $.each(data['response']['docs'], function(i, item) {
              
                //this is HTML code that is reactively added to the index page
                productListAdd = 
                // adding multimedia
                '<img src='+ imgUrl + item.multimedia[3].url+'>' +
                // gathering the abstract title of the article
                '<p>'+item.abstract+'</p>' +
                // creating a link to the main source of the article
                '<a href='+item.web_url+' target="_blank">'+item.web_url+'</a>';

                productList=productList+productListAdd;

            });
            // adding the html to the id 
            $('#articleResult').html(productList);

        },
        error: function (data) { //on error, alert the user.
            alert("Error while fetching data.");
        }

    });
  
  }; // end of function