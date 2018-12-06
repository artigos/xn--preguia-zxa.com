var quotes = [
  "Preguiça? Vá trabalhar, vagabund*.",
  "Chega de choro. Vá trabalhar. Vá produzir, comunista."
];

function getQuote () {
  return quotes[Math.floor(Math.random() * (quotes.length-1))];
}

function setQuote() {
  document.querySelector("#quote").textContent = getQuote();
  document.querySelector("#title").textContent = getQuote();
}

window.onload = setQuote;
