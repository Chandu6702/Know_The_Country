import React from 'react'
import Styles from './Footer.module.css'

function Footer() {
    const date=new Date();
    return (
        <div id={Styles['footer']}>
            <h2>Know_The_Country@{date.getFullYear}</h2>
        </div>
    )
}

export default Footer