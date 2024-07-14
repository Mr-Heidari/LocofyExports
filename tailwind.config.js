/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        dodgerblue: {
          "100": "#4992ff",
          "200": "rgba(73, 146, 255, 0.76)",
        },
        dimgray: {
          "100": "#727272",
          "200": "#5c5c5c",
          "300": "#525252",
        },
        darkorange: "#f8941f",
        silver: "#bdc1ca",
        gray: {
          "100": "#949494",
          "200": "rgba(0, 0, 0, 0)",
        },
        lightslategray: "#9095a1",
        whitesmoke: "#f2f2f2",
        darkgray: "#979797",
        darkslategray: "#343434",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        "3xs": "10px",
        "30xl-8": "49.8px",
        "6xs": "7px",
        "lg-8": "18.8px",
        lgi: "19px",
        "8xs": "5px",
        "10xs": "3px",
        "7xl-5": "26.5px",
        "2xs-8": "10.8px",
      },
    },
    fontSize: {
      base: "16px",
      xl: "20px",
      "smi-3": "12.3px",
      sm: "14px",
      "5xl": "24px",
      "11xl": "30px",
      "base-2": "16.2px",
      "base-4": "15.4px",
      "lg-5": "18.5px",
      "base-9": "16.9px",
      "2xl-5": "21.5px",
      "13xl": "32px",
      xs: "12px",
      "xs-5": "11.5px",
      "lgi-2": "19.2px",
      "4xl-9": "23.9px",
      "sm-1": "13.1px",
      "sm-9": "13.9px",
      inherit: "inherit",
    },
    screens: {
      md: {
        raw: "screen and (max-width: 720px)",
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
