import { describe, it, expect, vi, beforeEach } from 'vitest';

// Simulamos un entorno DOM
vi.stubGlobal('localStorage', {
  getItem: vi.fn(),
  setItem: vi.fn(),
});

document.documentElement.className = ''; // Resetear clases

interface ThemeConfig {
  theme: 'dark' | 'light';
  toggleButton: HTMLInputElement | null;
}

const toggleDarkMode = (config: ThemeConfig): void => {
  document.documentElement.classList.toggle('dark');
  const isDarkMode: boolean = document.documentElement.classList.contains('dark');
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  if (config.toggleButton) config.toggleButton.checked = isDarkMode;
};

describe('toggleDarkMode', () => {
  let toggleButton: HTMLInputElement;

  beforeEach(() => {
    toggleButton = document.createElement('input');
    toggleButton.type = 'checkbox';
    document.body.appendChild(toggleButton);
  });

  it('should toggle dark mode class on the document', () => {
    toggleDarkMode({ theme: 'light', toggleButton });

    expect(document.documentElement.classList.contains('dark')).toBe(true);
    expect(localStorage.setItem).toHaveBeenCalledWith('theme', 'dark');

    toggleDarkMode({ theme: 'dark', toggleButton });

    expect(document.documentElement.classList.contains('dark')).toBe(false);
    expect(localStorage.setItem).toHaveBeenCalledWith('theme', 'light');
  });

  it('should update the toggle button state', () => {
    toggleDarkMode({ theme: 'light', toggleButton });

    expect(toggleButton.checked).toBe(true);

    toggleDarkMode({ theme: 'dark', toggleButton });

    expect(toggleButton.checked).toBe(false);
  });
});
