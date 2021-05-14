import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import App from '@/views/App'
import './style/style.scss'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
