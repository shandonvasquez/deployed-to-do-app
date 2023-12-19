import ListHeader from './components/ListHeader'
import { useEffect } from 'react'

const App =() => {

  const getData = async () => {
    const userEmail = 'shandon1915211@gmail.com'
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVERURL}/todos/${userEmail}`)
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
