import ListHeader from './components/ListHeader'
import ListItem from './components/ListItem'
import { useEffect, useState } from 'react'

const App =() => {
  const userEmail = 'shandon1915211@gmail.com'
    const [ tasks, setTasks ] = useState(null)
    
  const getData = async () => {
  
    try {
      const response = await fetch(`http://localhost:8000/todos${userEmail}`)
      const json = await response.json()
      //setTasks(json)
      console.log(json)
      setTasks(json)
    } catch (err) {
      console.error(err)
    }
  } 

  useEffect(() =>  getData  , [])
  console.log(tasks)

//sort by date
const sortedTask = tasks?.sort((a, b) => new Date(a.date) - new Date(b.date))




  return (
    <div className="app" >
      <ListHeader ListName={"Holiday tick list"}/>
      {sortedTask?.map((task) => <ListItem key={task.id} task={task} />)}
    </div>



  );
}

export default App;
