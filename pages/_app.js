import '../styles/globals.css'
import { AnimatePresence } from "framer-motion"
import "../styles/style.scss"

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence>
      <Component {...pageProps} />
    </AnimatePresence>
  )
}

export default MyApp
