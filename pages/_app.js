import '../styles/globals.css'
import "tailwindcss/tailwind.css";
import '../styles/component/Content.css'
import '../styles/component/Header.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
