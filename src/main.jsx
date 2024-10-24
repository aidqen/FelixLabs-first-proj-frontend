import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import './index.css'
import { App } from './RootCmp'
import { store } from './store/store'

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
)