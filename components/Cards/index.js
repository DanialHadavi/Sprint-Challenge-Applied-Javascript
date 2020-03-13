// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    console.log(response);
    const cardInfo = response.data.articles.javascript;
    console.log(cardInfo);
    myCards(cardInfo);
    const cardsContainer = document.querySelector(".cards-container");
    const cardInfo2 = myCards(cardInfo);
    cardsContainer.append(cardInfo2);
  })
  .catch(error => {
    console.log(error);
  });

function myCards(obj) {
  const card = document.createElement("div"),
    headline = document.createElement("div"),
    author = document.createElement("div"),
    imgContainer = document.createElement("div"),
    image = document.createElement("img"),
    authorName = document.createElement("span");

  card.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imgContainer.classList.add("img-container");

  card.append(headline, author);
  author.append(imgContainer, authorName);
  imgContainer.append(image);

  headline.textContent = obj.headline;
  image.src = obj.authorPhoto;
  authorName.textContent = obj.authorName;

  return card;
}

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
