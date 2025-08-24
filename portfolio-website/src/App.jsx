import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import ProjectsPage from './pages/ProjectsPage'
import About from './components/About'
import HomePage from './pages/HomePage'
import ProjectCards from './components/ProjectCards'

const App = () => {
  return (
    <>
      <HomePage/>
    </>
  )
}

export default App