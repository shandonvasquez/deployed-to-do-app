const ListHeader =({ ListName }) => {
    const signOut = () => {
      console.log("sign out")
    }  


    return (
      <div className="list-header">
       <h1>       {ListName} </h1>
      <div className="button-container"> 
        <button className="create">Add new</button>
        <button className="signout" onClick={signOut}>Sign out </button>
      </div>
      </div>
    )
  }
  
  export default ListHeader;