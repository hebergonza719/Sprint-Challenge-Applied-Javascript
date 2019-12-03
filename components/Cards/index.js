// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
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

const createCard = (article) => {
  const card = document.createElement('div');
  const divHeadline = document.createElement('div');
  const divAuthor = document.createElement('div');
  const divImgCont = document.createElement('div');
  const imgCard = document.createElement('img');
  const spanAuthorName = document.createElement('span');

  divHeadline.textContent = `${article.headline}`;
  imgCard.src = `${article.authorPhoto}`;
  spanAuthorName.textContent = `${article.authorName}`;

  card.appendChild(divHeadline);
  card.appendChild(divAuthor);
  divAuthor.appendChild(divImgCont);
  divImgCont.appendChild(imgCard);
  divAuthor.appendChild(spanAuthorName);

  card.classList.add('card');
  divHeadline.classList.add('headline');
  divAuthor.classList.add('author');
  divImgCont.classList.add('img-container');

  return card;
};

const cardsContainer = document.querySelector(".cards-container");

const axiosPromiseCards = axios.get("https://lambda-times-backend.herokuapp.com/articles");
// console.log(axiosPromiseCards);

axiosPromiseCards.then(response => {
  console.log(response);
  arrayArticles = response.data.articles;
  
  arrayArticles.bootstrap.forEach(article => {
    cardsContainer.appendChild(createCard(article));
  });
  arrayArticles.javascript.forEach(article => {
    cardsContainer.appendChild(createCard(article));
  });
  arrayArticles.jquery.forEach(article => {
    cardsContainer.appendChild(createCard(article));
  });
  arrayArticles.node.forEach(article => {
    cardsContainer.appendChild(createCard(article));
  });
  arrayArticles.technology.forEach(article => {
    cardsContainer.appendChild(createCard(article));
  });
});