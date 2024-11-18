/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#662296",
        secondary: "#49557e",
      },
      backgroundImage: {
        header: "url('/header_img2.jpg')",
      },
      gridTemplateColumns: {
        "auto-fill-240": "repeat(auto-fill, minmax(240px, 1fr))",
      },
      animation: {
        fade: "fadeIn 5s",
      },
      screens: {
        phone: { max: "640px" },
        "for-tab": { max: "1080px" },
        "for-tab-s": { max: "850px" },
        "phone-s": { max: "450px" },
      },
    },
    plugins: [],
  },
};
