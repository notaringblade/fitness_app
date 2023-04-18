import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './components/pages/home/homePageTest';
import CreatePage from './components/pages/create/createPage';
import SearchResult from './components/pages/searchResult/searchResult';
import ViewWorkout from './components/pages/workoutView/viewWorkout';
import UserProfile from './components/pages/userProfilePage.js/userProfile';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home/:userData",
    element: <HomePage />,
  },
  {
    path: "/create/:userData",
    element: <CreatePage />,
  },
  {
    path: "/searchResult/:username",
    element: <SearchResult />,
  },
  {
    path: "/viewWorkout/:workout",
    element: <ViewWorkout />,
  },
  {
    path: "/userProfile/:userData",
    element: <UserProfile />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
