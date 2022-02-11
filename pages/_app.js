import '../styles/globals.css'
import { AnimatePresence } from "framer-motion"
import "../styles/style.scss"
import { Provider } from "react-redux"
import store from "../redux/store"

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </AnimatePresence>
  )
}

export default MyApp
