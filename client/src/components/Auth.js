const Auth =() => {
  const isLogin = false;
    return (
      <div className="auth-container">
       <div className="auth-container-box">
       <form>
        <h2>{isLogin ? 'Please log in' : 'Please sing up!'}</h2>
          <input type="email" placeholder="email"></input>
          <input type="password" placeholder="password"></input>
          {!isLogin &&           <input type="password" placeholder= "confirm password" ></input>} 
        </form>
       </div>
      </div>
    );
  }
  
  export default Auth;
  