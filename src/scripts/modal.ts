document.addEventListener("DOMContentLoaded", () => {
  // Iniciar Sesión
  const openLoginModalBtn = document.getElementById("openLoginModalBtn");
  const closeLoginModalBtn = document.getElementById("closeLoginModalBtn");
  const loginModal = document.getElementById("loginModal");

  // Añadir comprobaciones de nulidad
  if (openLoginModalBtn && closeLoginModalBtn && loginModal) {
    openLoginModalBtn.addEventListener("click", () => {
      loginModal.classList.remove("hidden");
    });

    closeLoginModalBtn.addEventListener("click", () => {
      loginModal.classList.add("hidden");
    });
  }

  // Registrarse
  const openRegisterModalBtn = document.getElementById("openRegisterModalBtn");
  const closeRegisterModalBtn = document.getElementById(
    "closeRegisterModalBtn"
  );
  const registerModal = document.getElementById("registerModal");

  // Añadir comprobaciones de nulidad
  if (openRegisterModalBtn && closeRegisterModalBtn && registerModal) {
    openRegisterModalBtn.addEventListener("click", () => {
      registerModal.classList.remove("hidden");
    });

    closeRegisterModalBtn.addEventListener("click", () => {
      registerModal.classList.add("hidden");
    });
  }
});

// Toggle Password
const togglePassword = document.getElementById("togglePassword");
const passwordField = document.getElementById(
  "login-password"
) as HTMLInputElement;
const eyeIcon = document.getElementById("eye-icon") as HTMLImageElement;

// Añadir comprobaciones de nulidad
if (togglePassword && passwordField && eyeIcon) {
  togglePassword.addEventListener("click", () => {
    const type =
      passwordField.getAttribute("type") === "password" ? "text" : "password";
    passwordField.setAttribute("type", type);

    if (type === "password") {
      eyeIcon.src = "/assets/icons/eye-icon.svg";
    } else {
      eyeIcon.src = "/assets/icons/eye-slash-icon.svg";
    }
  });
}
