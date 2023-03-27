// Navbar
const menu = document.querySelector(".hamburger-menu");
const navList = document.querySelector(".nav-list");
const navLink = document.querySelectorAll(".nav-link");

menu.addEventListener("click", () => {
  navList.classList.toggle("change");
});

navLink.forEach((link) => {
  link.addEventListener("click", (e) => {
    console.log(e.target);
    navList.classList.toggle("change");
  });
});


// Carousel
const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0],
arrowIcons = document.querySelectorAll(".carousel-wrapper i");

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 12; 
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
    });
});


// Services
const serviceDesc = document.querySelectorAll(".service-desc");

serviceDesc.forEach(desc => {
    desc.textContent = desc.textContent.substring(0, 75) + "...";
});


// Notification
const notification = document.querySelector(".notification");
const contactForm = document.querySelector("#contact form");
const inputs = document.querySelectorAll(".form-control");
const closeBtn = document.querySelector(".close");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  inputs.forEach(input => {
    input.value = "";
  });

  notification.style.display = "flex";
  setTimeout(()=>{
    notification.style.display = "none";
  }, 4000);
});

closeBtn.addEventListener("click", () => {
  notification.style.display = "none";
});


// Modal
const openModalBtn = document.querySelector(".btn-get-started");
const closeModalBtns = document.querySelectorAll(".close-modal");
const submitModal = document.querySelector("#modal form");
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");

openModalBtn.addEventListener("click", () => {
    openModal(modal);
});

closeModalBtns.forEach(button => {
    button.addEventListener("click", () => {
        closeModal(modal);
    });
})

overlay.addEventListener("click", () => {
    closeModal(modal);
})


submitModal.addEventListener("submit", (e) => {
    e.preventDefault();
    notification.innerText = "Appreciate your interest! Will get to you very soon..";
    notification.style.display = "flex";
    setTimeout(()=>{
      notification.style.display = "none";
      notification.innerText = "Thanks for Connecting! Will get to you soon..";
    }, 4000);

    closeModal(modal);
});


function openModal(modal) {
    if (modal == null) return;
    modal.classList.add("active");
    overlay.classList.add("active");
}

function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove("active");
    overlay.classList.remove("active");
}
