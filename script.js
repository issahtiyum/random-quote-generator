import { quotes, Quote } from "./data.js";

document.querySelector('.quotes-button').addEventListener('click', async () => {
  const quoteObject = await renderQuote();
  document.querySelector('.quotes-container').innerHTML = `${quoteObject.content} - ${quoteObject.author}`
})

async function renderQuote() {
  const APIQuote = await fetchQuote()
  if(!APIQuote.errorMessage){
    return new Quote(APIQuote)
  }
  const randomNumber = Math.floor(Math.random() * quotes.length)
  return quotes[randomNumber]
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