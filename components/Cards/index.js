// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:

//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function myCards(obj) {
  const card = document.createElement("div");
  const headline = document.createElement("div");
  const author = document.createElement("div");
  const imgContainer = document.createElement("div");
  const image = document.createElement("img");
  const authorName = document.createElement("span");

  card.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imgContainer.classList.add("img-container");

  headline.textContent = obj.headline;
  image.src = obj.authorPhoto;
  authorName.textContent = obj.authorName;

  card.append(headline);
  card.append(author);
  author.append(imgContainer);
  imgContainer.append(image);
  author.append(authorName);

  return card;
}

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    console.log(response);
    Object.values(response.data.articles).forEach(item => {
      item.forEach(item2 => {
        //console.log(artloop);
        const cardsContainer = document.querySelector(".cards-container");
        cardsContainer.append(myCards(item2));
      });
    });
  })
  .catch(error => {
    console.log("you have an error", error);
  });
