const quotes = [
  "The best way to predict the future is to create it. - Peter Drucker",
  "Do what you can, with what you have, where you are. - Theodore Roosevelt",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
  "If life were predictable it would cease to be life, and be without flavor. - Eleanor Roosevelt",
  "In the middle of every difficulty lies opportunity. - Albert Einstein",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Happiness is not something ready-made. It comes from your own actions. - Dalai Lama",
  "It does not matter how slowly you go as long as you do not stop. - Confucius",
  "You miss 100% of the shots you don't take. - Wayne Gretzky",
  "Don't wait for opportunity. Create it. - George Bernard Shaw",
  "What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar",
  "The harder you work for something, the greater you'll feel when you achieve it. - Anonymous",
  "The journey of a thousand miles begins with a single step. - Lao Tzu",
  "Success is the sum of small efforts, repeated day in and day out. - Robert Collier",
  "A little progress each day adds up to big results. - Satya Nani",
  "The man who moves a mountain begins by carrying away small stones. - Confucius",
  "Happiness lies in the joy of achievement and the thrill of creative effort. - Franklin D. Roosevelt",
  "It's not about ideas. It's about making ideas happen. - Scott Belsky",
  "Do not be afraid of growing slowly, be afraid only of standing still. - Chinese Proverb",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "The secret to getting ahead is getting started. - Mark Twain",
  "There are no limits to what you can accomplish, except the limits you place on your own thinking. - Brian Tracy",
  "Don't judge each day by the harvest you reap, but by the seeds you plant. - Robert Louis Stevenson",
  "It always seems impossible until it's done. - Nelson Mandela",
  "Start where you are. Use what you have. Do what you can. - Arthur Ashe",
  "The only place where success comes before work is in the dictionary. - Vidal Sassoon",
  "Success is not how high you have climbed, but how you make a positive difference to the world. - Roy T. Bennett",
  "The key to success is to focus on goals, not obstacles. - Anonymous",
  "The difference between who you are and who you want to be is what you do. - Anonymous",
  "The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh",
  "The best way to find yourself is to lose yourself in the service of others. - Mahatma Gandhi",
  "Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill",
  "If you can dream it, you can do it. - Walt Disney",
  "The future depends on what we do in the present. - Mahatma Gandhi",
  "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
  "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart. - Roy T. Bennett",
  "You don't have to be great to start, but you have to start to be great. - Zig Ziglar",
  "Dream big and dare to fail. - Norman Vaughan",
  "The best revenge is massive success. - Frank Sinatra",
  "It's not whether you get knocked down, it's whether you get up. - Vince Lombardi",
  "Everything you can imagine is real. - Pablo Picasso",
  "Be the change that you wish to see in the world. - Mahatma Gandhi",
  "You don't have to be perfect to be amazing. - Anonymous",
  "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "Perseverance is not a long race; it is many short races one after the other. - Walter Elliot",
  "A goal without a plan is just a wish. - Antoine de Saint-Exupéry",
  "Hardships often prepare ordinary people for an extraordinary destiny. - C.S. Lewis",
  "What lies behind us and what lies before us are tiny matters compared to what lies within us. - Ralph Waldo Emerson",
  "Effort only fully releases its reward after a person refuses to quit. - Napoleon Hill",
  "Strength doesn't come from what you can do. It comes from overcoming the things you once thought you couldn't. - Rikki Rogers",
  "It's not about being the best. It's about being better than you were yesterday. - Anonymous",
  "Do what you love and the money will follow. - Marsha Sinetar",
  "Don't let what you cannot do interfere with what you can do. - John Wooden",
  "Opportunities don't happen. You create them. - Chris Grosser",
  "Success isn't about how much money you make; it's about the difference you make in people's lives. - Michelle Obama",
  "The more you learn, the more you earn. - Warren Buffett",
  "Chase the vision, not the money; the money will end up following you. - Tony Hsieh",
  "Your limitation—it's only your imagination. - Anonymous",
  "Push yourself, because no one else is going to do it for you. - Anonymous",
  "Great things never come from comfort zones. - Anonymous",
  "Dream it. Wish it. Do it. - Anonymous",
  "Success doesn't just find you. You have to go out and get it. - Anonymous",
  "The harder you work for something, the greater you'll feel when you achieve it. - Anonymous",
  "Don't stop when you're tired. Stop when you're done. - Anonymous",
  "Wake up with determination. Go to bed with satisfaction. - Anonymous",
  "Do something today that your future self will thank you for. - Anonymous",
  "Little things make big days. - Anonymous",
  "It's going to be hard, but hard does not mean impossible. - Anonymous",
  "Don't wait for opportunity. Create it. - Anonymous",
  "Sometimes we're tested not to show our weaknesses, but to discover our strengths. - Anonymous",
  "The key to success is to start before you're ready. - Marie Forleo",
  "Action is the foundational key to all success. - Pablo Picasso",
  "Don't limit your challenges. Challenge your limits. - Anonymous",
  "Focus on being productive instead of busy. - Tim Ferriss",
  "The way to get started is to quit talking and begin doing. - Walt Disney",
  "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson",
  "It does not matter how many times you get knocked down, but how many times you get up. - Vince Lombardi",
  "A winner is a dreamer who never gives up. - Nelson Mandela",
  "Opportunities are usually disguised as hard work, so most people don't recognize them. - Ann Landers",
  "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it. - Jordan Belfort"
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

renderQuoteHTML()