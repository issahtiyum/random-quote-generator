import { quotes, Quote, favorites,} from "./data.js";

let currentQuoteObject;
let generateQuoteButton = document.querySelector('.quotes-button');
let likeButton = document.querySelector(".like-button-container");
const quotesContainer = document.querySelector('.quotes-container');
const tabButtons = document.querySelectorAll('.tab-button')
const tabPanels = document.querySelectorAll('.tab-panel')

tabButtons.forEach((tabButton) => {
  tabButton.addEventListener('click', (event) => {
    event.target.classList.contains('favorites') ? switchTab('favorites') : switchTab('new-quote')
  })
});

function switchTab(tabButtonName) {
  tabButtons.forEach((button) =>
    button.classList.toggle("active", button.classList.contains(tabButtonName))
  );

  tabPanels.forEach((panel) =>
    panel.classList.toggle("active", panel.classList.contains(`${tabButtonName}-container`))
  );

  if (tabButtonName === 'favorites') document.querySelector(`.${tabButtonName}-container`)
    .innerHTML = renderFavorites(favorites);

}

generateQuoteButton.addEventListener('click', async () => {
  currentQuoteObject = await renderQuote();
  quotesContainer.innerHTML = `${currentQuoteObject.content} - ${currentQuoteObject.author}`
  likeButton.innerHTML = `<img src="images/empty-heart.png" alt="like-button" class="like-button">`

  favorites.forEach((favoriteQuote) => {
    if (currentQuoteObject.content == favoriteQuote.content && currentQuoteObject.author == favoriteQuote.author) {
      likeButton.innerHTML = `<img src="images/full-heart.png" alt="like-button" class="like-button">`
      currentQuoteObject.isFavorite = true;
    }
  })
})

likeButton.addEventListener('click', () => {
  currentQuoteObject.toggleLike()
  if (currentQuoteObject.isFavorite){
    likeButton.innerHTML = `<img src="images/full-heart.png" alt="like-button" class="like-button">`
  } else {
    likeButton.innerHTML = `<img src="images/empty-heart.png" alt="like-button" class="like-button">`
  }

})

async function renderQuote() {
  const APIQuote = await fetchQuote()
  if(!APIQuote.errorMessage){
    return new Quote(APIQuote)
  }
  const randomIndex = Math.floor(Math.random() * quotes.length)
  return quotes[randomIndex]
}

async function fetchQuote(){
  try{
    const quote = await fetch("http://api.quotable.io/random")
    if(quote.status >= 400){
      const errorObject = await quote.json(); 
      throw new Error(errorObject.message || 'Unexpected error');   
    }
    const quoteObject = await quote.json()
    return quoteObject
  }
    catch(error){
      console.error("Error fetching quote:", error.message);
      return {errorMessage: error.message};
  }
}

function renderFavorites(favorites) {
  if (!favorites.length) {
    return `<div class="no-favorite-message">You have no favorite quotes</div> 
  <div class="back-to-new-quotes-button">
    <button class="primary-button">Back to New Quotes</button>
  </div>
`
  }
  let favoritesContainer = ''  
    favorites.forEach((favoriteQuote) => {
      favoritesContainer += `<p class="favorite-quote">
  ${favoriteQuote.content} - ${favoriteQuote.author}
</p>
`})
  return favoritesContainer
}
