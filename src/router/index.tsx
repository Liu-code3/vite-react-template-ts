import { lazy } from "react";
import { Navigate, RouteObject } from 'react-router-dom';

const HelloWorld = lazy(() => import('@/views/HelloWorld.tsx'))

const routes: RouteObject[] = [
    { path: '/', element: <Navigate to="/home" /> },
    { path: '/home', element: <HelloWorld />}
]

export default routes
