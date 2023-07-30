const quotes = [
  "All our dreams can come true; if we have the courage to pursue them. - Walt Disney",
  "However difficult life may seem, there is always something you can do and succeed at. - Stephen Hawking" ,
  "People begin to become successful the minute they decide to be. - Harvey MacKay" ,
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "In the middle of difficulty lies opportunity. - Albert Einstein",
  "The best way to predict the future is to create it. - Peter Drucker",
  "It does not matter how slowly you go as long as you do not stop. - Confucius"
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quoteElement = document.getElementById("quote");
  quoteElement.textContent = quotes[randomIndex];
}

function changeBackgroundColor() {
  const selectElement = document.getElementById("bgColorSelect");
  const selectedColor = selectElement.value;
  document.body.style.backgroundColor = selectedColor;
}

const generateBtn = document.getElementById("generateBtn");
generateBtn.addEventListener("click", generateQuote);

const bgColorSelect = document.getElementById("bgColorSelect");
bgColorSelect.addEventListener("change", changeBackgroundColor);
