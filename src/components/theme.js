// theme.js
// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react"
// 2. Add your color mode config
const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
}

const theme = extendTheme({
  fonts: {
    heading: "Open Sans",
    body: "Comic Sans",
  }
})

export default theme