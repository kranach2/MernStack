import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
const Editmember = () => {
  const { id } = useParams();
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

  //  useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/users/" +   id  )
  //     .then(response => {
  //       console.log(id);
  //       setfirstname(response.data.firstname);
  //       setlastname(response.data.lastname);
  //       setemail(response.data.email);
  //       setcontact(response.data.contact);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  //});

  const handleSubmit = e => {
    e.preventDefault();

    setloading(true);
    const member = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      contact: contact
    };

    axios
      .post("api/users/update/" + id, member)
      .then(res => {console.log(res.data)
        setloading(false);
      setmessage("Member updated!!!");
    setfirstname("");
    setlastname("");
    setemail("");
    setcontact("");
      })
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
      <h3>This is Edit membership page</h3>
      <h2>Edit your profile</h2>
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
        <input type="submit" value="Submit" />
      </form>
      {message1()}
    </div>
  );
};
export default Editmember;
