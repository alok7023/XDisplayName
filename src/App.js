import { useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "firstName") {
      setFirstName(value);
    } else {
      setLastName(value);
    }
  };
  const displayFullName = (e) => {
    e.preventDefault();
    if (firstName && lastName) {
      const name = `${firstName} ${lastName}`;
      setFullName(name);
    }
  };
  return (
    <div className="container">
      <h1>Full Name Display</h1>
      <form onSubmit={displayFullName}>
        <div className="inputField">
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="inputField">
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={handleInputChange}
            required
          />
        </div>
        <button className="submitBtn" type="submit">
          Submit
        </button>
      </form>
      <div className="displayFullName">
        {fullName && <p>Full Name: {fullName}</p>}
      </div>
    </div>
  );
}

export default App;
