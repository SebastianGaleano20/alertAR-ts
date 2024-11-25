// Función para alternar el modo oscuro
const toggleDarkMode = (): void => {
    document.documentElement.classList.toggle("dark");
  
    const isDarkMode = document.documentElement.classList.contains("dark");
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  };
  
  // Selección del botón para alternar el tema
  const themeToggle = document.getElementById("themeToggle") as HTMLInputElement | null;
  
  if (themeToggle) {
    themeToggle.addEventListener("click", toggleDarkMode);
  }
  
  // Aplicar el tema guardado en localStorage al cargar la página
  const savedTheme = localStorage.getItem("theme");
  
  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
    const themeToggleElement = document.getElementById("themeToggle") as HTMLInputElement | null;
    if (themeToggleElement) {
      themeToggleElement.checked = true;
    }
  } else {
    document.documentElement.classList.remove("dark");
    const themeToggleElement = document.getElementById("themeToggle") as HTMLInputElement | null;
    if (themeToggleElement) {
      themeToggleElement.checked = false;
    }
  }
  





// const toggleDarkMode = () => {
//   document.documentElement.classList.toggle("dark");
//   const isDarkMode = document.documentElement.classList.contains("dark");
//   localStorage.setItem("theme", isDarkMode ? "dark" : "light");
// };

// document
//   .getElementById("themeToggle")
//   .addEventListener("click", toggleDarkMode);

// // Aplicar el tema guardado en localStorage al cargar la página
// const savedTheme = localStorage.getItem("theme");
// if (savedTheme === "dark") {
//   document.documentElement.classList.add("dark");
//   document.getElementById("themeToggle").checked = true;
// } else {
//   document.documentElement.classList.remove("dark");
//   document.getElementById("themeToggle").checked = false;
// }
