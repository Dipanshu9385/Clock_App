import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Alarm, StopWatch, Timer, WroldClock_App } from './Components/index.js'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Alarm />
      },
      {
        path: "wrold",
        element: <WroldClock_App />
      },
      {
        path: "stopwatch",
        element: <StopWatch />
      },
      {
        path: "timer",
        element: <Timer />
      },
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
