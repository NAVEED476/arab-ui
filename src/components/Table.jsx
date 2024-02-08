import React, { useState } from "react";
import "./Table.css";
import TableRow from "./Row";
import Pagination from "./Pagination";

const Table = ({ setUserData }) => {
  const [editedUserName, setEditedUserName] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [editRole, setEditRole] = useState("");
  const [isEditDialogOpen, setEditDialogOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const data = [
    {
      id: "1",
      name: "naveed",
      email: "naveed@gmail.com",
      role: "admin",
    },
    {
      id: "1",
      name: "naveed",
      email: "naveed@gmail.com",
      role: "admin",
    },
    {
      id: "1",
      name: "naveed",
      email: "naveed@gmail.com",
      role: "admin",
    },
    {
      id: "1",
      name: "naveed",
      email: "naveed@gmail.com",
      role: "admin",
    },
    {
      id: "1",
      name: "naveed",
      email: "naveed@gmail.com",
      role: "admin",
    },
    {
      id: "1",
      name: "naveed",
      email: "naveed@gmail.com",
      role: "admin",
    },
    {
      id: "1",
      name: "naveed",
      email: "naveed@gmail.com",
      role: "admin",
    },
    {
      id: "1",
      name: "naveed",
      email: "naveed@gmail.com",
      role: "admin",
    },
    {
      id: "1",
      name: "naveed",
      email: "naveed@gmail.com",
      role: "admin",
    },
  ];

  const handlePagination = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentUsers = data.slice(startIndex, endIndex);

  return (
    <>
      <div>
        <div className="table-cont">
          <table>
            <thead>
              <tr>
                <td>
                  <th >Id</th>
                </td>

                <td>
                  <th>Name</th>
                </td>
                <td>
                  <th>Email</th>
                </td>
                <td>
                  <th>Role</th>
                </td>
              </tr>
            </thead>
            <tbody>
              {currentUsers.map((user) => (
                <TableRow key={user.id} user={user} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Pagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={data.length}
        handlePagination={handlePagination}
      />
    </>
  );
};

export default Table;
