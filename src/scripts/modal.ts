// Interfaz para tipar los elementos modales
export interface ModalElements {
  openBtn: HTMLElement;
  closeBtn: HTMLElement;
  modal: HTMLElement;
}

// Función para inicializar un modal
export const initializeModal = ({
  openBtn,
  closeBtn,
  modal,
}: ModalElements): void => {
  openBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
  });
};

// Función para alternar la visibilidad de la contraseña
export const togglePasswordVisibility = (
  passwordField: HTMLInputElement,
  eyeIcon: HTMLImageElement
): void => {
  const isPasswordHidden = passwordField.getAttribute("type") === "password";
  passwordField.setAttribute("type", isPasswordHidden ? "text" : "password");

  eyeIcon.src = isPasswordHidden
    ? "/assets/icons/eye-slash-icon.svg"
    : "/assets/icons/eye-icon.svg";
};
