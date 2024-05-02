import { Form, Home } from 'pages'

import {
    RouterProvider,
    createBrowserRouter
} from 'react-router-dom'

const rota = createBrowserRouter ([
    {   
        path: '/',
        element: <Home />
    },
    {   
        path: '/home',
        element: <Home />
    },
    {
        path: '/form',
        element: <Form />
    }
])


export default function AppRoutes() {
  return (
        <RouterProvider router={rota}/>
  );
}