import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  // 不能自动检测副作用，有意双重调用
  // <StrictMode>
  // React.Suspense 是与 lazy() 配合使用的关键部分，它确保在懒加载组件加载完成之前，应用不会崩溃，并且可以优雅地处理异步加载的情况 */
  <App />,
  // </StrictMode>,
)
