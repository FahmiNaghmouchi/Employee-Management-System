module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"  // adjust paths depending on your project
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "50": "#f0fdfa",
          "100": "#ccfbf1",
          "200": "#99f6e4",
          "300": "#5eead4",
          "400": "#2dd4bf",
          "500": "#14b8a6",
          "600": "#0d9488",
          "700": "#0f766e",
          "800": "#115e59",
          "900": "#134e4a",
          "950": "#042f2e"
        }
      },
      fontFamily: {
        body: ["Oswald", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["Oswald", "ui-sans-serif", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
}
