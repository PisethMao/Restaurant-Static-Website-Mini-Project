/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    relative: true,
    transform: (content) => content.replace(/taos:/g, ""),
    files: ["./src/**/*.{html,js}"],
  },
  safelist: [
    "scroll-fade-in",
    "taos:opacity-0",
    "taos:translate-y-[100px]",
    "taos:duration-[1500ms]",
  ],
  plugins: [require("taos/plugin")],
};
