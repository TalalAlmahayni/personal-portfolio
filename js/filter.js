document.addEventListener("DOMContentLoaded", function () {
  const filterInput = document.getElementById("filter-input");
  const noResults = document.getElementById("no-results");
  const cards = document.querySelectorAll(".project-card");

  filterInput.addEventListener("input", function () {
    const query = this.value.toLowerCase().trim();
    let visibleCount = 0;

    cards.forEach(function (card) {
      const title = card.querySelector(".card-title").textContent.toLowerCase();
      const description = card
        .querySelector(".card-description")
        .textContent.toLowerCase();

      if (title.includes(query) || description.includes(query)) {
        card.style.display = "";
        visibleCount++;
      } else {
        card.style.display = "none";
      }
    });
    if (visibleCount === 0) {
      noResults.style.display = "block";
    } else {
      noResults.style.display = "none";
    }
  });
});
