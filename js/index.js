fetch("./templates/navBar.html")
  .then((response) => response.text())
  .then((content) => {
    const navBarContainer = document.getElementById("navBarContainer");
    navBarContainer.innerHTML = content;
  })
  .catch((error) => console.error("Error fetching two.html:", error));



console.log('Working')