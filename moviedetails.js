// Function to get the movie ID from the URL
function getMovieIdFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("id");
}

// Fetch the movies.json file and display the selected movie details
fetch("movies.json")
  .then((response) => response.json())
  .then((movies) => {
    const movieId = getMovieIdFromURL();
    const movie = movies.find((m) => m.id == movieId);
    // console.log(movies);

    if (movie) {
      displayMovieInfo(movie);
    } else {
      console.error("Movie not found");
    }
  })
  .catch((error) => console.error("Error fetching movie data:", error));

// Function to display the movie details on the page
const detailContainer = document.querySelector(".movie-detail-container");

function displayMovieInfo(movie) {
  detailContainer.innerHTML = "";
  // Destructuring the movie object
  const {
    title,
    year,
    poster,
    imdbRating,
    overview,
    trailerKey,
    runtime,
    genres,
    storyLine,
    streams,
  } = movie;

  // Generate genres HTML if genres are available
  let genresHTML = "";
  if (genres && genres.length > 0) {
    genres.forEach((genre) => {
      genresHTML += `<span>${genre}</span>`;
    });
  }

  const movieElement = document.createElement("div");
  movieElement.classList.add("movie-details-poster");
  // Inject movie details dynamically
  movieElement.innerHTML = `
  <div class="movie-poster-image">
  <img src="${poster}" alt="${title} Poster" class="movie-image-poster">
  </div>
  <div class="movie-details">
  <p class="movie-detail-title">${title}</p>
  <p class="movie-detail-year">${year}</p>
  
  <div class="other-details">
  <div class="hour-genres">
  <p class="movie-detail-hour">${runtime ? runtime : "N/A"}</p>
  <p class="movie-detail-genres">
  ${genresHTML}
  </p>
  </div>
  
  <p class="movie-detail-rating">
  <i class="fa fa-star STAR"></i> ${imdbRating} <span>IMDb</span>
  </p>
  <p class="movie-detail-overview">
  ${overview}
  </p>
  
  <p class="movie-trailer">
  <a href="https://www.youtube.com/watch?v=${trailerKey}" target="_blank" rel="noopener noreferrer">
  Watch Trailer <i class="fa-solid fa-play PLAY"></i>
  </a>
  </p>
  </div>
  </div>
  `;
  detailContainer.appendChild(movieElement);

  const movieElement2 = document.createElement("div");
  movieElement2.classList.add("movie-story-line");
  movieElement2.innerHTML = `
    <p class="story-line">Story Line</p>
                <div class="story">
                    <p class="story-text">
                    ${storyLine}
                    </p>
                </div>
    `;
  detailContainer.appendChild(movieElement2);

  // stream -----------------

  if (streams && streams.length > 0) {
    const streamContainer = document.createElement("div");
    streamContainer.classList.add("stream-container");

    const watchOn = `<p class="watch-on">Watch On</p>`;
    streamContainer.innerHTML = watchOn;

    const streamingBox = document.createElement("div");
    streamingBox.classList.add("streaming-box");

    streams.forEach((stream) => {
      const streamBox = document.createElement("div");
      streamBox.classList.add("stream-box-1");

      streamBox.innerHTML = `
        <a href="${stream.link}" target="_blank" rel="noopener noreferrer">
          <img src="${stream.image}" alt="${stream.name}" class="stream-image">
        </a>
        <p class="stream-name">${stream.name}</p>
      `;

      streamingBox.appendChild(streamBox);
    });

    streamContainer.appendChild(streamingBox);

    // Append streaming container to the detail container
    detailContainer.appendChild(streamContainer);
  }
  // Append streaming services info to the container
}

// Update the story line if available
