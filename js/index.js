fetch("./templates/navBar.html")
  .then((response) => response.text())
  .then((content) => {
    const navBarContainer = document.getElementById("navBarContainer");
    navBarContainer.innerHTML = content;
  })
  .catch((error) => console.error("Error fetching two.html:", error));


fetch("./templates/aboutMe.html")
  .then((response) => response.text())
  .then((content) => {
    const aboutMe = document.getElementById("aboutMe");
    aboutMe.innerHTML = content;
  })
  .catch((error) => console.error("Error fetching two.html:", error));aboutMe;


fetch("./templates/aboutMainContent.html")
  .then((response) => response.text())
  .then((content) => {
    const aboutMainContent = document.getElementById("aboutMainContent");
    aboutMainContent.innerHTML = content;
  })
  .catch((error) => console.error("Error fetching two.html:", error));


console.log('Working')