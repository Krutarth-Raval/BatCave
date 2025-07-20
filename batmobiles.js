// Fetch equipment data when the page loads
document.addEventListener("DOMContentLoaded", () => {
  const batmobilesData = "batmobiles.json";
  const batmobileContainer = document.querySelector(".all-batmobiles");
  //   let allGadgets = [];
  getBatmobiles(batmobilesData);

  function getBatmobiles(url) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        allBatmobiles = data; // Store all gadgets in a global array
        batmobileData(allBatmobiles); // Display all gadgets initially
      })
      .catch((error) => console.error("Error fetching batmobiles:", error));
  }

  // Display gadgets in the container
  function batmobileData(data) {
    batmobileContainer.innerHTML = "";

    data.forEach((batmobiles) => {
      const { title, description, image, rank } = batmobiles;

      const batmobileEle = document.createElement("div");
      batmobileEle.classList.add("batmobile-box");
      batmobileEle.innerHTML = `
       <p class="batmobile-title"><span>${rank}.</span> ${title}</p>
                    <div class="batmobile-image-box">
                        <img src="${image}" alt="${title}"
                            class="batmobile-image">
                    </div>
                    <p class="batmobile-description">${description}</p>
      `;
      batmobileContainer.appendChild(batmobileEle);
    });
  }
});
