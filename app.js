const form = document.querySelector("form");
const input = document.querySelector('input[type="text"]');
const imageContainer = document.querySelector(".image-container");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const query = input.value.trim();

  fetch(
    `https://api.unsplash.com/search/photos?query=${query}&client_id=OsfpobKj6Gdb5Wtu5r3CVOshpzJI6-sLana0xZJ99P0`
  )
    .then((response) => response.json())
    .then((data) => {
      const images = data.results
        .map(
          (result) => `
        <div>
          <img src="${result.urls.regular}" alt="${result.alt_description}">
          <a href="${result.urls.regular}" download>Download</a>
        </div>
      `
        )
        .join("");

      imageContainer.innerHTML = images;
    })
    .catch((error) => console.error(error));
});
