const goalButton = document.getElementById("goal-button");
const goalMessage = document.getElementById("goal-message");

goalButton.addEventListener("click", function () {
    goalMessage.textContent =
        "My next step is to build and publish my first complete website.";
});
const themeButton = document.getElementById("theme-button");

function applyTheme(isDark) {
    document.body.classList.toggle("dark-mode", isDark);

    themeButton.textContent = isDark
        ? "Enable Light Mode"
        : "Enable Dark Mode";

    themeButton.setAttribute("aria-pressed", String(isDark));
}

// Restore the saved theme when the page opens.
const savedTheme = localStorage.getItem("theme");
applyTheme(savedTheme === "dark");

// Change and save the theme when the button is clicked.
themeButton.addEventListener("click", function () {
    const isDark = !document.body.classList.contains("dark-mode");

    applyTheme(isDark);

    localStorage.setItem("theme", isDark ? "dark" : "light");
});
const yearElement = document.getElementById("current-year");
const currentYear = new Date().getFullYear();

yearElement.textContent = currentYear;
