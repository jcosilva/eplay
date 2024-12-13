import { BrowserRouter } from 'react-router-dom'
import { GlobalCss } from './styles'

import Header from './components/01_Header'
import Rotas from './routes'
import Footer from './components/04_Footer'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <div className="container">
        <Header />
      </div>
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
