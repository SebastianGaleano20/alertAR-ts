// Definimos una interfaz para el formulario de restablecimiento de contraseña
interface ResetPasswordFormElements {
    form: HTMLFormElement;
    passwordInput: HTMLInputElement;
    confirmPasswordInput: HTMLInputElement;
    errorMessage: HTMLElement;
  }
  
  // Obtenemos los elementos del formulario y los agrupamos en un objeto de tipo ResetPasswordFormElements
  const elements: ResetPasswordFormElements | null = {
    form: document.getElementById("reset-password-form") as HTMLFormElement,
    passwordInput: document.getElementById("password") as HTMLInputElement,
    confirmPasswordInput: document.getElementById("confirm-password") as HTMLInputElement,
    errorMessage: document.getElementById("error-message") as HTMLElement,
  };
  
  // Verificamos que todos los elementos existan antes de agregar el event listener
  if (elements && elements.form && elements.passwordInput && elements.confirmPasswordInput && elements.errorMessage) {
    elements.form.addEventListener("submit", function (event: SubmitEvent): void {
      const password = elements.passwordInput.value;
      const confirmPassword = elements.confirmPasswordInput.value;
  
      if (password !== confirmPassword) {
        event.preventDefault();
        elements.errorMessage.style.display = "block";
      } else {
        elements.errorMessage.style.display = "none";
      }
    });
  }
  