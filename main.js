import "./style.css";

const app = document.getElementById("app");
const RANDOM_QUOTE_API = "https://api.quotable.io/quotes/random";
const refreshButton = document.getElementById("btn");

async function fetchQuote() {
  try {
    const response = await fetch(RANDOM_QUOTE_API);
    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error(error);
  }
}
fetchQuote()
  .then(
    (data) =>
      (document.body.innerHTML = `<img src="quotation.png" /><h1>${data[0].author}</h1><p>${data[0].content}</p> <button id=btn onclick="location.reload()">generate`)
  )
  .catch((error) => console.error(error));
