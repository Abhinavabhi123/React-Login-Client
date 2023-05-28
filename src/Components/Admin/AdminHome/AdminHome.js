import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router";

function AdminHome() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState([]);
  const [search, setSearch] = useState("");
  const [deleteUser, setDeleteUser] = useState(0);
  const handleChange = () => {};

  const editeUser = () => {};

  const DeleteUser = () => {};

  return (
    <div className="table">
      <div className="search2">
        <input
          className="mt-5"
          type="text"
          placeholder="Search here"
          onChange={handleChange}
          value={search}
        />
      </div>

      <Table classNameName="mt-3 " striped bordered hover>
        <thead style={{ color: "white" }}>
          <tr>
            <th>Sl.no</th>
            <th>Name</th>
            <th>Email</th>
            <th>Edit</th>
            <th>Delete </th>
          </tr>
        </thead>
        <tbody className="values " style={{ color: "white" }}>
          {userData.map((obj, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{obj.username}</td>
                <td>{obj.email}</td>
                <td>
                  <Button
                    onClick={() => editeUser(obj._id, obj.username, obj.email)}
                    variant="primary"
                  >
                    Edit
                  </Button>
                </td>
                <td>
                  <Button onClick={() => DeleteUser(obj._id)} variant="danger">
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default AdminHome;
