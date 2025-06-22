document.addEventListener("DOMContentLoaded", () => {
    const headerContainer = document.getElementById("header-container");
    if (headerContainer) {
      fetch("components/header.html")
        .then(response => response.text())
        .then(data => {
          headerContainer.innerHTML = data;
        })
        .catch(error => console.error("Error al cargar el header:", error));
    }
  });
  