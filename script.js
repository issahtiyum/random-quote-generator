const quotes = [
  {
    content: "The best way to predict the future is to create it.", 
    author: "Peter Drucker", 
    isFavorite: false 
  },
  {
    content: "Do what you can, with what you have, where you are.", 
    author: "Theodore Roosevelt", 
    isFavorite: false 
  },
  {
    content: "Success is not final, failure is not fatal: It is the courage to continue that counts.", 
    author: "Winston Churchill", 
    isFavorite: false 
  },
  {
    content: "Believe you can and you're halfway there.", 
    author: "Theodore Roosevelt", 
    isFavorite: false 
  },
  {
    content: "Your time is limited, so don't waste it living someone else's life.", 
    author: "Steve Jobs", 
    isFavorite: false 
  },
  {
    content: "If life were predictable it would cease to be life, and be without flavor.", 
    author: "Eleanor Roosevelt", 
    isFavorite: false 
  },
  { 
    content: "In the middle of every difficulty lies opportunity.", 
    author: "Albert Einstein", 
    isFavorite: false 
  },
  {
    content: "The only way to do great work is to love what you do.", 
    author: "Steve Jobs", 
    isFavorite: false 
  },
  {
    content: "Happiness is not something ready-made. It comes from your own actions.", 
    author: "Dalai Lama", 
    isFavorite: false 
  },
  {
    content: "It does not matter how slowly you go as long as you do not stop.", 
    author: "Confucius", 
    isFavorite: false 
  },
  {
    content: "You miss 100% of the shots you don't take.", 
    author: "Wayne Gretzky", 
    isFavorite: false 
  },
  {
    content: "Don't wait for opportunity. Create it.", 
    author: "George Bernard Shaw", 
    isFavorite: false 
  },
  {
    content: "What you get by achieving your goals is not as important as what you become by achieving your goals.", 
    author: "Zig Ziglar", 
    isFavorite: false 
  },
  {
    content: "The harder you work for something, the greater you'll feel when you achieve it.", 
    author: "Anonymous", 
    isFavorite: false 
  },
  {
    content: "The journey of a thousand miles begins with a single step.", 
    author: "Lao Tzu", 
    isFavorite: false 
  },
  {
    content: "Success is the sum of small efforts, repeated day in and day out.", 
    author: "Robert Collier", 
    isFavorite: false 
  },
  {
    content: "A little progress each day adds up to big results.", 
    author: "Satya Nani", 
    isFavorite: false 
  },
  {
    content: "The man who moves a mountain begins by carrying away small stones.", 
    author: "Confucius", 
    isFavorite: false 
  },
  {
    content: "Happiness lies in the joy of achievement and the thrill of creative effort.", 
    author: "Franklin D. Roosevelt", 
    isFavorite: false 
  },
  {
    content: "It's not about ideas. It's about making ideas happen.", 
    author: "Scott Belsky", 
    isFavorite: false 
  },
  {
    content: "Do not be afraid of growing slowly, be afraid only of standing still.", 
    author: "Chinese Proverb", 
    isFavorite: false 
  },
  {
    content: "The future belongs to those who believe in the beauty of their dreams.", 
    author: "Eleanor Roosevelt", 
    isFavorite: false 
  },
  {
    content: "The secret to getting ahead is getting started.", 
    author: "Mark Twain", 
    isFavorite: false 
  },
  {
    content: "There are no limits to what you can accomplish, except the limits you place on your own thinking.", 
    author: "Brian Tracy", 
    isFavorite: false 
  },
  {
    content: "Don't judge each day by the harvest you reap, but by the seeds you plant.", 
    author: "Robert Louis Stevenson", 
    isFavorite: false 
  },
  {
    content: "It always seems impossible until it's done.", 
    author: "Nelson Mandela", 
    isFavorite: false 
  },
  {
    content: "Start where you are. Use what you have. Do what you can.", 
    author: "Arthur Ashe", 
    isFavorite: false 
  },
  {
    content: "The only place where success comes before work is in the dictionary.", 
    author: "Vidal Sassoon", 
    isFavorite: false 
  },
  {
    content: "Success is not how high you have climbed, but how you make a positive difference to the world.", 
    author: "Roy T. Bennett", 
    isFavorite: false 
  },
  {
    content: "The key to success is to focus on goals, not obstacles.", 
    author: "Anonymous", 
    isFavorite: false 
  },
  {
    content: "The difference between who you are and who you want to be is what you do.", 
    author: "Anonymous", 
    isFavorite: false 
  },
  {
    content: "The only way to achieve the impossible is to believe it is possible.", 
    author: "Charles Kingsleigh", 
    isFavorite: false 
  },
  {
    content: "The best way to find yourself is to lose yourself in the service of others.", 
    author: "Mahatma Gandhi", 
    isFavorite: false 
  },
  {
    content: "Success is walking from failure to failure with no loss of enthusiasm.", 
    author: "Winston Churchill", 
    isFavorite: false 
  },
  {
    content: "If you can dream it, you can do it.", 
    author: "Walt Disney", 
    isFavorite: false 
  },
  {
    content: "The future depends on what we do in the present.", 
    author: "Mahatma Gandhi", 
    isFavorite: false 
  },
  {
    content: "Success usually comes to those who are too busy to be looking for it.", 
    author: "Henry David Thoreau", 
    isFavorite: false 
  },
  {
    content: "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.", 
    author: "Roy T. Bennett", 
    isFavorite: false 
  },
  {
    content: "You don't have to be great to start, but you have to start to be great.", 
    author: "Zig Ziglar", 
    isFavorite: false 
  },
  {
    content: "Dream big and dare to fail.", 
    author: "Norman Vaughan", 
    isFavorite: false 
  },
  {
    content: "The best revenge is massive success.", 
    author: "Frank Sinatra", 
    isFavorite: false 
  },
  {
    content: "It's not whether you get knocked down, it's whether you get up.", 
    author: "Vince Lombardi", 
    isFavorite: false 
  },
  {
    content: "Everything you can imagine is real.", 
    author: "Pablo Picasso", 
    isFavorite: false 
  },
  {
    content: "Be the change that you wish to see in the world.", 
    author: "Mahatma Gandhi", 
    isFavorite: false 
  },
];



document.querySelector('.quotes-button').addEventListener('click', renderQuoteHTML)

async function renderQuoteHTML() {
  document.querySelector('.quotes-container').innerHTML = await renderQuote();
}

async function renderQuote() {
  const APIQuotes = await fetchQuote()
  if(!APIQuotes.errorMessage){
    return `${APIQuotes.content} - ${APIQuotes.author}`
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

async function likeQuote(params) {
  
}