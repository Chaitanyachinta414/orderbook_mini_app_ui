
import { useState } from 'react';
import { useNavigate} from 'react-router-dom';

 
function UserLogin() {

  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
    const [value, setValue] = useState("");
  
    const handleChange = (e) => {
      setValue(e.target.value);
    };

  const handleLogin = (selectVal) => {
    // Create a request body with the username and password
    const requestBody = {
      username: username,
      password: password,
    };
    
    fetch("http://localhost:8080/api/users/login?requiredRole="+selectVal.toLowerCase(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    }).then((response) => {
      if (response.ok) {
        // Handle successful login
        setError("Login Successful!!");
        setTimeout(() => {
          navigate("/referencedata");
        }, 1000);
      } else {
        // Handle login failure
        setError("Please enter a valid Credentials");
      }
    });
  };
  return (

    <div className='App'>

      <div className='loginContainer'>

        <h1>Welcome!</h1>

 

        <div className='input-container'>

          <label>Username </label>

          <input type='text' value={username}

            onChange={(e) => setUsername(e.target.value)} />

        </div>

        <div className='input-container'>

          <label>Password </label>

          <input type='password' value={password}

            onChange={(e) => setPassword(e.target.value)} />

        </div>
        <div className="dropdown input-container">
          <label>Login as</label>
            <select onChange={handleChange} >
                <option value="">Select Login type</option>
                <option value="User">User</option>
                <option value="IBU_Head">IBU Head </option>
                <option value="PM">Program Manager </option>
            </select>
        </div>


        <button className='loginBut' onClick={()=>handleLogin(value)}><p>Login</p></button>
       
        {error && (<p>{error}</p>)}


      </div>

    </div>

  );

}

 

export default UserLogin