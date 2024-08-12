import {lazy} from "react";
import { Navigate } from "react-router-dom";

const HelloWorld = lazy(() => import('../views/HelloWorld.tsx'))

const routes = [
    { path: '/', element: <Navigate to='/home' /> },
    { path: '/home', element: <HelloWorld />}
]

export default routes
