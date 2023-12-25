import Modal from "./Modal.js";
import { useState } from "react";

const ListHeader =({ ListName }) => {
    const [showModal, setShowModal] = useState(false);
    const signOut = () => {
      console.log("sign out")
    }  


    return (
      <div className="list-header">
       <h1>       {ListName} </h1>
      <div className="button-container"> 
        <button className="create" onClick={() => setShowModal(true)}>Add new</button>
        <button className="signout" onClick={signOut}>Sign out </button>
      </div>
      <Modal mode={'create'} setShowModal = {setShowModal}/>
      </div>
    )
  }
  
  export default ListHeader;