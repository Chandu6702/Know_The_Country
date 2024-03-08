import {React,useState} from 'react'

import Styles from './Home.module.css'
import Card from './Card/Card'
function Home() {
  const [search,setSearch] = useState(
    {
      key:''
    }
  )

  function handleSubmit(e)
  {
    e.preventDefault()
  }

  function handleChange(e)
  {
    setSearch({key:e.target.value})
  }

  return (
    <div id={Styles['home']}>
      <form>
      <input type='text' name='search-bar' id={Styles['search-bar']} onChange={handleChange} value={search.key}></input>
      <button type='submit' id={Styles['search']} onClick={handleSubmit}>Search</button>
      </form>

      <div id={Styles['cards']}>
      <Card text="Basic-Info"/>
      <Card text="History" />
      <Card text="Geography" />
      <Card text="Culture" />
      </div>

    </div>
  )
}

export default Home