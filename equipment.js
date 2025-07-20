// Fetch equipment data when the page loads
document.addEventListener("DOMContentLoaded", () => {
  const equipmentData = "equipment.json";
  const gadgetContainer = document.querySelector(".all-gadget-container");
  //   let allGadgets = [];
  getEquipment(equipmentData);

  function getEquipment(url) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        allGadgets = data; // Store all gadgets in a global array
        gadgetData(allGadgets); // Display all gadgets initially
      })
      .catch((error) => console.error("Error fetching equipment:", error));
  }

  // Display gadgets in the container
  function gadgetData(data) {
    gadgetContainer.innerHTML = "";

    data.forEach((gadget) => {
      const { name, description, image } = gadget;

      const gadgetElement = document.createElement("div");
      gadgetElement.classList.add("gadget-box");
      gadgetElement.innerHTML = `
      <p class="gadget-title">${name}</p>
      <div class="gadget-image-box">
        <img src=${image} alt="${name}" class="gadget-image">
      </div>
      <p class="gadget-description">${description}</p>
    `;
      gadgetContainer.appendChild(gadgetElement);
    });
  }
});
