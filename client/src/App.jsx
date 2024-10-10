import React from 'react'
import { useRoutes, Link } from 'react-router-dom'
import Locations from './pages/Locations'
import LocationEvents from './pages/LocationEvents'
import Events from './pages/Events.jsx'; 
import './App.css'

const App = () => {
  let element = useRoutes([
    {
      path: '/',
      element: <Locations />
    },
    {
      path: '/taipei-arena',
      element: <LocationEvents index={1} location2="taipei-arena"/>
    },
    {
      path: '/taipei-music-center',
      element: <LocationEvents index={2} location2="taipei-music-center"/>
    },
    {
      path: '/weiwuying',
      element: <LocationEvents index={3} location2="weiwuying"/>
    },
    {
      path: '/national-taichung-theater',
      element: <LocationEvents index={4} location2="national-taichung-theater"/>
    },
    {
      path: '/events',
      element: <Events />
    }
  ])

  return (
    <div className='app'>

      <header className='main-header'>
        <h1>UnityGrid Plaza - Taiwan</h1>

        <div className='header-buttons'>
          <Link to='/' role='button'>Home</Link>
          <Link to='/events' role='button'>Events</Link>
        </div>
      </header>

      <main>
        {element}
      </main>
    </div>
  )
}

export default App