// Interfaz para tipar los elementos modales
interface ModalElements {
    openBtn: HTMLElement;
    closeBtn: HTMLElement;
    modal: HTMLElement;
  }
  
  // Función para inicializar un modal
  const initializeModal = ({ openBtn, closeBtn, modal }: ModalElements): void => {
    openBtn.addEventListener("click", () => {
      modal.classList.remove("hidden");
    });
  
    closeBtn.addEventListener("click", () => {
      modal.classList.add("hidden");
    });
  };
  
  document.addEventListener("DOMContentLoaded", () => {
    // Iniciar Sesión
    const loginModalElements: ModalElements = {
      openBtn: document.getElementById("openLoginModalBtn") as HTMLElement,
      closeBtn: document.getElementById("closeLoginModalBtn") as HTMLElement,
      modal: document.getElementById("loginModal") as HTMLElement,
    };
  
    initializeModal(loginModalElements);
  
    // Registrarse
    const registerModalElements: ModalElements = {
      openBtn: document.getElementById("openRegisterModalBtn") as HTMLElement,
      closeBtn: document.getElementById("closeRegisterModalBtn") as HTMLElement,
      modal: document.getElementById("registerModal") as HTMLElement,
    };
  
    initializeModal(registerModalElements);
  });
  
  // Elementos para alternar la visibilidad de la contraseña
  const togglePassword = document.getElementById("togglePassword") as HTMLElement;
  const passwordField = document.getElementById("login-password") as HTMLInputElement;
  const eyeIcon = document.getElementById("eye-icon") as HTMLImageElement;
  
  togglePassword.addEventListener("click", () => {
    const isPasswordHidden = passwordField.getAttribute("type") === "password";
    passwordField.setAttribute("type", isPasswordHidden ? "text" : "password");
  
    eyeIcon.src = isPasswordHidden
      ? "/assets/icons/eye-slash-icon.svg"
      : "/assets/icons/eye-icon.svg";
  });
  