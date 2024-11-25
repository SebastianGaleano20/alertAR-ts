import "../public/scripts/changePasswordVerify";
describe("Reset Password Form", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <form id="reset-password-form">
        <input id="password" type="password" />
        <input id="confirm-password" type="password" />
        <div id="error-message" style="display: none;">Error: Passwords do not match</div>
      </form>
    `;
  });
  

  it("should display an error message if passwords do not match", () => {
    const form = document.getElementById("reset-password-form") as HTMLFormElement;
    const passwordInput = document.getElementById("password") as HTMLInputElement;
    const confirmPasswordInput = document.getElementById("confirm-password") as HTMLInputElement;
    const errorMessage = document.getElementById("error-message") as HTMLElement;

    // Simula contraseñas diferentes
    passwordInput.value = "123456";
    confirmPasswordInput.value = "654321";

    // Dispara el evento submit
    form.dispatchEvent(new Event("submit", { bubbles: true }));

    // Verifica que el mensaje de error se muestre
    expect(errorMessage.style.display).toBe("block");
  });

  test("should display an error message if passwords do not match", () => {
    const form = document.getElementById("reset-password-form") as HTMLFormElement;
    const passwordInput = document.getElementById("password") as HTMLInputElement;
    const confirmPasswordInput = document.getElementById("confirm-password") as HTMLInputElement;
    const errorMessage = document.getElementById("error-message") as HTMLElement;
  
    passwordInput.value = "123456";
    confirmPasswordInput.value = "654321";
  
    const submitEvent = new Event("submit", { bubbles: true, cancelable: true });
    form.dispatchEvent(submitEvent);
  
    // Verifica que el mensaje de error se muestre
    expect(errorMessage.style.display).toBe("block");
  });
  it("should not display an error message if passwords match", () => {
    const form = document.getElementById("reset-password-form") as HTMLFormElement;
    const passwordInput = document.getElementById("password") as HTMLInputElement;
    const confirmPasswordInput = document.getElementById("confirm-password") as HTMLInputElement;
    const errorMessage = document.getElementById("error-message") as HTMLElement;

    // Simula contraseñas iguales
    passwordInput.value = "123456";
    confirmPasswordInput.value = "123456";

    form.dispatchEvent(new Event("submit", { bubbles: true }));

    // Verifica que el mensaje de error no se muestre
    expect(errorMessage.style.display).toBe("none");
  });
});
