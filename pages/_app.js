import '../styles/globals.css'
import "tailwindcss/tailwind.css";
import '../styles/component/Content.css'
import '../styles/component/Header.css'
import '../styles/component/load/todo.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
