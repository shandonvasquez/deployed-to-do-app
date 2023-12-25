const Modal =() => {

  const mode = 'edit';

    return (
   <div className="overlay">     
    <div className="modal">
      <div className="form-tittle-container">
        <h3>Let's {mode} create you task</h3>
        <button>X</button>
      </div>
      <form>
        <input
        required
        maxlength={30}
        plasholder="Your task goes"
        />
        <input/>
        <input type="submit"/>

      </form>
      </div>
   </div>
    );
  }
  
  export default Modal;
