import { describe, it, expect, vi } from "vitest";
import { initializeModal, togglePasswordVisibility } from "@/scripts/modal";

describe("Modal Functions", () => {
  it("should open the modal when the open button is clicked", () => {
    const openBtn = document.createElement("button");
    const closeBtn = document.createElement("button");
    const modal = document.createElement("div");
    modal.classList.add("hidden");

    initializeModal({ openBtn, closeBtn, modal });

    openBtn.click();

    expect(modal.classList.contains("hidden")).toBe(false);
  });

  it("should close the modal when the close button is clicked", () => {
    const openBtn = document.createElement("button");
    const closeBtn = document.createElement("button");
    const modal = document.createElement("div");

    initializeModal({ openBtn, closeBtn, modal });

    modal.classList.remove("hidden");
    closeBtn.click();

    expect(modal.classList.contains("hidden")).toBe(true);
  });

  it("should toggle the password visibility", () => {
    const passwordField = document.createElement("input");
    const eyeIcon = document.createElement("img");

    passwordField.setAttribute("type", "password");
    eyeIcon.src = "/assets/icons/eye-icon.svg";

    togglePasswordVisibility(
      passwordField as HTMLInputElement,
      eyeIcon as HTMLImageElement
    );

    expect(passwordField.getAttribute("type")).toBe("text");
    expect(eyeIcon.src).toContain("/assets/icons/eye-slash-icon.svg");

    togglePasswordVisibility(
      passwordField as HTMLInputElement,
      eyeIcon as HTMLImageElement
    );

    expect(passwordField.getAttribute("type")).toBe("password");
    expect(eyeIcon.src).toContain("/assets/icons/eye-icon.svg");
  });
});
