import Navbar from '../components/Navbar.jsx'
import "../global.css"

const _app = ({Component, pageProps}) => {
  return (
    <div>
      <Navbar />
      <main className="pt-20 max-w-6xl mx-auto px-4">
        <Component {...pageProps} />
      </main>
    </div>
  )
}

export default _app
