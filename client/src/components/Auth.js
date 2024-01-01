import {useState} from 'react';
const Auth =() => {
  const [error, setError] = useState(null);
  const isLogin = false;
    return (
      
      <div className="auth-container">
       <div className="auth-container-box">
       <form>
        <h2>{isLogin ? 'Please log in' : 'Please sing up!'}</h2>
          <input type="email" placeholder="email"></input>
          <input type="password" placeholder="password"></input>
          {!isLogin &&           <input type="password" placeholder= "confirm password" ></input>} 
        <input type="submit" className="create"/>
        {error && <p className="error">{error}</p>} 
        <p></p>
        </form>
        <div className='auth-options'>
          <button>Sing Up</button>
          <button>Login</button>
        </div>
       </div>
      </div>
    );
  }
  
  export default Auth;
  