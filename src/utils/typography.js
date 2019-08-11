import Typography from "typography"


const options = {
  googleFonts: [
    {
      name: "Playfair Display",
      styles: ["700"],
    },
    {
      name: "Fira Sans",
      styles: ["400", "400i"],
    },
  ],
  headerFontFamily: ['Playfair Display', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
  bodyFontFamily: ['Fira Sans', 'sans-serif'],
  headerWeight: 700,
  bodyWeight: 400,
}

// console.log(kirkhamTheme)
const typography = new Typography(options)

export default typography
export const rhythm = typography.rhythm