document.addEventListener("DOMContentLoaded", function () {
  const blogList = document.getElementById("blog-list");
  fetch("data/posts.json")
    .then((response) => response.json())
    .then((posts) => {
      posts.sort(function (a, b) {
        return new Date(b.date) - new Date(a.date);
      });
      posts.forEach((post, index) => {
        const postElement = document.createElement("div");
        const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
        const latestBadge =
          index === 0 ? "<span class='latest-badge'>Latest Post</span>" : "";
        postElement.classList.add("post-card");
        postElement.innerHTML = `
             <h2>${post.title} ${latestBadge}</h2>
             <p class="post-meta">${formattedDate} | ${post.category}</p>
             <p>${post.summary}</p>
             <p>${post.content}</p>
             `;
        blogList.appendChild(postElement);
      });
    })
    .catch((error) => console.error("Error loading posts:", error));
});
