//* star rating  //

const ratingStars = [...document.getElementsByClassName("bi bi-star")];
let rating;
const executeRating = (stars) => {
  const starClassActive = "bi bi-star-fill";
  const starClassInactive = "bi bi-star";
  const starsLength = stars.length;
  let i;

  stars.map((star) => {
    star.onclick = () => {
      i = stars.indexOf(star);

      if (star.className === starClassInactive) {
        for (i; i >= 0; --i) stars[i].className = starClassActive;
        rating = stars.indexOf(star) + 1;

        console.log(rating);
      } else {
        for (i; i < starsLength; ++i) stars[i].className = starClassInactive;
        rating = stars.indexOf(star);
        console.log(rating);
      }
    };
  });
};
executeRating(ratingStars);

//* show/hide review form

const reviewBtn = document.querySelector("#reviewBtn");
reviewBtn.addEventListener("click", () => {
  const reviewForm = document.getElementById("reviewForm");
  if (reviewForm.style.display === "none") {
    reviewForm.style.display = "block";
    reviewBtn.innerHTML = "Close form";
  } else {
    reviewForm.style.display = "none";
    reviewBtn.innerHTML = "Review";
  }
});

//*-------------------------------------

//*------------ reviews -----------------

const reviewContainer = document.getElementById("reviewContainer");
const tittle = document.getElementById("reviewTittle");
const body = document.getElementById("reviewBody");
const submit = document.getElementById("subBtn");
const reviewForm = document.getElementById("reviewForm");
let date = new Date().toDateString();
const id = Math.floor(Math.random() * 10000 + 1);
let allReviews = [];
let review;
// localStorage.setItem("allReviews", JSON.stringify(allReviews));
class Review {
  constructor(id, rating, tittle, body, date = {}) {
    this.rating = rating;
    this.tittle = tittle;
    this.body = body;
    this.date = date;
    this.id = id;
  }
}

submit.addEventListener("click", () => {
  const savedTittle = tittle.value;
  const savedBody = body.value;
  if (savedTittle || savedBody) {
    let review = new Review(id, rating, savedTittle, savedBody, date);
    allReviews = JSON.parse(localStorage.getItem("allReviews") || "[]");
    allReviews.push(review);
    localStorage.setItem("allReviews", JSON.stringify(allReviews));
    reviewForm.reset();

    let icon = `<i class="bi bi-star-fill"></i>`;
    if (review.rating === 1) {
      icon = icon;
    } else if (review.rating === 2) {
      icon = icon + icon;
    } else if (review.rating === 3) {
      icon = icon + icon + icon;
    } else if (review.rating === 4) {
      icon = icon + icon + icon + icon;
    } else if (review.rating === 5) {
      icon = icon + icon + icon + icon + icon;
    } else if (review.rating === 0 || "underfined") {
      icon = ``;
    }

    reviewContainer.innerHTML += ` 
      <div class="list-group-item py-2">
     ${icon}
      <h5 class="mb-1">${review.tittle}</h5>
      <p class="mb-1">${review.body}</p>
      <p class="mb-1 muted">${date}</p>
      </div>`;
  } else {
    alert("Enter a review");
  }

  console.log(allReviews);
});

// * Loop through the array to display the items

function loadReviews() {
  allReviews = JSON.parse(localStorage.getItem("allReviews") || "[]");

  allReviews.forEach((review) => {
    let icon = `<i class="bi bi-star-fill"></i>`;
    if (review.rating === 1) {
      icon = icon;
    } else if (review.rating === 2) {
      icon = icon + icon;
    } else if (review.rating === 3) {
      icon = icon + icon + icon;
    } else if (review.rating === 4) {
      icon = icon + icon + icon + icon;
    } else if (review.rating === 5) {
      icon = icon + icon + icon + icon + icon;
    } else if (review.rating === 0 || "underfined") {
      icon = ``;
    }
    reviewContainer.innerHTML += ` 
    <div class="list-group-item py-2">
     ${icon}
    <h5 class="mb-1">${review.tittle}</h5>
    <p class="mb-1">${review.body}</p>
    <p class="mb-1 muted">${date}</p>
    </div>`;
  });
}
loadReviews();
