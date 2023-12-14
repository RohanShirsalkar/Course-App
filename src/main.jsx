import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import "./utility.scss"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import HomeScreen from './screens/home/HomeScreen.jsx'
import CourseDetails from './screens/course_datails/CourseDetails.jsx'
import StudentPortalScreen from './screens/student_portal/studentPortalScreen.jsx'
import { store } from './app/store.js'
import SearchScreen from './screens/search/SearchScreen.jsx'

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomeScreen />
      },
      {
        path: "/course/:id",
        element: <CourseDetails />
      },
      {
        path: "/student_portal/:id",
        element: <StudentPortalScreen />
      },
      {
        path: "/search",
        element: <SearchScreen />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
