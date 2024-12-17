export class Quote {
  content;
  author;

  constructor(quoteDetails) {
    this.content = quoteDetails.content;
    this.author = quoteDetails.author;
  }  

  isFavorite = favorites.some(
    (quote) => quote.content == this.content && quote.author == this.author
  ); 
 
  renderQuote() {
    return {
      content: this.content,
      author: this.author,
      isFavorite: this.isFavorite
    }
  } 
 
  toggleLike() {
   if (this.isFavorite){
    this.isFavorite = false;
    this.removeFromFavorites(favorites);
   } else {
    this.isFavorite = true;
    this.addToFavorites(favorites)
   }
  }
 
  addToFavorites(favorites) {
    favorites.unshift(this.renderQuote())
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }
 
  removeFromFavorites(favorites) {
    const index = favorites.findIndex(
      (quote) => quote.content == this.content && quote.author == this.author
    )
    favorites.splice(index, 1)
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }
 }
 
 export const favorites = JSON.parse(localStorage.getItem('favorites')) || []
  
 export const quotes = [
  {
    content: "The best way to predict the future is to create it.", 
    author: "Peter Drucker", 
  },
  {
    content: "Do what you can, with what you have, where you are.", 
    author: "Theodore Roosevelt", 
  },
  {
    content: "Success is not final, failure is not fatal: It is the courage to continue that counts.", 
    author: "Winston Churchill", 
  },
  {
    content: "Believe you can and you're halfway there.", 
    author: "Theodore Roosevelt", 
  },
  {
    content: "Your time is limited, so don't waste it living someone else's life.", 
    author: "Steve Jobs", 
  },
  {
    content: "If life were predictable it would cease to be life, and be without flavor.", 
    author: "Eleanor Roosevelt", 
  },
  { 
    content: "In the middle of every difficulty lies opportunity.", 
    author: "Albert Einstein", 
  },
  {
    content: "The only way to do great work is to love what you do.", 
    author: "Steve Jobs", 
  },
  {
    content: "Happiness is not something ready-made. It comes from your own actions.", 
    author: "Dalai Lama", 
  },
  {
    content: "It does not matter how slowly you go as long as you do not stop.", 
    author: "Confucius", 
  },
  {
    content: "You miss 100% of the shots you don't take.", 
    author: "Wayne Gretzky", 
  },
  {
    content: "Don't wait for opportunity. Create it.", 
    author: "George Bernard Shaw", 
  },
  {
    content: "What you get by achieving your goals is not as important as what you become by achieving your goals.", 
    author: "Zig Ziglar", 
  },
  {
    content: "The harder you work for something, the greater you'll feel when you achieve it.", 
    author: "Anonymous", 
  },
  {
    content: "The journey of a thousand miles begins with a single step.", 
    author: "Lao Tzu", 
  },
  {
    content: "Success is the sum of small efforts, repeated day in and day out.", 
    author: "Robert Collier", 
  },
  {
    content: "A little progress each day adds up to big results.", 
    author: "Satya Nani", 
  },
  {
    content: "The man who moves a mountain begins by carrying away small stones.", 
    author: "Confucius", 
  },
  {
    content: "Happiness lies in the joy of achievement and the thrill of creative effort.", 
    author: "Franklin D. Roosevelt", 
  },
  {
    content: "It's not about ideas. It's about making ideas happen.", 
    author: "Scott Belsky", 
  },
  {
    content: "Do not be afraid of growing slowly, be afraid only of standing still.", 
    author: "Chinese Proverb", 
  },
  {
    content: "The future belongs to those who believe in the beauty of their dreams.", 
    author: "Eleanor Roosevelt", 
  },
  {
    content: "The secret to getting ahead is getting started.", 
    author: "Mark Twain", 
  },
  {
    content: "There are no limits to what you can accomplish, except the limits you place on your own thinking.", 
    author: "Brian Tracy", 
  },
  {
    content: "Don't judge each day by the harvest you reap, but by the seeds you plant.", 
    author: "Robert Louis Stevenson", 
  },
  {
    content: "It always seems impossible until it's done.", 
    author: "Nelson Mandela", 
  },
  {
    content: "Start where you are. Use what you have. Do what you can.", 
    author: "Arthur Ashe", 
  },
  {
    content: "The only place where success comes before work is in the dictionary.", 
    author: "Vidal Sassoon", 
  },
  {
    content: "Success is not how high you have climbed, but how you make a positive difference to the world.", 
    author: "Roy T. Bennett", 
  },
  {
    content: "The key to success is to focus on goals, not obstacles.", 
    author: "Anonymous", 
  },
  {
    content: "The difference between who you are and who you want to be is what you do.", 
    author: "Anonymous", 
  },
  {
    content: "The only way to achieve the impossible is to believe it is possible.", 
    author: "Charles Kingsleigh", 
  },
  {
    content: "The best way to find yourself is to lose yourself in the service of others.", 
    author: "Mahatma Gandhi", 
  },
  {
    content: "Success is walking from failure to failure with no loss of enthusiasm.", 
    author: "Winston Churchill", 
  },
  {
    content: "If you can dream it, you can do it.", 
    author: "Walt Disney", 
  },
  {
    content: "The future depends on what we do in the present.", 
    author: "Mahatma Gandhi", 
  },
  {
    content: "Success usually comes to those who are too busy to be looking for it.", 
    author: "Henry David Thoreau", 
  },
  {
    content: "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.", 
    author: "Roy T. Bennett", 
  },
  {
    content: "You don't have to be great to start, but you have to start to be great.", 
    author: "Zig Ziglar", 
  },
  {
    content: "Dream big and dare to fail.", 
    author: "Norman Vaughan", 
  },
  {
    content: "The best revenge is massive success.", 
    author: "Frank Sinatra", 
  },
  {
    content: "It's not whether you get knocked down, it's whether you get up.", 
    author: "Vince Lombardi", 
  },
  {
    content: "Everything you can imagine is real.", 
    author: "Pablo Picasso", 
  },
  {
    content: "Be the change that you wish to see in the world.", 
    author: "Mahatma Gandhi", 
  },
].map(quoteDetails => new Quote(quoteDetails))
 