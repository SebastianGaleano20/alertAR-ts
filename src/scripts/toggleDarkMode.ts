// Definimos una interfaz para la configuración de tema
interface ThemeConfig {
  theme: "dark" | "light";
  toggleButton: HTMLInputElement | null;
}

// Función para cambiar entre modos claros y oscuros
const toggleDarkMode = (config: ThemeConfig): void => {
  document.documentElement.classList.toggle("dark");
  const isDarkMode: boolean =
    document.documentElement.classList.contains("dark");
  localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  if (config.toggleButton) config.toggleButton.checked = isDarkMode;
};

// Inicializamos el botón de cambio de tema
const themeToggleButton = document.getElementById(
  "themeToggle"
) as HTMLInputElement | null;
if (themeToggleButton) {
  themeToggleButton.addEventListener("click", () =>
    toggleDarkMode({ theme: "light", toggleButton: themeToggleButton })
  );
}

// Aplicar el tema guardado en localStorage al cargar la página
const savedTheme = localStorage.getItem("theme");
const config: ThemeConfig = {
  theme: savedTheme === "dark" ? "dark" : "light",
  toggleButton: themeToggleButton,
};

if (config.theme === "dark") {
  document.documentElement.classList.add("dark");
  if (config.toggleButton) config.toggleButton.checked = true;
} else {
  document.documentElement.classList.remove("dark");
  if (config.toggleButton) config.toggleButton.checked = false;
}
