import {React,useState} from 'react'
import axios from 'axios'

import Styles from './Home.module.css'
import Card from './Card/Card'
function Home() {
  const [search,setSearch] = useState(
    {
      key:''
    }
  )

  const [data,setData]=useState({})

  async function handleSubmit(e)
  {
    e.preventDefault()
    console.log(e);
    const res=await axios.get(`http://127.0.0.1:3000/${search.key}`);
    setData(res.data)
  }

  function handleChange(e)
  {
    setSearch({key:e.target.value.toUpperCase()})
  }

  return (
    <div id={Styles['home']}>
      <form>
      <input type='text' name='search-bar' id={Styles['search-bar']} onChange={handleChange} placeholder="Enter country name" value={search.key} required></input>
      <button type='submit' id={Styles['search']} onClick={handleSubmit} >Search</button>
      </form>

      <div id={Styles['cards']}>
      <Card text="Basic-Info" content={data.info}/>
      <Card text="History" content={data.history}/>
      <Card text="Geography" content={data.geography}/>
      <Card text="Culture" content={data.culture}/>
      </div>

    </div>
  )
}

export default Home