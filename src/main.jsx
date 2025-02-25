import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider, Navigate} from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './redux/store.js'

import './index.css'
import App from './App.jsx'
import About from './about.jsx'
import Animals from './animal.jsx'
import Tes from './sample.jsx'
import Ticket from './ticket.jsx'

// child page
import FormTicket from './childPages/formTicket.jsx'
import QrTicket from './childPages/qrTicket.jsx'
import MyTicket from './myTicket.jsx'
import TicketDetail from './childPages/ticketDetail.jsx'
import Login from './childPages/login.jsx'

//admin
import ProtectedRoute from './admin/protectRoute.jsx'
import Administrator from './admin/admin.jsx'
import NavaShield from './admin/navaShield.js'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'login',
        element: <Login/>
      },
    ]
  },
  {
    path: '/about',
    element: <About/>,
  },
  {
    path: '/animals',
    element: <Animals/>,
  },
  {
    path: '/tes',
    element: <Tes/>
  },
  {
    path: '/ticket',
    element: <Ticket/>,
    children: [
      {
        path: 'form',
        element: <FormTicket/>
      },
      {
        path: 'payment',
        element: <QrTicket/>
      },
      {
        path: 'details',
        element: <TicketDetail/>,
      }

    ]
  },
  {
    path: 'myTicket',
    element: <MyTicket/>
  },
  {
    path: '/admin',
    element: (
      <NavaShield>
        <ProtectedRoute>
          <Administrator/>
        </ProtectedRoute>
      </NavaShield>
    )
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
