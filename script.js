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
  })

// getting science latest headlines
let scienceheadlines =  document.getElementById("scienceheadlines");

fetch(scienceurl)
  .then(response => response.json())
  .then(data => {
    console.log(data);
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
  })

// getting latest art headlines
let arts =  document.getElementById("arts");

fetch(art)
  .then(response => response.json())
  .then(data => {
    console.log(data);
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
  })

// getting latest US headlines
let us =  document.getElementById("us");

fetch(usurl)
  .then(response => response.json())
  .then(data => {
    console.log(data);
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

      us.appendChild(image);
      us.appendChild(link);
      us.appendChild(description);
    
    })
  })