import React from 'react'
import Styles from './Header.module.css'

function Header() {
  return (
    <div id={Styles['header']}>
        <h1 id={Styles['logo']}>Know_The_Country</h1>
    </div>
  )
}

export default Header