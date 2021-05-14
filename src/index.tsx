import { StrictMode } from 'react'
import ReactDOM from 'react-dom'

import C from '@/components'
import App from '@/views/App'

import reportWebVitals from '@/reportWebVitals'
import '@/lang'
import '@/style/style.scss'

ReactDOM.render(
  <StrictMode>
    <C.SelectLang />
    <App />
  </StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
