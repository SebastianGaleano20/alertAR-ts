import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom", // Necesario para simular el DOM en pruebas
    include: ["src/**/*.test.ts"], // Carpeta de pruebas.
  },
});
