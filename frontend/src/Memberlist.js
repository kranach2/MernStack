import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Memberlist() {
  const [user, setuser] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/users/")
      .then(response => {
        setuser(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  });

  const deleteUser = id => {
    axios.delete("http://localhost:5000/users/" + id).then(res => {
      console.log(res.data);
    });
    console.log("deleted");
    //setuser(user.filter(el=>el._id !== id));
  };

  return (
    <div>
      <h1>Member List</h1>

      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Action</th>
          </tr>
        </thead>

        {user.map(users => {
          return (
            <tbody key={users._id}>
              <tr>
                <td>{users.firstname}</td>
                <td>{users.lastname}</td>
                <td>{users.email}</td>
                <td>{users.contact}</td>

                <td>
                  <button
                    onClick={() => {
                      deleteUser(users._id);
                    }}
                  >
                    Delete
                  </button>
                  <button>
                    <Link to={"/edit/" + users._id}>Edit</Link>
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}
