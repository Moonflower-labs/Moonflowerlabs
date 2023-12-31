window.location.href = "https://portfolio-42z.pages.dev/";
// //* fetching news
// const newsApi =
//   "https://newsdata.io/api/1/news?apikey=pub_2558436bc412f72d26d9e8b9c46242bccbde2&q=Software%20crypto&language=en&category=technology";

// async function getNews() {
//   const response = await fetch(newsApi);
//   const newsData = await response.json();
//   return newsData;
// }

// const newsDiv = document.querySelector(".news");

// document.addEventListener("DOMContentLoaded", async () => {
//   let newData1 = [];
//   newData1 = await getNews();
//   console.log(newData1);

//   const newOut = newData1.results;

//   const newsItems = newOut.map(({ title, creator, pubDate }) => {
//     const newsItem = document.createElement("div");
//     newsItem.classList.add("display-4", "mx-5");
//     if (creator === null) {
//       newsItem.innerHTML = `${title}, ${pubDate}`;
//     } else {
//       newsItem.innerHTML = `${title}, ${creator}, ${pubDate}`;
//     }

//     return newsItem;
//   });

document.querySelector(".card").addEventListener("click", function () {
  // Toggle the 'flipped' class on the card element
  this.classList.toggle("flipped");
});

window.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    const date = new Date();
    yearSpan.textContent = date.getFullYear();
  }
});
