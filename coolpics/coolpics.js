const button = document.querySelector(".button1");

function toggleMenu() {
    const menu = document.querySelector(".links");
    menu.classList.toggle("hide");
}
button.addEventListener("click", toggleMenu);

function handleResize(){
    const menu = document.querySelector(".links");
    if (window.innerWidth > 1000) {
        menu.classList.remove("hide");
    } else {
        menu.classList.add("hide");
    }
}

handleResize();
window.addEventListener("resize", handleResize);

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
      <button class="close-viewer">X</button>
      <img src="${pic}" alt="${alt}">
      </div>`;
  }

function viewHandler(event) {
    const clickedElement = event.target;

    const src = clickedElement.src;
    const alt = clickedElement.alt;

    const parts = src.split("-");

    const newSrc = parts[0] + "-full.jpeg";

    const viewerHTML = viewerTemplate(newSrc, alt);
    document.body.insertAdjacentHTML("afterbegin", viewerHTML);

    document.querySelector(".close-viewer").addEventListener("click", closeViewer);
}

function closeViewer() {
    const viewer = document.querySelector(".viewer");
    if (viewer) {
        viewer.remove();
    }
}

document.querySelector(".gallery").addEventListener("click", viewHandler);