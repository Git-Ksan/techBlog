import '../styles/globals.css'
import "tailwindcss/tailwind.css";
import '../styles/component/Content.css'
import '../styles/component/Header.css'
import '../styles/component/load/todo.css'

import FooterLayOut from "../components/templates/FooterLayOut";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <FooterLayOut/>
    </>
  )
}

export default MyApp
