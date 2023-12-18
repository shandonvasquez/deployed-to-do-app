import ListHeader from './components/ListHeader'
const App =() => {

  // const getData = async () => {
  //   try {
  //     const response = await fetch(`${process.env.REACT_APP_SERVERURL}/todos/${userEmail}`)
  //     const json = await response.json()
  //     setTasks(json)
  //   } catch (err) {
  //     console.error(err)
  //   }
  // } this part is not working 

  return (
    <div className="app" >
      <ListHeader ListName={"Holiday tick list"}/>
    </div>



  );
}

export default App;
