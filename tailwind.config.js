/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 🔶 PRIMARY (Industrial Yellow System)
        primary: "#715d00",
        primary_container: "#FFD400",
        on_primary_fixed: "#231b00",

        // 🧱 SURFACE SYSTEM
        surface: "#fcf9f8",
        surface_container: "#f5f2f0", // slight tonal shift
        surface_container_low: "#f9f6f5",
        surface_container_lowest: "#ffffff",

        // 🖊 TEXT SYSTEM
        on_surface: "#1c1b1b",
        on_surface_variant: "#4a4747",

        // 🔲 OUTLINE SYSTEM
        outline: "rgba(28,27,27,0.2)",
        outline_variant: "rgba(28,27,27,0.1)",

        // 🧩 OPTIONAL TOKENS
        secondary_fixed: "#e8e3df", // for spec tags
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },

      fontSize: {
        // 🔤 TYPOGRAPHY SCALE
        "display-lg": [
          "3.5rem",
          { lineHeight: "1.1", letterSpacing: "-0.02em" },
        ],
        "headline-lg": ["2rem", { lineHeight: "1.2" }],
        "body-lg": ["1rem", { lineHeight: "1.6" }],
        "label-md": ["0.75rem", { lineHeight: "1", letterSpacing: "0.05em" }],
      },

      boxShadow: {
        // 🌫 Ambient industrial shadow
        ambient: "0px 20px 40px rgba(28, 27, 27, 0.04)",
      },

      borderRadius: {
        none: "0px", // enforce sharp edges everywhere
      },

      spacing: {
        // 📐 for your "massive spacing system"
        "section-sm": "80px",
        "section-md": "120px",
        "section-lg": "160px",
      },
    },
  },
  plugins: [],
};
