const Modal =() => {

  const mode = 'edit';

  const handleChange = () => {
    console.log("changing"  );
  }
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
        name="title"
        value= {""}
        onChange={handleChange}
        />
        <br/>
        <input
        required
        type="range"
        min="0"
        max="100"
        name="progress"
        value= {""}
        onChange={handleChange}
        />
        <input className={mode} type="submit"/>

      </form>
      </div>
   </div>
    );
  }
  
  export default Modal;
