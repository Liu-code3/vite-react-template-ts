import { lazy } from 'react'
import type { RouteObject } from 'react-router-dom'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'

const HelloWorld = lazy(() => import('@/views/HelloWorld.tsx'))
const NotFound = lazy(() => import('@/views/NotFount/404.tsx'))

const routes: RouteObject[] = [
  { path: '/', element: <Navigate to="/home" /> },
  { path: '/home', element: <HelloWorld /> },
  { path: '*', element: <NotFound /> }
]

/** https://blog.csdn.net/AXBNMD/article/details/137468854 使用lazy的话，需向如下这样操作 */
const router = createBrowserRouter(routes)

function Routes() {
  return <RouterProvider router={router}></RouterProvider>
}

export default Routes
