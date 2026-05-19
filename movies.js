const movieData = "movies.json";
const listContainer = document.querySelector(".batman-movie-container");
const listContainer2 = document.querySelector(
  ".batman-animated-movie-container"
);

document.addEventListener("DOMContentLoaded", () => {
  getMovies(movieData);
});
function getMovies(url) {
  if (window.moviesData) {
    LiveActionMovies(window.moviesData);
    animatedBatmanMovies(window.moviesData);
  } else {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        LiveActionMovies(data);
        animatedBatmanMovies(data);
      })
      .catch((error) => console.error("Error fetching movies:", error));
  }
}

function LiveActionMovies(data) {
  listContainer.innerHTML = "";

  data.slice(0, 12).forEach((movie) => {
    const { title, poster, id, year, imdbRating } = movie;

    const movieElement = document.createElement("div");
    movieElement.classList.add("movie-box");
    movieElement.innerHTML = `
      <a href="moviedetails.html?id=${id}" target="_parent" rel="noopener noreferrer">
        <div class="movie-poster-box">
          <div class="movie-corner-bracket top-left"></div>
          <div class="movie-corner-bracket top-right"></div>
          <div class="movie-corner-bracket bottom-left"></div>
          <div class="movie-corner-bracket bottom-right"></div>
          <div class="movie-scanner-line"></div>
          <img src="${poster}" alt="${title}" class="movie-poster">
          <div class="movie-rating-badge"><i class="fa-solid fa-star"></i> ${imdbRating || '8.0'}</div>
        </div>
        <div class="movie-info-box">
          <p class="movie-title-name">${title}</p>
          <div class="movie-meta-row">
            <span class="movie-year">[ ${year || 'N/A'} ]</span>
            <span class="movie-system-status">// SECURED</span>
          </div>
        </div>
      </a>
    `;
    listContainer.appendChild(movieElement);
  });
}

function animatedBatmanMovies(data) {
  listContainer2.innerHTML = "";

  data.slice(12).forEach((movie) => {
    const { title, poster, id, year, imdbRating } = movie;

    const movieElement2 = document.createElement("div");
    movieElement2.classList.add("movie-box");
    movieElement2.innerHTML = `
      <a href="moviedetails.html?id=${id}" target="_parent" rel="noopener noreferrer">
        <div class="movie-poster-box">
          <div class="movie-corner-bracket top-left"></div>
          <div class="movie-corner-bracket top-right"></div>
          <div class="movie-corner-bracket bottom-left"></div>
          <div class="movie-corner-bracket bottom-right"></div>
          <div class="movie-scanner-line"></div>
          <img src="${poster}" alt="${title}" class="movie-poster">
          <div class="movie-rating-badge"><i class="fa-solid fa-star"></i> ${imdbRating || '8.0'}</div>
        </div>
        <div class="movie-info-box">
          <p class="movie-title-name">${title}</p>
          <div class="movie-meta-row">
            <span class="movie-year">[ ${year || 'N/A'} ]</span>
            <span class="movie-system-status">// SECURED</span>
          </div>
        </div>
      </a>
    `;
    listContainer2.appendChild(movieElement2);
  });
}
