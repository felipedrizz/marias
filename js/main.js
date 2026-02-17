fetch("data/links.json")
  .then(response => response.json())
  .then(links => {
    const container = document.getElementById("links");

    links.forEach(link => {
      const a = document.createElement("a");
      a.href = link.url;
      a.textContent = link.title;
      a.className = "link-btn";
      a.target = "_blank";
      a.rel = "noopener noreferrer";

      container.appendChild(a);
    });
  });
