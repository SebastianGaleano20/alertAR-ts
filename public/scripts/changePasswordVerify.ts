document
  .getElementById("reset-password-form")
  ?.addEventListener("submit", function (event: Event) {
    // Asegúrate de que los inputs sean del tipo HTMLInputElement
    const passwordInput = document.getElementById("password") as HTMLInputElement | null;
    const confirmPasswordInput = document.getElementById("confirm-password") as HTMLInputElement | null;
    const errorMessage = document.getElementById("error-message") as HTMLElement | null;

    if (!passwordInput || !confirmPasswordInput || !errorMessage) {
      // Si no se encuentran los elementos, no hacer nada
      console.error("Form elements not found.");
      return;
    }

    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (password !== confirmPassword) {
      event.preventDefault(); // Evitar envío del formulario
      errorMessage.style.display = "block"; // Mostrar el mensaje de error
    } else {
      errorMessage.style.display = "none"; // Ocultar el mensaje de error
    }
  });

  
// document
//   .getElementById("reset-password-form")
//   .addEventListener("submit", function (event) {
//     const password = document.getElementById("password").value;
//     const confirmPassword = document.getElementById("confirm-password").value;

//     if (password !== confirmPassword) {
//       event.preventDefault();
//       document.getElementById("error-message").style.display = "block";
//     } else {
//       document.getElementById("error-message").style.display = "none";
//     }
//   });
