import React from 'react'
import Styles from './Card.module.css'

function Card({text,content}) {
  return (
    <div className={Styles['container']}>
        {text}
    <div className={Styles['para']}>
      <p>{content}</p>
    </div>
    </div>
  )
}

export default Card