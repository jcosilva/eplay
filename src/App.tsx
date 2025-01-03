import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { GlobalCss } from './styles'
import { store } from './store'

import Rotas from './routes'
import Header from './components/01_01_Header'
import Cart from './components/03_01_Cart'
import Footer from './components/04_01_Footer'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <div className="container">
          <Header />
        </div>
        <Rotas />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
