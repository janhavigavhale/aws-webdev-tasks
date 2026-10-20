// Find the theme toggle button in the page
const toggle = document.getElementById("theme-toggle");

// When the button is clicked: switch the "dark" class on <body>, then update the icon and label
toggle.addEventListener("click", () => {
  // classList.toggle adds "dark" if it is missing, removes it if it is there, and tells us the result
  const isDark = document.body.classList.toggle("dark");
  // Show a sun in dark mode, a moon in light mode
  toggle.textContent = isDark ? "☀️" : "🌙";
  // Tell screen readers which mode the next click will switch to
  toggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
});

// Fill the footer year with the current year
document.getElementById("year").textContent = new Date().getFullYear();
