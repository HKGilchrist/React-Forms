import { useState } from "react"
let API_URL = "https://fsa-jwt-practice.herokuapp.com/signup";

function SignUpForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  
  async function handleSubmit() {
    event.preventDefault();
    // console.log("Hello!");
    try {
      let response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type" : "application/json" },
        body: JSON.stringify({
          username,
          password
        })
      });
      if (response.ok) {
        let result = await response.json();
        props?.setToken(result.token)
        console.log(result);
      } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
    }
    catch (error) {
      console.error(error.message)
    }
  }

  return (
    <> 
    <h2>Sign Up</h2>

    {error && <p>{error}</p>}

    <form onSubmit={handleSubmit}>
      <label>
      Username: <input value={username} onChange={(e) => setUsername(e.target.value)}/>
      </label>
      <label>
      Password: <input value={password} onChange={(e) => setPassword(e.target.value)}/>
      </label>
      <button>Submit</button>
  </form>
  </>
  )

}

export default SignUpForm