/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    backgroundSize: {
      "75%": "75%",
      "100px": "100px",
    },
    backgroundPosition: {
      right: "right",
      "left-center": "60px 110px",
    },
    extend: {
      colors: {
        "pri-blue": "#5270FF",
        "blue-1": "#F0F4FF",
        "blue-2": "#DEE5FF",
        "blue-3": "#BBC8FF",
        "blue-4": "#AAB9FF",
        "blue-5": "#98ABFF",
        "blue-6": "#879CFF",
        "blue-7": "#758DFF",
        "blue-8": "#647FFF",

        "bluegray-1": "#F8FAFC",
        "bluegray-2": "#F1F5F9",
        "bluegray-3": "#E2E8F0",
        "bluegray-4": "#CBD5E1",
        "bluegray-5": "#94A3B8",
        "bluegray-6": "#64748B",
        "bluegray-7": "#475569",
        "bluegray-8": "#334155",
        "bluegray-9": "#1E293B",

        "coolgray-200": "#E5E7EB",
        "coolgray-700": "#374151",

        "yellow-1": "#FFFEF3",
        "yellow-2": "#FFFCDC",
        "yellow-3": "#FFFBC5",
        "yellow-4": "#FFF9AF",
        "yellow-5": "#FFF798",
        "yellow-6": "#FFF681",
        "yellow-7": "#FFF46A",
        "yellow-8": "#FFF254",
        "yellow-9": "#FFEF26",

        "white-f9": "#F9F9F9",
        "white-fb": "#FBFBFB",

        "grey-4f": "#444F5F",
        "grey-d9": "#D9D9D9",

        "black-0a": "#0A0A0A",
        "black-0a-50": "#0A0A0A50",

        "inp-info": "#3B82F6",

        error: "#F93232",
        "error-30": "#F9323230",
        "error-50": "#F9323250",
        "error-70": "#F9323270",
        "error-80": "#F9323280",
        success: "#439F6E",
        validation: "#FFB82E",
      },
      boxShadow: {
        "fh-base": "0px 1px 2px 0px rgba(31, 41, 55, 0.08)",
        "fh-md":
          "0px 4px 6px 0px rgba(31, 41, 55, 0.10), 0px 2px 4px 0px rgba(31, 41, 55, 0.06)",
        "fh-lg":
          "0px 0px 6px 0px rgba(31, 41, 55, 0.05), 0px 10px 15px 0px rgba(31, 41, 55, 0.10)",
        "fh-xl":
          "0px 10px 10px 0px rgba(31, 41, 55, 0.04), 0px 20px 25px 0px rgba(31, 41, 55, 0.10)",
        "fh-2xl": "0px 25px 50px 0px rgba(31, 41, 55, 0.25)",
        "fh-inner": "0px 0px 4px 0px rgba(31, 41, 55, 0.15) inset",
        "fh-menu": "0px 4px 50px 0px rgba(0, 0, 0, 0.10)",
      },
      fontFamily: {
        outfit: ["'Outfit'", "sans-serif"],
      },
      spacing: {
        authMainHeight: "calc(100vh - 96px)",
        cont1350: "calc((100% - 1350px) / 2)",
      },
      backgroundImage: {
        mission: 'url( "./assets/about-img-1.png")',
        vision: 'url( "./assets/about-img-2.png")',
        ellipse: 'url( "./assets/Ellipse-1.png")',
      },
    },
  },
  plugins: [],
};
