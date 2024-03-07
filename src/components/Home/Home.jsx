import React from 'react'
import Styles from './Home.module.css'
import Card from './Card/Card'
function Home() {
  return (
    <div id={Styles['home']}>
      <form>
      <input type='text' name='search-bar' id={Styles['search-bar']}></input>
      <button type='submit' id={Styles['search']}>Search</button>
      </form>

      <div id={Styles['cards']}>
      <Card text="Basic-Info" para="matter"/>
      <Card text="History" para="matter"/>
      <Card text="Geography" para="matter"/>
      <Card text="Culture" para="matter"/>
      </div>

    </div>
  )
}

export default Home