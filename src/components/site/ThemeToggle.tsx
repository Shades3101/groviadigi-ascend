import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefers = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = stored ? stored === "dark" : prefers;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="relative h-8 w-14 rounded-full border border-ink/20 bg-paper-deep transition-colors hover:border-ink/40"
    >
      <span
        className={`absolute top-1/2 -translate-y-1/2 h-6 w-6 rounded-full bg-ink transition-transform duration-500 ease-out ${
          dark ? "translate-x-7" : "translate-x-1"
        }`}
      >
        <span
          className={`absolute inset-0 rounded-full transition-colors ${
            dark ? "bg-bright" : "bg-ink"
          }`}
        />
      </span>
    </button>
  );
};

export default ThemeToggle;
