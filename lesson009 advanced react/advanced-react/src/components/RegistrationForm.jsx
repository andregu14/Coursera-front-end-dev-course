import { useState } from "react";
import "../assets/styles/RegistrationForm.css"
const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
};
  

const PasswordErrorMessage = () => {
        return (
        <p className="FieldError1">Password should have at least 8 characters</p>
      );
};

export default function RegistrationForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");

  const getIsFormValid = () => {
    
    return (
      firstName &&
      validateEmail(email) &&
      password.value.length >= 8 &&
      role !== "role"
    )
  };

  const clearForm = () => {
    setFirstName("")
    setLastName("")
    setEmail("")
    setPassword({
      value: "",
      isTouched: false,
    })
    setRole("role")
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Account created!");
    clearForm();
  };

  return (
    <div className="App1">
      <form onSubmit={handleSubmit}>
        <fieldset id="fieldset1">
          <h2>Sign Up</h2>
          <div className="Field1">
            <label>
              First name <sup>*</sup>
            </label>
            <input className="input1" placeholder="First name" value={firstName} onChange={ e => setFirstName(e.target.value) }/>
          </div>
          <div className="Field1">
            <label>Last name</label>
            <input className="input1" placeholder="Last name" value={lastName} onChange={ e => setLastName(e.target.value) }/>
          </div>
          <div className="Field1">
            <label>
              Email address <sup>*</sup>
            </label>
            <input className="input1" placeholder="Email address" value={email} onChange={ e => setEmail(e.target.value) }/>
          </div>
          <div className="Field1">
            <label>
              Password <sup>*</sup>
            </label>
            <input className="input1" type="password" placeholder="Password" value={password.value} onChange={(e) => {
              setPassword({ ...password, value: e.target.value })
            }} onBlur={() => setPassword({ ...password, isTouched: true })} />
            {password.isTouched && password.value.length < 8 ? <PasswordErrorMessage /> : null}
          </div>
          <div className="Field1">
            <label>
              Role <sup>*</sup>
            </label>
            <select className="select1" value={role} onChange={e => setRole(e.target.value)}>
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button type="submit" disabled={!getIsFormValid()}>
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  );
}

