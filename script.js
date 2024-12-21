import { quotes, Quote, favorites,} from "./data.js";

let currentQuoteObject;

let generateQuoteButton = document.querySelector('.quotes-button');
let likeButton = document.querySelector(".like-button-container");
const shareButton = document.querySelector(".share-button-container")

const tabButtons = document.querySelectorAll('.tab-button')
const tabPanels = document.querySelectorAll('.tab-panel')

const quotesContainer = document.querySelector('.quotes-container');
const favoritesContainer= document.querySelector('.favorites-container')

const notificationsContainer = document.querySelector('.notifications-container')

tabButtons.forEach((tabButton) => {
  tabButton.addEventListener('click', (event) => {
    event.target.classList.contains('favorites') ? switchTab('favorites') : switchTab('new-quote')
  })
});


generateQuoteButton.addEventListener('click', async () => {
  currentQuoteObject = await renderQuote();
  quotesContainer.innerHTML = `${currentQuoteObject.content} - ${currentQuoteObject.author}`
  likeButton.innerHTML = `<img src="images/${currentQuoteObject.isFavorite ? 'full-heart' : 'empty-heart'}.png" alt="like-button" class="like-button icon">`
  shareButton.innerHTML = `<img src="images/share.png" alt="share-button" class="share-button icon">`
})

likeButton.addEventListener('click', () => {
  currentQuoteObject.toggleLike()
  likeButton.innerHTML = `<img src="images/${currentQuoteObject.isFavorite ? 'full-heart' : 'empty-heart'}.png" alt="like-button" class="like-button icon">`
  currentQuoteObject.isFavorite ? pushNotification('Quote added to favorites') : pushNotification('Quote removed from favorites')
})

shareButton.addEventListener('click', () => {
  copyToClipboard(currentQuoteObject);
})

favoritesContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('back-to-new-quotes')){
    switchTab('new-quote')
    return
  }
  else if (event.target.classList.contains('delete-button')) {
    const index = event.target.getAttribute('data-index')
    const quoteToRemove = favorites[index]
    quoteToRemove.removeFromFavorites(favorites, index)
    favoritesContainer.innerHTML = renderFavorites(favorites);
    pushNotification("Quote removed from favorites", undo)
  
    if (
      currentQuoteObject &&
      currentQuoteObject.content === quoteToRemove.content &&
      currentQuoteObject.author === quoteToRemove.author
    ) {
      likeButton.innerHTML = `<img src="images/empty-heart.png" alt="like-button" class="like-button icon">`;
    }

    document.querySelector(".undo-button").addEventListener('click', () => {
      favorites.splice(index, 0, quoteToRemove);
      pushNotification("Quote added to favorites");
      favoritesContainer.innerHTML = renderFavorites(favorites);
      if (
        currentQuoteObject &&
        currentQuoteObject.content === quoteToRemove.content &&
        currentQuoteObject.author === quoteToRemove.author
      ) {
        likeButton.innerHTML = `<img src="images/full-heart.png" alt="like-button" class="like-button icon">`;
      }
    })
  
    return;
  }
  else if (event.target.classList.contains('share-button')){
    const index = event.target.getAttribute('data-index');
    const quoteToCopy = favorites[index];
    copyToClipboard(quoteToCopy)
  }

})

function switchTab(tabButtonName) {
  tabButtons.forEach((button) =>
    button.classList.toggle("active", button.classList.contains(tabButtonName))
  );

  tabPanels.forEach((panel) =>
    panel.classList.toggle("active", panel.classList.contains(`${tabButtonName}-container`))
  );

  if (tabButtonName === 'favorites') {
    favoritesContainer.innerHTML = renderFavorites(favorites); 
  }
}

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
    <button class="primary-button back-to-new-quotes">Back to New Quotes</button>
  </div>
`
  }
  let favoritesContainer = ''  
  favorites.forEach((favoriteQuote, index) => {
      favoritesContainer += `<div class="favorite-quote-container">
  <div class="favorite-quote">
    ${favoriteQuote.content} - ${favoriteQuote.author}
  </div>
  <div class="favorite-options">
    <div class="delete-button-container icon-container">
      <img src="images/trash-can.png" alt="delete-button" class="delete-button icon" data-index="${index}">
    </div>
    <div class="share-button-container icon-container">
      <img src="images/share.png" alt="share-button" class="share-button icon" data-index="${index}">
    </div>
  </div>
</div>
  `
})
  return favoritesContainer
}

async function copyToClipboard(quoteObjectToCopy) {
  try {
    const textToCopy = `"${quoteObjectToCopy.content}"- ${quoteObjectToCopy.author}`
    await navigator.clipboard.writeText(textToCopy);
    pushNotification("Quote copied to clipboard!")
    console.log("Text successfully copied to clipboard!");

  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

let timeoutId;
let undo = true;
function pushNotification(message, undo) {
  clearTimeout(timeoutId)
  notificationsContainer.innerHTML = `<div class="notification">${message}. ${undo ? '<span class="undo-button">Undo</span>' : ""} </div>`
  const notification = document.querySelector('.notification')
  timeoutId = setTimeout(() => {
    notification.classList.add('removed')
  }, 2000)

  notification.addEventListener('transitionend', (event) => {
    if (event.target == notification){
      notification.remove()
    }
  }, {once: true})
}
