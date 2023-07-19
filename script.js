function generate() {
  const quotes = [
    "Life is simple. Life is not complicated. Life is only one thing: Identify yourself",
    "Everything you can imagine is real",
    "Simple life and peaceful mind are very close friends",
    "The truth is rarely pure and never simple.",
    "Normality is a paved road: it’s comfortable to walk but no flowers grow.",
    "Live as if you were to die tomorrow",
    "It always seems impossible until it done",
    "The time is always right to do what is right",
    "Happiness depends upon ourselves."
  ];
  let quotesDisplay = document.getElementById("quotes");
  let randomQuotes = Math.floor(Math.random() * 9);
  quotesDisplay.innerHTML = `"${quotes[randomQuotes]}"`;
}
