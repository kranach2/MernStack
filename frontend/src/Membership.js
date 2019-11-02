import React, { useState } from "react";
import axios from "axios";
const Membership = () => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [contact, setcontact] = useState("");
  const [loading, setloading] = useState(false);
  const [message, setmessage] = useState("");

  const handleFirstName = e => {
    return setfirstname(e.target.value.toUpperCase().substr(0, 10));
  };
  const handleLastName = e => {
    return setlastname(e.target.value.toUpperCase().substr(0, 10));
  };
  const handleEmail = e => {
    return setemail(e.target.value);
  };
  const handleContact = e => {
    return setcontact(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    setloading(true);
    const member = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      contact: contact
    };

    axios.post("api/users/add", member).then(res => {
      console.log(res.data);
      setloading(false);
      setmessage("User added!!!");
      setfirstname("");
      setlastname("");
      setemail("");
      setcontact("");
    });

    //  console.log(member);
    //  console.log(e.target[0].value);
    //  console.log(e.target[1].value);
    //  console.log(e.target[2].value);
    //  console.log(e.target[3].value);
    //window.location=("/Memberlist");
  };

  const message1 = () => {
    if (loading) {
      return <p>Loading...</p>;
    } else {
      return <p>{message}</p>;
    }
  };
  return (
    <div>
      <h3>This is membership page</h3>
      <form onSubmit={handleSubmit}>
        <label>First Name:</label>{" "}
        <input
          onChange={handleFirstName}
          type="text"
          name="firstname"
          value={firstname}
          placeholder="FirstName"
        />{" "}
        <br />
        <label>Last Name:</label>{" "}
        <input
          onChange={handleLastName}
          type="text"
          name="lastname"
          value={lastname}
          placeholder="Last Name"
        />
        <br />
        <label>Email:</label>{" "}
        <input
          onChange={handleEmail}
          type="text"
          value={email}
          name="email"
          placeholder="Email"
        />
        <br />
        <label>Contact:</label>{" "}
        <input
          onChange={handleContact}
          type="text"
          name="contact"
          value={contact}
          placeholder="Contact"
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
      {message1()}
    </div>
  );
};
export default Membership;
