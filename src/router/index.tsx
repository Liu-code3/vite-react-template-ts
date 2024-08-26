import { Suspense, lazy } from 'react'
import type { ReactNode } from 'react'
import type { RouteObject } from 'react-router-dom'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'

const HelloWorld = lazy(() => import('@/views/HelloWorld.tsx'))
const NotFound = lazy(() => import('@/views/NotFount/404.tsx'))

// 闪烁的发生是因为将整个 App 包裹在 Suspense 中会导致在懒加载时整个应用都渲染 fallback。而将 Suspense 包裹在单个组件上，只会让正在懒加载的组件局部渲染 fallback，从而避免了不必要的全屏重新渲染并防止闪烁。
function lazyComponent(element: ReactNode): ReactNode {
  return (
    <Suspense fallback={<div>loading...</div>}>
      { element }
    </Suspense>
  )
}
const routes: RouteObject[] = [
  { path: '/', element: <Navigate to="/home" /> },
  { path: '/home', element: lazyComponent(<HelloWorld />) },
  { path: '*', element: lazyComponent(<NotFound />) },
]

/** https://blog.csdn.net/AXBNMD/article/details/137468854 使用lazy的话，需向如下这样操作 */
const router = createBrowserRouter(routes)

function Routes() {
  return <RouterProvider router={router}></RouterProvider>
}

export default Routes
