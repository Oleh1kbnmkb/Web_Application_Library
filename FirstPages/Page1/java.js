const header = document.querySelector("header");

window.addEventListener("scroll", function() {
  // Змінюємо клас sticky тільки коли прокрутили сторінку
  if (this.window.scrollY > 0) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.getElementById("menu-icon");
  const sideMenu = document.getElementById("side-menu");
  const overlay = document.getElementById("overlay");
  const closeIcon = document.getElementById("close-icon");

  // Відкриття меню
  menuIcon.addEventListener("click", () => {
    sideMenu.classList.add("active");
    overlay.style.display = "block";
    document.body.classList.add("no-scroll"); // Показуємо затемнення
    header.classList.add("menu-open"); // Додаємо клас для темного хедера
  });

  // Закриття меню
  closeIcon.addEventListener("click", () => {
    sideMenu.classList.remove("active");
    overlay.style.display = "none";
    document.body.classList.remove("no-scroll");
    header.classList.remove("menu-open"); // Видаляємо клас для хедера
  });

  // Закриття меню при кліку на overlay
  overlay.addEventListener("click", () => {
    sideMenu.classList.remove("active");
    overlay.style.display = "none";
    document.body.classList.remove("no-scroll");
    header.classList.remove("menu-open"); // Видаляємо клас для хедера
  });
});
