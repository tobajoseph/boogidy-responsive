/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "#1e1e1e",
          "200": "#171717",
        },
        crimson: "#de1d2d",
        whitesmoke: {
          "100": "#f9f9f9",
          "200": "#f1f1f1",
        },
        firebrick: "#b72f2f",
        gainsboro: "#d8d8d8",
        darkgray: {
          "100": "#959595",
          "200": "rgba(151, 151, 151, 0.25)",
        },
        silver: "#b7b7b7",
        black: "#000",
        dimgray: {
          "100": "#826769",
          "200": "#585858",
        },
        darkslategray: "#2e2e2e",
        brown: "#731e1e",
        indianred: "#904e4e",
        limegreen: "rgba(33, 222, 29, 0.25)",
      },
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        "581xl": "600px",
        "3xs": "10px",
        "5981xl": "6000px",
        "base-9": "16.9px",
        "1165xl": "1184px",
      },
    },
    fontSize: {
      sm: "14px",
      "13xl": "32px",
      base: "16px",
      "17xl": "36px",
      xs: "12px",
      "9xl": "28px",
      "5xl": "24px",
      "85xl": "104px",
      lg: "18px",
      "29xl": "48px",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
