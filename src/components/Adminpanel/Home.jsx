import React from 'react'
import './Home.css'
import Topbar from './Topbar'
import Sidebar from './Sidebar'

const Home = (props) => {
  return (
    <div>

     <Topbar xxx={props.checkLogout}/>
     <p className='wel'> Welcome to the grocery shop-- Admin</p>
     <Sidebar/>
      </div>
  )
}

export default Home