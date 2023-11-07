import { useState } from "react"
let API_AUTH = "https://fsa-jwt-practice.herokuapp.com/authenticate";


function Authenticate(props) {
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState(null);

  async function handleClick() {
    try {
      const response = await fetch(API_AUTH, {
        method: "GET",
        headers: { "Content-Type" : "application/json",
        Authorization: `Bearer ${token}`,
      },
      });

      const result = await response.json();
      setSuccessMessage(result.message);
    }
    catch (error) {
      setError(error.message);
    }
  }

  return (
    <div>
    <h2>Authenticate</h2>
    {successMessage && <p>{sucessMessage}</p>}
    {error && <p>{error}</p>}
    <button onClick={handleClick}>Authenticate Token</button>
    </div>
  )

}

export default Authenticate