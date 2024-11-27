interface Coordinates {
  top: number;
  left: number;
}

class AlertModalManager {
  private alertButton: HTMLElement | null;
  private alertModal: HTMLElement | null;
  private alertModalContent: HTMLElement | null;
  private closeAlertModalBtn: HTMLElement | null;

  constructor() {
    this.alertButton = document.getElementById("alertButton");
    this.alertModal = document.getElementById("alertModal");
    this.alertModalContent = document.getElementById("alertModalContent");
    this.closeAlertModalBtn = document.getElementById("closeAlertModalBtn");

    this.initializeEventListeners();
  }

  private initializeEventListeners(): void {
    if (!this.validateElements()) return;

    this.alertButton?.addEventListener("click", this.openModal.bind(this));
    this.closeAlertModalBtn?.addEventListener(
      "click",
      this.closeModal.bind(this)
    );

    window.addEventListener("click", (event: MouseEvent) => {
      if (event.target === this.alertModal) {
        this.closeModal();
      }
    });
  }

  private validateElements(): boolean {
    return !!(
      this.alertButton &&
      this.alertModal &&
      this.alertModalContent &&
      this.closeAlertModalBtn
    );
  }

  private getButtonCoordinates(): Coordinates {
    if (!this.alertButton) return { top: 0, left: 0 };

    const rect = this.alertButton.getBoundingClientRect();
    return {
      top: rect.top,
      left: rect.left,
    };
  }

  private openModal(): void {
    if (!this.validateElements()) return;

    this.alertModal?.classList.remove("hidden");

    const { top, left } = this.getButtonCoordinates();

    if (this.alertModalContent) {
      this.alertModalContent.style.transform = `translate(${
        left - window.innerWidth
      }px, ${top - window.innerHeight}px) scale(0.5)`;
      this.alertModalContent.style.opacity = "0";

      setTimeout(() => {
        if (this.alertModalContent) {
          this.alertModalContent.style.transform = "translate(0, 0) scale(1)";
          this.alertModalContent.style.opacity = "1";
        }
      }, 50);
    }
  }

  private closeModal(): void {
    if (!this.validateElements()) return;

    const { top, left } = this.getButtonCoordinates();

    if (this.alertModalContent) {
      this.alertModalContent.style.transform = `translate(${
        left - window.innerWidth
      }px, ${top - window.innerHeight}px) scale(0.5)`;
      this.alertModalContent.style.opacity = "0";
    }

    setTimeout(() => {
      this.alertModal?.classList.add("hidden");
    }, 300);
  }

  // Método estático para inicializar la instancia
  static initialize(): AlertModalManager {
    return new AlertModalManager();
  }
}

// Uso
document.addEventListener("DOMContentLoaded", () => {
  AlertModalManager.initialize();
});
