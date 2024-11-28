import { test, expect } from "@playwright/test";

test("has title AlertAR", async ({ page }) => {
  await page.goto("http://localhost:4321/");
  await expect(page).toHaveTitle(/AlertAR/);
});

test("has title Iniciar Sesión", async ({ page }) => {
  await page.goto("http://localhost:4321/");
  await page.getByRole("button", { name: "Iniciar Sesión" }).click();
  // await page.getByRole("img", { name: "Icono de inicio de sesión" }).click();
  // await page.getByRole("heading", { name: "Iniciar Sesión" }).click();
});
