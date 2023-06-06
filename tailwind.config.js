const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "src/pages/**/*.{jsx,tsx}",
    "src/app/**/*.{jsx,tsx}",
    "src/modules/**/*.{jsx,tsx}",
    "src/components/**/*.{jsx,tsx}",
    "src/ui/**/*.{jsx,tsx}",
  ],
  theme: {
    screens: {
      xxl: { max: `${1440 - 0.02}px` },
      xl: { max: `${1024 - 0.02}px` },
      lg: { max: `${992 - 0.02}px` },
      md: { max: `${768 - 0.02}px` },
      sm: { max: `${576 - 0.02}px` },
      xs: { max: `${400 - 0.02}px` },
    },
    colors: {
      border: "#d1d5db",
      primary: "#3556E1;",
      secondary: "#B91A1E",
      hover: "#607EFF",
      cards: "#EFF5FF",
      white: {
        DEFAULT: "#FFFFFF",
        64: "rgba(255, 255, 255, 0.64)",
        40: "rgba(255, 255, 255, 0.4)",
        "08": "rgba(255, 255, 255, 0.08)",
      },
      black: {
        DEFAULT: "#27292F",
        80: "rgba(0, 0, 0, 0.8)",
        60: "rgba(0, 0, 0, 0.6)",
        40: "rgba(0, 0, 0, 0.4)",
        20: "rgba(0, 0, 0, 0.20)",
        16: "rgba(0, 0, 0, 0.16)",
        8: "rgba(0, 0, 0, 0.08)",
        4: "rgba(0, 0, 0, 0.04)",
      },
      red: {
        DEFAULT: "#B91A1E",
        hover: "#FFF0ED",
        88: "rgba(210, 79, 55,0.88)",
        60: "rgba(210, 79, 55,0.6)",
        10: "rgba(210, 79, 55, 0.1)",
      },
      button: {
        red1: "#E8A79B",
        red2: "#FFF9F8",
      },
      blue: {
        hover: "#D5E6FF",
        DEFAULT: "rgba(53, 86, 225, 1)",
        88: "rgba(53, 86, 225, 0.88)",
        70: "rgba(53, 86, 225, 0.7)",
        60: "rgba(53, 86, 225, 0.6)",
        10: "rgba(53, 86, 225, 0.1)",
        6: "rgba(53, 86, 225, 0.06)",
      },
    },
    borderRadius: {
      DEFAULT: "8px",
      50: "50%",
    },
    fontFamily: {
      sans: ["var(--font-futuraPT)", ...fontFamily.sans],
    },
    fontSize: {
      "80-86": ["80px", "86px"],
      "72-78": ["72px", "78px"],
      "64-68": ["64px", "68px"],
      "42-48": ["42px", "48px"],
      "34-42": ["34px", "42px"],
      "32-48": ["32px", "48px"],
      "32-40": ["32px", "40px"],
      "26-40": ["26px", "40px"],
      "24-36": ["24px", "36px"],
      "20-32": ["20px", "32px"],
      "18-32": ["18px", "32px"],
      "18-24": ["18px", "24px"],
      "16-24": ["16px", "24px"],
      "14-24": ["14px", "24px"],
      "14-20": ["14px", "20px"],
      "12-16": ["12px", "16px"],
    },
    fontWeight: {
      light: 300,
      normal: 400,
      demi: 450,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            h3: {
              fontSize: "1em",
              lineHeight: "1.5em",
              marginBottom: "0.5em",
            },
          },
        },
        gray: {
          css: {
            "--tw-prose-bullets": "#121212",
          },
        },
      },
      boxShadow: {
        card: "0px 0px 6px rgba(0, 0, 0, 0.12), 0px 4px 24px rgba(0, 0, 0, 0.12);",
        xl: "0px 4px 13px rgba(0, 0, 0, 0.25);",
        xlInset: "inset 0px 4px 4px rgba(0, 0, 0, 0.15)",
      },
      gridTemplateColumns: {
        "grid-auto": "auto 1fr",
      },
      backgroundImage: {
        gradient:
          "linear-gradient(90deg, hsla(0, 0%, 100%, 0), #fff 50%, #fff)",
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    function ({ addComponents, addUtilities }) {
      addComponents({
        ".container": {
          width: "100%",
          maxWidth: `${936 + 2 * 64}px`,
          paddingLeft: "20px",
          paddingRight: "20px",
          marginLeft: "auto",
          marginRight: "auto",
          "@screen xl": {
            maxWidth: `${936 + 2 * 64}px`,
            paddingLeft: "20px",
            paddingRight: "20px",
          },
          "@screen lg": {
            paddingLeft: "10px",
            paddingRight: "10px",
          },
          "@screen sm": {
            paddingLeft: "8px",
            paddingRight: "8px",
          },
        },
      }),
        addUtilities({
          ".full-bleed": {
            width: "100vw",
            marginLeft: "calc(50% - 50vw)",
          },
        });
    },
  ],
};
