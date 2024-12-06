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
  "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. - Steve Jobs",
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
  "Start where you are. Use what you have. Do what you can. - Arthur Ashe",
  "If you can dream it, you can do it. - Walt Disney",
  "The future depends on what we do in the present. - Mahatma Gandhi",
  "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
  "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart. - Roy T. Bennett",
  "You don't have to be great to start, but you have to start to be great. - Zig Ziglar",
  "Dream big and dare to fail. - Norman Vaughan",
  "The best revenge is massive success. - Frank Sinatra",
  "It's not whether you get knocked down, it's whether you get up. - Vince Lombardi",
  "Everything you can imagine is real. - Pablo Picasso",
  "Success is the ability to go from one failure to another with no loss of enthusiasm. - Winston Churchill",
  "Be the change that you wish to see in the world. - Mahatma Gandhi",
  "You don't have to be perfect to be amazing. - Anonymous",
  "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt"
];


document.querySelector('.quotes-button').addEventListener('click', renderQuoteHTML)

function renderQuote() {
  const randomNumber = Math.floor(Math.random() * quotes.length)
  return quotes[randomNumber]
}

function renderQuoteHTML() {
  document.querySelector('.quotes-container').innerHTML = renderQuote()
}

renderQuoteHTML()