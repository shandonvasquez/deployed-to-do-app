import ListHeader from './components/ListHeader'
import { useEffect, useState } from 'react'

const App =() => {
  const userEmail = 'shandon1915211@gmail.com'
    const [ tasks, setTasks ] = useState(null)
    kasdfj
  const getData = async () => {
  
    try {
      const response = await fetch(`http://localhost:8000/todos${userEmail}`)
      const json = await response.json()
      //setTasks(json)
      console.log(json)
    } catch (err) {
      console.error(err)
    }
  } 

  useEffect(() =>  getData  , [])


  return (
    <div className="app" >
      <ListHeader ListName={"Holiday tick list"}/>
    </div>



  );
}

export default App;
