import React ,{useState} from 'react'
import axios from 'axios'
import Styles from './Admin.module.css'

function Admin() {

  const[data,setData]=useState({
    name:"",
    info:"",
    history:"",
    geography:"",
    culture:""
  })

  function handleChange(e){
    setData({...data,[e.target.name]:e.target.value.toUpperCase()})
    console.log(data);
  }

  async function handleSubmit(e){
    e.preventDefault()
    await axios.post('http://127.0.0.1:3000/add',data);
  }

  return (
    <div id={Styles['container']}>
      <form id={Styles['form']}>
        <input type='text' name='name' value={data.name} placeholder='name' onChange={handleChange}/>
        <textarea name='info' value={data.info} placeholder='info' onChange={handleChange}/>
        <textarea name='history' value={data.history}  placeholder='history' onChange={handleChange}/>
        <textarea name='geography' value={data.geography} placeholder='geography' onChange={handleChange}/>
        <textarea name='culture' value={data.culture} placeholder='culture' onChange={handleChange}/>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default Admin