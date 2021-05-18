import { StrictMode } from 'react'
import ReactDOM from 'react-dom'

import App from '@/views/App'

import reportWebVitals from '@/reportWebVitals'
import '@/lang'
import '@/style/style.scss'

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
