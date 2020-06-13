import React from 'react'
import './Tabs.css'
function Tabs() {
  return (
    <ul className='tabs'>
      <li>Overview</li>
      <li className='active'>Repos <span className="badge">5</span> </li>
      <li>Stars <span className="badge">10</span></li>
      <li>Followers <span className="badge">2</span></li>
      <li>Following <span className="badge">50</span></li>
    </ul>
  )
}

export default Tabs
