import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import App from '@/views/App'
import './style/style.scss'
import reportWebVitals from './reportWebVitals'
import '@/lang'
import SelectLang from '@/components/common/SelectLang'

ReactDOM.render(
  <StrictMode>
    <SelectLang />
    <App />
  </StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
