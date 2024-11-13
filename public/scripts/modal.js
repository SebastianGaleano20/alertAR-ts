// document.addEventListener("DOMContentLoaded", () => {
//   // Iniciar Sesión
//   const openLoginModalBtn = document.getElementById("openLoginModalBtn");
//   const closeLoginModalBtn = document.getElementById("closeLoginModalBtn");
//   const loginModal = document.getElementById("loginModal");

//   openLoginModalBtn.addEventListener("click", () => {
//     loginModal.classList.remove("hidden");
//   });

//   closeLoginModalBtn.addEventListener("click", () => {
//     loginModal.classList.add("hidden");
//   });

//   // window.addEventListener("click", (event) => {
//   //   if (event.target === loginModal) {
//   //     loginModal.classList.add("hidden");
//   //   }
//   // });

//   // Registrarse
//   const openRegisterModalBtn = document.getElementById("openRegisterModalBtn");
//   const closeRegisterModalBtn = document.getElementById(
//     "closeRegisterModalBtn"
//   );
//   const registerModal = document.getElementById("registerModal");

//   openRegisterModalBtn.addEventListener("click", () => {
//     registerModal.classList.remove("hidden");
//   });

//   closeRegisterModalBtn.addEventListener("click", () => {
//     registerModal.classList.add("hidden");
//   });

//   // window.addEventListener("click", (event) => {
//   //   if (event.target === registerModal) {
//   //     registerModal.classList.add("hidden");
//   //   }
//   // });
// });

// const togglePassword = document.getElementById("togglePassword");
// const passwordField = document.getElementById("login-password");
// const eyeIcon = document.getElementById("eye-icon");

// togglePassword.addEventListener("click", () => {
//   const type =
//     passwordField.getAttribute("type") === "password" ? "text" : "password";
//   passwordField.setAttribute("type", type);

//   if (type === "password") {
//     eyeIcon.src = "/assets/icons/eye-icon.svg";
//   } else {
//     eyeIcon.src = "/assets/icons/eye-slash-icon.svg";
//   }
// });

