// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
    // 不能自动检测副作用，有意双重调用
  // <StrictMode>
    <App />
  // </StrictMode>,
)
