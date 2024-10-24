document.getElementById("trickyButton").addEventListener("click", function () {
  // Get the container's dimensions
  const container = document.querySelector(".container");
  const containerWidth = container.offsetWidth;
  const containerHeight = container.offsetHeight;

  // Get random new positions for the button
  const randomX = Math.floor(
    Math.random() * (containerWidth - this.offsetWidth)
  );
  const randomY = Math.floor(
    Math.random() * (containerHeight - this.offsetHeight)
  );

  // Apply the new position
  this.style.left = `${randomX}px`;
  this.style.top = `${randomY}px`;
});

document
  .getElementById("normalButton")
  .addEventListener("click", function () {
    const currentPage = window.location.pathname;

    if (currentPage.includes("index.html")) {
      window.location.href = "page2.html";
    } else if (currentPage.includes("page2.html")) {
      window.location.href = "page3.html";
    
    }
  });