const Auth =() => {
  const isLogin = false;
    return (
      <div className="auth-container">
       <div className="auth-container-box">
       <form>
        <h2>{isLogin ? 'Please log in' : 'Please sing up!'}</h2>
          <input type="email"></input>
          <input type="password"></input>
          <input type="password" ></input>
        </form>
       </div>
      </div>
    );
  }
  
  export default Auth;
  