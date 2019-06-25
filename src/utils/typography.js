import Typography from "typography"


const options = {
    googleFonts: [
        {
          name: "Playfair Display",
          styles: ["400", "400i", "700"],
        },
        {
          name: "Fira Sans",
          styles: ["300", "400", "400i", "700", "700i"],
        },
      ],
    headerFontFamily: ['Playfair Display', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
    bodyFontFamily: ['Fira Sans', 'serif'],
    headerWeight: 700, 
    bodyWeight: 400
} 

// console.log(kirkhamTheme)
const typography = new Typography(options)

export default typography
export const rhythm = typography.rhythm