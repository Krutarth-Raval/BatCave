const movieData = "movies.json";
const listContainer = document.querySelector(".batman-movie-container");
const listContainer2 = document.querySelector(
  ".batman-animated-movie-container"
);

document.addEventListener("DOMContentLoaded", () => {
  getMovies(movieData);
});
function getMovies(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      LiveActionMovies(data);
      animatedBatmanMovies(data);
    })
    .catch((error) => console.error("Error fetching movies:", error));
}

function LiveActionMovies(data) {
  listContainer.innerHTML = "";

  data.slice(0, 12).forEach((movie) => {
    const { title, poster, id } = movie;

    const movieElement = document.createElement("div");
    movieElement.classList.add("movie-box");
    movieElement.innerHTML = `
      <a href="moviedetails.html?id=${id}" target="_parent" rel="noopener noreferrer">
        <div class="movie-poster-box">
          <img src="${poster}" alt="${title}" class="movie-poster">
        </div>
        <p class="movie-title-name">${title}</p>
      </a>
    `;
    listContainer.appendChild(movieElement);
  });
}

function animatedBatmanMovies(data) {
  listContainer2.innerHTML = "";

  data.splice(12).forEach((movie) => {
    const { title, poster, id } = movie;

    const movieElement2 = document.createElement("div");
    movieElement2.classList.add("movie-box");
    movieElement2.innerHTML = `
      <a href="moviedetails.html?id=${id}" target="_parent" rel="noopener noreferrer">
        <div class="movie-poster-box">
          <img src="${poster}" alt="${title}" class="movie-poster">
        </div>
        <p class="movie-title-name">${title}</p>
      </a>
    `;
    listContainer2.appendChild(movieElement2);
  });
}
